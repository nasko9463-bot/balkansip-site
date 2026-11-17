import { NextResponse } from "next/server";
import { Resend } from "resend";

// Формата за контакт праща запитването като имейл през акаунта на фирмата
// в Resend. Нужна е само една настройка във Vercel:
//   RESEND_API_KEY  ключът от resend.com
// По желание:
//   CONTACT_EMAIL   къде да идват запитванията (по подразбиране contact@balkansip.bg)
//   CONTACT_FROM    подател (по подразбиране website@balkansip.bg)

const DEFAULT_TO = "contact@balkansip.bg";
const DEFAULT_FROM = "Balkan Sip Website <website@balkansip.bg>";

const LIMITS = {
  fullName: 120,
  email: 200,
  company: 160,
  reason: 200,
  social: 200,
  message: 5000,
};

type Lang = "bg" | "en";

const messages = {
  bg: {
    missing: "Моля, попълнете всички задължителни полета.",
    badEmail: "Моля, въведете валиден имейл адрес.",
    tooLong: "Някое от полетата е твърде дълго.",
    failed:
      "Не успяхме да изпратим запитването. Моля, опитайте отново или ни пишете на contact@balkansip.bg.",
    sent: "Запитването ви е изпратено успешно!",
  },
  en: {
    missing: "Please fill in all required fields.",
    badEmail: "Please enter a valid email address.",
    tooLong: "One of the fields is too long.",
    failed:
      "We could not send your enquiry. Please try again or write to contact@balkansip.bg.",
    sent: "Your enquiry has been sent!",
  },
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

// Текстът от формата се показва в имейла, затова се обезвреждат символите,
// с които някой може да вмъкне свой HTML или линкове.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fail(text: string, status: number) {
  return NextResponse.json({ success: false, error: text }, { status });
}

export async function POST(request: Request) {
  let body: Record<string, unknown> = {};

  try {
    body = await request.json();
  } catch {
    return fail(messages.bg.missing, 400);
  }

  const lang: Lang = body.lang === "en" ? "en" : "bg";
  const t = messages[lang];

  // Скрито поле срещу ботове. Хората не го виждат и не го попълват.
  if (clean(body.website)) {
    return NextResponse.json({ success: true, message: t.sent });
  }

  const fullName = clean(body.fullName);
  const email = clean(body.email);
  const company = clean(body.company);
  const reason = clean(body.reason);
  const social = clean(body.social);
  const message = clean(body.message);

  if (!fullName || !email || !reason || !message) {
    return fail(t.missing, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return fail(t.badEmail, 400);
  }

  if (
    fullName.length > LIMITS.fullName ||
    email.length > LIMITS.email ||
    company.length > LIMITS.company ||
    reason.length > LIMITS.reason ||
    social.length > LIMITS.social ||
    message.length > LIMITS.message
  ) {
    return fail(t.tooLong, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const isRealKey = Boolean(apiKey && apiKey.startsWith("re_"));

  // В прегледа няма истински ключ. Там запитването не се праща никъде, но
  // формата се държи като успешна, за да може да се разгледа.
  // На живия сайт липсващ ключ е грешка и се показва като такава.
  if (!isRealKey) {
    if (process.env.VERCEL_ENV === "production") {
      console.error("Contact form: RESEND_API_KEY is missing or invalid.");
      return fail(t.failed, 500);
    }

    console.info("Contact form (preview): enquiry accepted but not sent.");
    return NextResponse.json({ success: true, message: t.sent, preview: true });
  }

  const to = process.env.CONTACT_EMAIL?.trim() || DEFAULT_TO;
  const from = process.env.CONTACT_FROM?.trim() || DEFAULT_FROM;

  const rows: [string, string][] = [
    ["Име", fullName],
    ["Имейл", email],
    ...(company ? ([["Фирма", company]] as [string, string][]) : []),
    ["Повод за контакт", reason],
    ...(social ? ([["Социална мрежа", social]] as [string, string][]) : []),
    ["Тип клиент", company ? "Фирма (B2B)" : "Частно лице (B2C)"],
    ["Език на сайта", lang === "en" ? "английски" : "български"],
  ];

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #142f64;">
      <h2 style="margin-bottom: 24px;">Ново запитване от сайта</h2>
      ${rows
        .map(
          ([label, value]) =>
            `<p><strong>${label}:</strong><br />${escapeHtml(value)}</p>`,
        )
        .join("\n")}
      <p><strong>Съобщение:</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      <hr style="margin: 32px 0; border: none; border-top: 1px solid #ddd;" />
      <p style="font-size: 13px; color: #777;">
        Изпратено чрез формата за контакт на balkansip.bg. Натиснете „Отговор“, за да пишете направо на клиента.
      </p>
    </div>
  `;

  const text = [
    "Ново запитване от сайта",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Съобщение:",
    message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Ново запитване от ${fullName}${company ? `, ${company}` : ""}`.replace(
        /[\r\n]+/g,
        " ",
      ),
      html,
      text,
    });

    if (error) {
      console.error("Contact form: Resend error", error);
      return fail(t.failed, 502);
    }
  } catch (error) {
    console.error("Contact form: unexpected error", error);
    return fail(t.failed, 500);
  }

  return NextResponse.json({ success: true, message: t.sent });
}

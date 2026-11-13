import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
const resendApiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL ?? "";

if (!supabaseUrl || !supabaseSecretKey) {
  throw new Error("Missing Supabase environment variables.");
}

if (!resendApiKey || !contactEmail) {
  throw new Error("Missing Resend environment variables.");
}

const supabase = createClient(supabaseUrl, supabaseSecretKey);
const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { fullName, email, reason, social, message } = body;

    if (!fullName || !email || !reason || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Моля, попълнете всички задължителни полета.",
        },
        { status: 400 },
      );
    }

    const cleanFullName = fullName.trim();
    const cleanEmail = email.trim();
    const cleanReason = reason.trim();
    const cleanSocial = social?.trim() || null;
    const cleanMessage = message.trim();

    const { error: supabaseError } = await supabase
      .from("contact_requests")
      .insert({
        full_name: cleanFullName,
        email: cleanEmail,
        reason: cleanReason,
        social: cleanSocial,
        message: cleanMessage,
        status: "new",
      });

    if (supabaseError) {
      console.error("Supabase insert error:", supabaseError);

      return NextResponse.json(
        {
          success: false,
          error: "Възникна проблем при записването на запитването.",
        },
        { status: 500 },
      );
    }

    const { error: resendError } = await resend.emails.send({
      from: "Balkan Sip Website <website@balkansip.bg>",
      to: [contactEmail],
      replyTo: cleanEmail,
      subject: `Ново запитване от ${cleanFullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #142f64;">
          <h2 style="margin-bottom: 24px;">
            Ново запитване от Balkan Sip
          </h2>

          <p>
            <strong>Име:</strong><br />
            ${cleanFullName}
          </p>

          <p>
            <strong>Имейл:</strong><br />
            ${cleanEmail}
          </p>

          <p>
            <strong>Повод за контакт:</strong><br />
            ${cleanReason}
          </p>

          ${
            cleanSocial
              ? `
                <p>
                  <strong>Социална мрежа:</strong><br />
                  ${cleanSocial}
                </p>
              `
              : ""
          }

          <p>
            <strong>Съобщение:</strong><br />
            ${cleanMessage.replace(/\n/g, "<br />")}
          </p>

          <hr style="margin: 32px 0; border: none; border-top: 1px solid #ddd;" />

          <p style="font-size: 13px; color: #777;">
            Това съобщение е изпратено чрез формата за контакт на balkansip.bg
          </p>
        </div>
      `,
    });

    if (resendError) {
      console.error("Resend email error:", resendError);

      return NextResponse.json(
        {
          success: false,
          error:
            "Запитването беше записано, но възникна проблем при изпращането на имейла.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Запитването ви е направено успешно!",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Възникна неочаквана грешка.",
      },
      { status: 500 },
    );
  }
}

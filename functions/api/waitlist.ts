// Cloudflare Pages Function for Navii Waitlist
// Sends email notifications via Resend API and stores contacts in Resend Audiences

interface Env {
  RESEND_API_KEY: string;
  RESEND_AUDIENCE_ID: string;
}

interface WaitlistRequest {
  type: "shopper" | "venue";
  email: string;
  company?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  try {
    const body: WaitlistRequest = await context.request.json();
    const { type, email, company } = body;

    if (!email || !type) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: corsHeaders }
      );
    }

    const apiKey = context.env.RESEND_API_KEY;
    const audienceId = context.env.RESEND_AUDIENCE_ID;

    if (!apiKey) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: corsHeaders }
      );
    }

    // Save contact to Resend Audience (lead database)
    console.log(`Audience ID configured: ${audienceId || "NOT SET"}`);
    if (audienceId) {
      try {
        const audienceResponse = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            first_name: company || type,
            last_name: type === "venue" ? "Venue Partner" : "Waitlist",
            unsubscribed: false,
          }),
        });
        const audienceResult = await audienceResponse.text();
        console.log(`Audience API response (${audienceResponse.status}):`, audienceResult);
        if (audienceResponse.ok) {
          console.log(`Contact saved to audience: ${email} (${type})`);
        } else {
          console.error(`Audience API error: ${audienceResult}`);
        }
      } catch (audienceError) {
        console.error("Failed to save to audience:", audienceError);
      }
    } else {
      console.log("RESEND_AUDIENCE_ID not configured, skipping audience save");
    }

    // Send notification email to admin
    const adminEmailHtml = type === "shopper"
      ? `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00E5FF;">New Navii Waitlist Signup</h2>
          <div style="background: #1a1a1a; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <p style="color: #888; margin: 0 0 8px;">Type</p>
            <p style="color: #fff; margin: 0 0 16px; font-size: 18px;">Shopper</p>
            <p style="color: #888; margin: 0 0 8px;">Email</p>
            <p style="color: #00E5FF; margin: 0; font-size: 18px;">${email}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Sent from Navii Waitlist</p>
        </div>
      `
      : `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF00E5;">New Venue Partnership Request</h2>
          <div style="background: #1a1a1a; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <p style="color: #888; margin: 0 0 8px;">Type</p>
            <p style="color: #fff; margin: 0 0 16px; font-size: 18px;">Venue Owner</p>
            <p style="color: #888; margin: 0 0 8px;">Company</p>
            <p style="color: #fff; margin: 0 0 16px; font-size: 18px;">${company || "Not provided"}</p>
            <p style="color: #888; margin: 0 0 8px;">Email</p>
            <p style="color: #FF00E5; margin: 0; font-size: 18px;">${email}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Sent from Navii Waitlist</p>
        </div>
      `;

    // Send notification to admin
    const adminResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Navii <waitlist@constantlabs.ai>",
        to: ["contantlabsai@gmail.com"],
        subject: type === "shopper"
          ? `New Waitlist Signup: ${email}`
          : `New Venue Partnership: ${company || email}`,
        html: adminEmailHtml,
      }),
    });

    if (!adminResponse.ok) {
      const errorData = await adminResponse.text();
      console.error("Resend API error:", errorData);
      return new Response(
        JSON.stringify({ error: "Failed to process signup" }),
        { status: 500, headers: corsHeaders }
      );
    }

    // Send confirmation email to user
    const userEmailHtml = type === "shopper"
      ? `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #050505; padding: 40px; border-radius: 16px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #00E5FF; font-size: 36px; margin: 0;">NAVII</h1>
            <p style="color: #888; margin: 8px 0 0;">Indoor Navigation, Reinvented</p>
          </div>
          <h2 style="color: #fff; text-align: center;">You're on the list!</h2>
          <p style="color: #ccc; text-align: center; line-height: 1.6;">
            Thank you for joining the Navii waitlist. We're building the future of indoor navigation,
            and you'll be among the first to experience it.
          </p>
          <div style="text-align: center; margin: 32px 0;">
            <a href="https://constantlabs.ai/navii" style="display: inline-block; background: linear-gradient(to right, #00E5FF, #FF00E5); color: #000; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 600;">
              Visit Our Website
            </a>
          </div>
          <p style="color: #666; font-size: 12px; text-align: center;">
            &copy; 2025 Navii by Constant Labs. All rights reserved.
          </p>
        </div>
      `
      : `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #050505; padding: 40px; border-radius: 16px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #FF00E5; font-size: 36px; margin: 0;">NAVII</h1>
            <p style="color: #888; margin: 8px 0 0;">Partnership Inquiry Received</p>
          </div>
          <h2 style="color: #fff; text-align: center;">We'll be in touch!</h2>
          <p style="color: #ccc; text-align: center; line-height: 1.6;">
            Thank you for your interest in partnering with Navii. Our team will review your inquiry
            and reach out within 24-48 hours to discuss how we can help transform indoor navigation at ${company || "your venue"}.
          </p>
          <div style="background: #1a1a1a; padding: 20px; border-radius: 12px; margin: 24px 0;">
            <p style="color: #888; margin: 0 0 8px; font-size: 14px;">What's next?</p>
            <ul style="color: #ccc; margin: 0; padding-left: 20px; line-height: 1.8;">
              <li>Our partnership team will contact you</li>
              <li>We'll schedule a discovery call</li>
              <li>Custom demo tailored to your venue</li>
            </ul>
          </div>
          <p style="color: #666; font-size: 12px; text-align: center;">
            &copy; 2025 Navii by Constant Labs. All rights reserved.
          </p>
        </div>
      `;

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Navii <hello@constantlabs.ai>",
        to: [email],
        subject: type === "shopper"
          ? "Welcome to the Navii Waitlist!"
          : "Partnership Inquiry Received - Navii",
        html: userEmailHtml,
      }),
    });

    return new Response(
      JSON.stringify({ success: true, message: "Successfully signed up!" }),
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Waitlist error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: corsHeaders }
    );
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
// Deployed: 2026-02-04T20:58:44Z
// API key updated: 2026-02-04T21:11:12Z

import { NextRequest, NextResponse } from "next/server";
import { web3formsConfig, type Web3FormsResponse } from "@/lib/web3forms";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  productInterest?: string;
  message: string;
}

const sanitize = (value?: string) => value?.trim() ?? "";

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    const name = sanitize(data.name);
    const email = sanitize(data.email);
    const message = sanitize(data.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin");
    const pageUrl =
      origin && origin.startsWith("http")
        ? new URL("/contact", origin).toString()
        : undefined;

    const payload = {
      access_key: web3formsConfig.accessKey,
      subject: `New GTFS inquiry from ${name}`,
      from_name: "Global Tech Fluid Services Website",
      replyto: email,
      name,
      email,
      message,
      company: sanitize(data.company),
      phone: sanitize(data.phone),
      product_interest: sanitize(data.productInterest),
      page_url: pageUrl,
    };

    const submissionPayload = Object.fromEntries(
      Object.entries(payload).filter(
        ([, value]) => typeof value === "string" && value !== ""
      )
    );

    const response = await fetch(web3formsConfig.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(submissionPayload),
    });

    const result: Web3FormsResponse = await response.json().catch(() => ({
      success: false,
      message: "Unexpected response from Web3Forms",
      code: response.status,
    }));

    if (response.ok && result.success) {
      return NextResponse.json(
        { success: true, message: "Form submitted successfully" },
        { status: 200 }
      );
    }

    console.error("Web3Forms submission failed:", {
      status: response.status,
      body: result,
    });

    return NextResponse.json(
      {
        error:
          result.message ||
          "Failed to send message. Please try again or contact us directly.",
      },
      { status: 502 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

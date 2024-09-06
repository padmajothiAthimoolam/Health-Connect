import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  NextResponse.json({ data: "Testing Sentry Error..." });
  throw new Error("Sentry Example API Route Error");
}

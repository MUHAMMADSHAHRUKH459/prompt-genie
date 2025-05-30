// app/api/webhook/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  console.log("✅ Webhook POST endpoint called");

  try {
    // Parse the JSON body
    const body = await req.json();
    const { message } = body;

    // Validate message
    if (!message) {
      return NextResponse.json(
        { error: 'No message provided' },
        { status: 400 }
      );
    }

    // Temporary mock response for testing
    return NextResponse.json({
      success: true,
      englishPrompt: `Received message: ${message}`,
    });
  } catch (error) {
    console.error('❌ Error in webhook handler:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

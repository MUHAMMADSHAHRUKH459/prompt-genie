// app/api/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { convertRomanUrduToEnglishPrompt } from '@/lib/prompt-genie/api';

export async function POST(req: NextRequest) {
  console.log("✅ Webhook POST hit");

  try {
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    // Use the actual conversion function
    const result = await convertRomanUrduToEnglishPrompt(message);

    return NextResponse.json({
      success: true,
      englishPrompt: result.englishPrompt,
    });
  } catch (error) {
    console.error('❌ Error in POST:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

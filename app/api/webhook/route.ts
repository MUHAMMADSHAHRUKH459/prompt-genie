// app/api/webhook/route.ts (Next.js 13+)
import { NextRequest, NextResponse } from 'next/server';
import { convertRomanUrduToEnglishPrompt } from '@/lib/prompt-genie/api';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    const result = await convertRomanUrduToEnglishPrompt(message);

    return NextResponse.json({
      success: true,
      englishPrompt: result.englishPrompt,
    });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

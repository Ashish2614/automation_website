import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  if (!body?.name || !body?.email || !body?.message) return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  try {
    const response = await fetch('https://formsubmit.co/ajax/ashishtring@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...body,
        _subject: 'New Krefzo Automation enquiry',
        _template: 'table',
        _captcha: 'false',
      }),
      cache: 'no-store',
    });
    const result = await response.json().catch(() => null);
    if (!response.ok) return NextResponse.json({ error: result?.message || 'Email provider rejected the submission' }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to connect to the email provider' }, { status: 502 });
  }
}

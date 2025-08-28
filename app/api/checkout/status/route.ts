import { NextRequest, NextResponse } from 'next/server';

const orders: Record<string, 'approved' | 'failed' | 'pending'> = {};

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const ref = url.searchParams.get('ref');
  if (!ref || !(ref in orders)) {
    return NextResponse.json({ status: 'pending' });
  }
  return NextResponse.json({ status: orders[ref] });
}

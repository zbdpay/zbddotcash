import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirect all requests to zbdpay.com/ramp
  return NextResponse.redirect('https://zbdpay.com/ramp', {
    status: 301,
  });
}

// Match all routes
export const config = {
  matcher: '/:path*',
};

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the full URL
  const url = request.nextUrl.clone();
  
  // Preserve the entire path and query string
  const fullPath = url.pathname + url.search;
  
  // Redirect to docs.zbdpay.com with the same path
  return NextResponse.redirect(`https://docs.zbdpay.com${fullPath}`, {
    status: 301,
  });
}

// Match all routes
export const config = {
  matcher: '/:path*',
};
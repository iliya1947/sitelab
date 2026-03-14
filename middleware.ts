import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCALE_PREFIXES = ['/en', '/ru'] as const;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/he' || pathname.startsWith('/he/')) {
    const nextUrl = request.nextUrl.clone();
    nextUrl.pathname = pathname.replace(/^\/he/, '') || '/';
    return NextResponse.redirect(nextUrl, 308);
  }

  if (LOCALE_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    return NextResponse.next();
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = `/he${pathname}`;
  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};

// middleware.ts (must be in project root)
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(`${process.env.JWT_SECRET}`);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  console.log('Middleware triggered:', pathname);

  // Only secure /admin routes
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const token = req.cookies.get('token')?.value;

  if (!token) {
    console.log('No token found. Redirecting to login.');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch (err) {
    console.log('Invalid token. Redirecting to login.', err);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'], // Very important: enables the middleware for /admin/**
};

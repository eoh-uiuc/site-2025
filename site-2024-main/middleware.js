import dns from 'dns/promises';
import { NextResponse } from 'next/server';

async function isGooglebot(req) {
  const ip = req.headers['x-forwarded-for'] || req.connection?.remoteAddress;
  if (!ip) {
    console.warn('Invalid IP address');
    return false;
  }
  try {
    const hostnames = await dns.reverse(ip);
    return hostnames.some((hostname) => hostname.endsWith('.googlebot.com') || hostname.endsWith('.google.com'));
  } catch (err) {
    return false; // If DNS fails, assume it's not a Googlebot
  }
}

export default async function middleware(req) {
  // const publicRoutes = ['/', '/contact-us', '/about', '/faq', '/sponsor-us', '/students'];
  const privateRoutes = ['/volunteer', '/admin']
  const url = req.nextUrl.pathname;

  // if (publicRoutes.includes(url)) {
  //   return NextResponse.next(); // Allow public routes without auth
  // }

  if (await isGooglebot(req)) {
    return NextResponse.next(); // Allow Googlebot to access
  }

  if (privateRoutes.includes(url)) {
    // Proceed with your auth logic here
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      const url2 = req.nextUrl.clone();
      url2.pathname = '/login';
      return NextResponse.rewrite(url2); // Redirect to login if not authenticated
    }
  }

  return NextResponse.next(); // Allow access if authenticated
}

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Exclude static files and _next folder
    '/',
    '/api/trpc/(.*)',
    '/volunteer',
    '/admin',
  ],
};
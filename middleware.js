import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;

  // Agar request unknown path ke liye hai, toh homepage pe redirect karo
  if (!url.pathname.startsWith("/_next") && url.pathname !== "/" && !url.pathname.includes(".")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  
  return NextResponse.next();
}

// Middleware ko har request pe apply karne ke liye matcher use karo
export const config = {
  matcher: "/:path*", // Har route pe apply hoga
};

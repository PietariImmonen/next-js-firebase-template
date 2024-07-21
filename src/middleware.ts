import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("__session")?.value;

  if (session && !request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    !session &&
    !request.nextUrl.pathname.startsWith("/log-in") &&
    !request.nextUrl.pathname.startsWith("/sign-up")
  ) {
    return NextResponse.redirect(new URL("/log-in", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

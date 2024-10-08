import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { NextRequest, NextResponse } from "next/server";
import pbClient from "./utils/pocketbase";

const AUTH_PATHS = ["/login", "/register"];
const NO_AUTH_PATHS = ["/user"];

export async function middleware(request: NextRequest) {
  console.log(`[middleware] ${request.method} ${request.url}`);

  const isLoggedIn = await pbClient.isAuthenticated(
    request.cookies as unknown as ReadonlyRequestCookies
  );
  const { pathname } = request.nextUrl;

  if (AUTH_PATHS.some((path) => pathname.startsWith(path))) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else if (NO_AUTH_PATHS.some((path) => pathname.startsWith(path))) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

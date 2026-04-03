import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ["/", "/login", "/en", "/tr", "/en/login", "/tr/login"];
const ADMIN_PATH = "/admin";
const USER_PATH = "/user";

function normalizedRoute(pathname: string) {
  if (pathname.startsWith("/en/")) return pathname.substring(3);
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/tr/")) return pathname.substring(3);
  if (pathname === "/tr") return "/";
  return pathname;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    PUBLIC_PATHS.includes(pathname) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const role = req.cookies.get("role")?.value;

  if (!role) {
    const redirectPath = pathname.startsWith("/tr") ? "/tr/login" : "/login";
    return NextResponse.redirect(new URL(redirectPath, req.url));
  }

  const routePath = normalizedRoute(pathname);

  if (routePath.startsWith(ADMIN_PATH) && role !== "admin") {
    const redirectPath = pathname.startsWith("/tr") ? "/tr" : "/";
    return NextResponse.redirect(new URL(redirectPath, req.url));
  }

  if (routePath.startsWith(USER_PATH) && role !== "user") {
    const redirectPath = pathname.startsWith("/tr") ? "/tr" : "/";
    return NextResponse.redirect(new URL(redirectPath, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*", "/login", "/en/:path*", "/tr/:path*", "/((?!_next|static|favicon.ico).*)"],
};

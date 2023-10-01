import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("user_token")?.value;

  const signInURL = new URL("/", req.url);
  const homeURL = new URL("/home", req.url);
  if (req.nextUrl.pathname === "/home" && !token) {
    return NextResponse.redirect(signInURL);
  }

  if (req.nextUrl.pathname === "/" && token) {
    return NextResponse.redirect(homeURL);
  }
}

export const config = {
  middleware: "blocking",
  matcher: ["/", "/home", "/beer"],
};

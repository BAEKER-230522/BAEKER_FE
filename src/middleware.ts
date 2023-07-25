import type { NextRequest, NextFetchEvent } from "next/server";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  // console.log(request.cookies);
  const access_token = request.cookies.get("accessToken")
  // console.log(access_token.value);
}

export const config = {
  matcher: ['/', '/profile'],
}
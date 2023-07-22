import type { NextRequest, NextFetchEvent } from "next/server";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  
}

export const config = {
  matcher: ['/', '/profile'],
}
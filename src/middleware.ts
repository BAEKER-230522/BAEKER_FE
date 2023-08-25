import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isLogin = request.cookies.get("accessToken")
  const restrictedPages = ["/home", "/profile", "/study/manage", "/rule"];
  const currentPath = request.nextUrl.pathname;

  if(isLogin === undefined && restrictedPages.includes(currentPath)){
    return NextResponse.redirect(`${request.nextUrl.origin}`);
  }
  if(isLogin !== undefined){
    if(currentPath === '/') {
      return NextResponse.redirect(`${request.nextUrl.origin}/home`);
    }
  }
  return NextResponse.next();
}
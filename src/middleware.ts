import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isLogin = request.cookies.get("accessToken")
  console.log(isLogin, '1');
  const restrictedPages = ["/home", "/profile", "/study/manage", "/rule"];
  const currentPath = request.nextUrl.pathname;

  if(isLogin === undefined && restrictedPages.includes(currentPath)){
    console.log(isLogin, '2');
    return NextResponse.redirect(`${request.nextUrl.origin}`);
  }
  if(isLogin !== undefined){
    if(currentPath === '/') {
      console.log(isLogin, '3');
      return NextResponse.redirect(`${request.nextUrl.origin}/home`);
    }
  }
  return NextResponse.next();
}


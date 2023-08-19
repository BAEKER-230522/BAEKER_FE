import { NextRequest, NextResponse } from "next/server";


// 로그인 : 접근 X [/, login]
// 비로그인 : 접근 불가능 [profile, modify, home, rule, connector]
export function middleware(request: NextRequest) {
  // const isLogin = request.cookies.get("accessToken")
  // const restrictedPages = ["/home", "/profile", "/study/manage", "/rule"];
  // const currentPath = request.nextUrl.pathname;

  // if(isLogin === undefined && restrictedPages.includes(currentPath)){
  //   // 비로그인 유저가 제한된 페이지를 접근하려는 경우 '/'로 리다이렉트
  //   return NextResponse.redirect(`${request.nextUrl.origin}`);
  // }
  // if(isLogin !== undefined){
  //   // 로그인 유저가 '/' 페이지 접근할 경우 'home'으로 리다이렉트
  //   if(currentPath === '/') {
  //     return NextResponse.redirect(`${request.nextUrl.origin}/home`);
  //   }
  // }
  // return NextResponse.next();
}

export const config = {}

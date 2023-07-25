import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  // console.log(request.cookies);
  const access_token = request.cookies.get("accessToken")
  if(!access_token){
    if(request.url === 'http://localhost:3000/'){
      return NextResponse.next();
    }
    console.log('redirect');
    return NextResponse.redirect(new URL('/', request.url));
  }else{
    if(request.nextUrl.pathname === '/'){
      console.log('move home');
      
      return NextResponse.redirect(`/rank/study`);
    }
    // return NextResponse.redirect(new URL('/study/5', request.url));
  }

  // console.log(access_token.value);
}

export const config = {
  matcher:[
    '/member/:path*',
    '/study/:path*',
    '/profile',
    '/rule'
  ]
}

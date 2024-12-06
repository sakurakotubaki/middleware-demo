import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-token')
  const isLoginPage = request.nextUrl.pathname === '/login'
  
  // ログインページ以外へのアクセスで認証が必要
  if (!authToken && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // すでにログインしている場合、ログインページにアクセスするとブログページにリダイレクト
  if (authToken && isLoginPage) {
    return NextResponse.redirect(new URL('/blog', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/blog/:path*', '/login']
}

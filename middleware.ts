import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function arrayStartsWith(paths: Array<string>, path: string) {
  return paths.some((p) => path.startsWith(p))
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const path = request.nextUrl.pathname

  if (token && path.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (!token) {
    if (path === '/' || arrayStartsWith(['/users'], path)) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
  }

  return NextResponse.next()
}

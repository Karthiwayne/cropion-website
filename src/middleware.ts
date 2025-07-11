import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const locales = ['en']
export const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  return NextResponse.next()
}
import { NextResponse } from 'next/server';

export default async function middleware() {
				let res = NextResponse.next();
				return res;
}

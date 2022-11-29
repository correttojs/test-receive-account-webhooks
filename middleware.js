import { NextResponse, userAgent } from "next/server";

export const config = {
  matcher: ["/"],
};

export function middleware(request) {
  console.log("hello from middleware");
}

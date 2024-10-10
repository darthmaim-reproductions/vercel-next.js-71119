import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({ this: 'is just a route' })
}
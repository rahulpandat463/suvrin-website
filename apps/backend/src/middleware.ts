import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // CORS Headers jo hum return karenge
    const corsHeaders = {
        "Access-Control-Allow-Origin": "https://suvrin-website-admin.vercel.app",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
    };

    // Agar request OPTIONS (Preflight) hai, toh bas CORS headers ke sath OK response bhej do
    if (request.method === "OPTIONS") {
        return NextResponse.json({}, { headers: corsHeaders });
    }

    // Baaki sabhi requests (GET, POST etc) ke response me CORS headers add kar do
    const response = NextResponse.next();
    Object.entries(corsHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
    });

    return response;
}

// Ye middleware sirf API routes par chalega
export const config = {
    matcher: "/api/:path*",
};

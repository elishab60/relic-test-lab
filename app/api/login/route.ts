import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // No real validation
    const body = await request.json();

    // Create a response
    const response = NextResponse.json(
        { status: 'ok', user: { email: body.email || 'unknown' } },
        { status: 200 }
    );

    // Set an INSECURE cookie
    // No HttpOnly, No Secure, No SameSite
    response.cookies.set('session_token', 'fake-session-token-123', {
        path: '/',
        // explicitly turning off security features if possible, or just omitting them
        // Next.js cookies.set defaults might be safer, so we need to be careful.
        // By default: httpOnly is true? No, usually false if not specified in some frameworks, but let's check.
        // Actually, in NextResponse, we can specify options.
        httpOnly: false,
        secure: false,
        sameSite: 'lax', // 'lax' is often default, but we want it to be loose. 'none' requires secure: true usually.
        // Let's try to make it as loose as possible.
        maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    // Add permissive CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', '*');
    response.headers.set('Access-Control-Allow-Credentials', 'true');

    return response;
}

export async function OPTIONS() {
    const response = new NextResponse(null, { status: 204 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', '*');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    return response;
}

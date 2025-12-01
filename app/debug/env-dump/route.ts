import { NextResponse } from 'next/server';

export async function GET() {
    const fakeEnv = [
        'DB_HOST=prod-db-1.internal',
        'DB_USER=app_user',
        'DB_PASSWORD=SuperSecretPassword123',
        'JWT_SECRET=jwt-super-secret-key',
        'API_KEY_STRIPE=sk_test_FAKEKEY123',
        'REDIS_URL=redis://:fakepassword@redis.internal:6379/0',
        'AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE',
        'AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
    ].join('\n');

    const response = new NextResponse(fakeEnv, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' },
    });

    // Permissive CORS
    response.headers.set('Access-Control-Allow-Origin', '*');

    return response;
}

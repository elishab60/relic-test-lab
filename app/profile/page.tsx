'use client';

import { useEffect, useState } from 'react';

export default function ProfilePage() {
    const [cookieVal, setCookieVal] = useState('');

    useEffect(() => {
        // Demonstrating that the cookie is accessible via JavaScript (no HttpOnly)
        setCookieVal(document.cookie);
    }, []);

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>User Profile</h1>
            <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '4px' }}>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> user@example.com</p>
                <hr style={{ margin: '1rem 0' }} />
                <h3>Security Check</h3>
                <p>If you can see the session token below, it means the cookie is <strong>NOT HttpOnly</strong>:</p>
                <pre style={{ background: '#f0f0f0', padding: '1rem', overflowX: 'auto' }}>
                    {cookieVal || 'No cookies found (try logging in first)'}
                </pre>
            </div>
        </div>
    );
}

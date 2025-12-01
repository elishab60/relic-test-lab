'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SettingsContent() {
    const searchParams = useSearchParams();
    const theme = searchParams.get('theme') || 'light';

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Settings</h1>
            <p>Current Theme: <strong>{theme}</strong></p>

            <div style={{ marginTop: '2rem' }}>
                <h3>Change Theme</h3>
                <p>Try appending <code>?theme=dark</code> to the URL.</p>
                <p>
                    <em>Note: In a real vulnerable app, this might reflect raw HTML. Next.js escapes by default,
                        but scanners looks for the reflection.</em>
                </p>
            </div>
        </div>
    );
}

export default function SettingsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SettingsContent />
        </Suspense>
    );
}

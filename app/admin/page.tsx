'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function AdminContent() {
    const searchParams = useSearchParams();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        // Weak client-side check
        const key = searchParams.get('key');
        if (key === 'admin123') {
            setIsAdmin(true);
        }
    }, [searchParams]);

    if (!isAdmin) {
        return (
            <div style={{ padding: '2rem', fontFamily: 'sans-serif', color: 'red' }}>
                <h1>Access Denied</h1>
                <p>You do not have permission to view this page.</p>
                <p style={{ color: '#666', fontSize: '0.8rem' }}>(Hint: try ?key=admin123)</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1 style={{ color: 'red' }}>Admin Panel</h1>
            <p>Welcome, Administrator.</p>

            <div style={{ marginTop: '2rem', border: '2px dashed red', padding: '1rem' }}>
                <h3>Sensitive Controls</h3>
                <button style={{ marginRight: '1rem' }}>Delete Database</button>
                <button>View All Users</button>
            </div>
        </div>
    );
}

export default function AdminPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdminContent />
        </Suspense>
    );
}

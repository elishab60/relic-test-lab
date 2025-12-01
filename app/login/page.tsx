'use client';

import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (data.status === 'ok') {
                setMessage('Login successful! Cookie set.');
            } else {
                setMessage('Login failed.');
            }
        } catch (err) {
            setMessage('Error during login.');
        }
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Login</h1>
            <form onSubmit={handleLogin} style={{ maxWidth: '300px' }}>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem' }}
                        placeholder="admin@example.com"
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem' }}
                        placeholder="password"
                    />
                </div>
                <button type="submit" style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
                    Sign In
                </button>
            </form>
            {message && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{message}</p>}
        </div>
    );
}

import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Vulnerable Web App</h1>
      <p>
        This application is <strong>DELIBERATELY INSECURE</strong>. Do not use in production.
      </p>
      <p>Use this site to test your security scanner.</p>

      <nav style={{ marginTop: '2rem' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem' }}>
            <Link href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>
              Login Page
            </Link>
            {' '}- Vulnerable login form
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <Link href="/profile" style={{ color: 'blue', textDecoration: 'underline' }}>
              Profile Page
            </Link>
            {' '}- Reads insecure cookies
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <Link href="/settings" style={{ color: 'blue', textDecoration: 'underline' }}>
              Settings Page
            </Link>
            {' '}- Reflected XSS vector
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <Link href="/admin" style={{ color: 'blue', textDecoration: 'underline' }}>
              Admin Panel
            </Link>
            {' '}- Weak protection
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <Link href="/debug/env-dump" style={{ color: 'blue', textDecoration: 'underline' }}>
              Debug: Env Dump
            </Link>
            {' '}- Leaks secrets
          </li>
        </ul>
      </nav>

      <footer style={{ marginTop: '4rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
        <p style={{ fontSize: '0.8rem', color: '#666' }}>
          Vulnerable App v1.0.0 - For Educational Purposes Only
        </p>
      </footer>
    </main>
  );
}

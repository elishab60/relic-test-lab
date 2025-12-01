# Deliberately Insecure Web Application

> [!WARNING]
> **DANGER: THIS APPLICATION IS INTENTIONALLY VULNERABLE.**
> DO NOT DEPLOY TO PRODUCTION.
> DO NOT HOST REAL DATA.

## Purpose
This application is designed as a **target for web security scanners**. It contains multiple deliberate security flaws, including:
- Missing security headers
- Weak CORS configuration
- Sensitive data exposure (fake secrets)
- Insecure cookie attributes
- Reflected parameters (simulated XSS)
- Weak authentication

## Vulnerabilities Included
1. **Insecure Cookies**: Session tokens lack `HttpOnly`, `Secure`, and `SameSite` attributes.
2. **CORS Misconfiguration**: Allows `*` origin with credentials.
3. **Information Disclosure**:
   - `/debug/env-dump` leaks fake environment variables.
   - `public/backup-2025-11-30.env` and `public/config-backup.txt` are accessible.
   - `robots.txt` reveals sensitive paths.
4. **Broken Access Control**: `/admin` is protected only by a client-side check.
5. **Missing Headers**: No HSTS, CSP, X-Frame-Options, etc.

## Installation

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

## Deployment (Vercel)
This project is ready to be deployed on Vercel for testing scanners against a live URL.
1. Push to GitHub.
2. Import into Vercel.
3. Deploy (no special config needed).

**REMINDER**: This is a lab tool. Treat it as such.

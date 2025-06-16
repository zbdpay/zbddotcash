# zbd.dev → docs.zbdpay.com

Simple redirect proxy that forwards all traffic from zbd.dev to docs.zbdpay.com while preserving URL paths and query parameters.

## Setup

```bash
npm install
npm run build
npm start
```

## How it works

Uses Next.js middleware to perform 301 redirects:
- `zbd.dev/path` → `docs.zbdpay.com/path`
- Query parameters are preserved
- All paths are redirected
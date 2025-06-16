# status.zbd.dev → status.zbdpay.com

Simple redirect proxy that forwards all traffic from status.zbd.dev to status.zbdpay.com while preserving URL paths and query parameters.

## Setup

```bash
npm install
npm run build
npm start
```

## How it works

Uses Next.js middleware to perform 301 redirects:
- `status.zbd.dev/path` → `status.zbdpay.com/path`
- Query parameters are preserved
- All paths are redirected
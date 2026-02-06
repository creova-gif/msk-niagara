# Security Documentation
**MSK Partnership Website - Security & Encryption Layers**

---

## 🔒 Multi-Layer Security Implementation

This website implements **multiple layers of security** to ensure resilience, data protection, and safe user interactions.

---

## Layer 1: Application Error Handling

### Error Boundary Protection
- **Location:** `/src/app/components/ErrorBoundary.tsx`
- **Purpose:** Prevents application crashes from propagating
- **Features:**
  - Catches JavaScript errors in component tree
  - Displays user-friendly fallback UI
  - Logs errors for debugging (development mode)
  - Auto-recovery mechanism
  - Graceful degradation

### Implementation:
```typescript
// Wraps entire application
<ErrorBoundary>
  <Router>
    <App />
  </Router>
</ErrorBoundary>
```

---

## Layer 2: Input Sanitization & Validation

### Security Utilities
- **Location:** `/src/app/utils/security.ts`
- **Purpose:** Protect against XSS, injection attacks, and malicious input

### Key Functions:

#### 1. **Input Sanitization**
```typescript
sanitizeInput(input: string)
```
- Escapes HTML/JS special characters
- Prevents XSS attacks
- Limits input length (500 chars)

#### 2. **Search Query Sanitization**
```typescript
sanitizeSearchQuery(query: string)
```
- Removes injection characters
- Limits query length (200 chars)
- Applied to all search fields

#### 3. **URL Validation & Sanitization**
```typescript
sanitizeUrl(url: string)
isValidUrl(url: string)
```
- Blocks dangerous protocols (javascript:, data:, vbscript:)
- Validates URL format
- Only allows http/https

#### 4. **Email Validation**
```typescript
isValidEmail(email: string)
sanitizeEmail(email: string)
```
- Validates email format
- Prevents email injection
- Character limit enforcement

---

## Layer 3: Client-Side Rate Limiting

### Rate Limiter
- **Purpose:** Prevent abuse and DOS attacks
- **Default:** 10 attempts per 60 seconds
- **Automatic:** Cleans up old attempts

```typescript
rateLimiter.checkLimit(key: string)
```

---

## Layer 4: Secure Data Storage

### Obfuscated Local Storage
- **Purpose:** Basic protection for client-side storage
- **Method:** Base64 encoding with URI encoding

```typescript
secureStorage.setItem(key, value)
secureStorage.getItem(key)
```

**Note:** This is obfuscation, not true encryption. Do not store sensitive data client-side.

---

## Layer 5: Content Security

### Injection Pattern Detection
```typescript
containsInjectionPattern(input: string)
```
- Detects common XSS patterns
- Blocks script tags
- Prevents event handler injection
- Filters iframe/embed attempts

### Object Sanitization
```typescript
sanitizeObject(obj, allowedKeys)
```
- Whitelist-based property filtering
- Type-safe sanitization
- Prevents prototype pollution

---

## Layer 6: External Link Security

### All External Links Protected
- All organization website links use `sanitizeUrl()`
- Only http/https protocols allowed
- Automatic validation before navigation
- Prevents javascript: and data: URIs

### Implementation:
```typescript
onClick={() => window.open(sanitizeUrl(org.website), '_blank')}
```

---

## Layer 7: Server-Side Security (Deployment)

### HTTPS Enforcement
**Required for production deployment:**

#### Netlify Configuration
Create `/public/_headers`:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';
```

#### Vercel Configuration
Create `/vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        }
      ]
    }
  ]
}
```

---

## Security Features Implemented

### ✅ Active Protection
- [x] Error Boundary (prevents crashes)
- [x] Input sanitization (all user inputs)
- [x] URL validation (all external links)
- [x] XSS prevention (HTML/JS escaping)
- [x] Injection detection (pattern matching)
- [x] Rate limiting (client-side)
- [x] Secure storage (obfuscation)
- [x] Email validation
- [x] Content integrity checking

### ✅ Search & Filter Security
- [x] Community page search sanitized
- [x] Category filters validated
- [x] No SQL injection (no database)
- [x] No eval() usage
- [x] No dangerouslySetInnerHTML

### ✅ External Interaction Security
- [x] All external links validated
- [x] Email links sanitized
- [x] Phone links validated
- [x] Form inputs protected

---

## Security Best Practices

### ✅ What This Website Does:
1. **Sanitizes all user inputs** before processing
2. **Validates all URLs** before navigation
3. **Catches and handles errors** gracefully
4. **Limits input length** to prevent DOS
5. **Blocks dangerous protocols** (javascript:, data:)
6. **Escapes HTML/JS characters** in search
7. **Uses type-safe code** (TypeScript)
8. **No inline JavaScript** in HTML
9. **No eval() or Function()** usage
10. **Protected external links** (rel attributes)

### ⚠️ Limitations (Client-Side Only App):
- Cannot encrypt data (no backend)
- Cannot hide API keys (if any)
- Cannot authenticate users
- Cannot implement server-side validation
- Local storage is not truly secure

---

## Deployment Security Checklist

### Before Going Live:

#### 1. Enable HTTPS
- [ ] Deploy to HTTPS-enabled host (Netlify, Vercel, etc.)
- [ ] Force HTTPS redirect
- [ ] Update all external links to HTTPS

#### 2. Set Security Headers
- [ ] Add CSP (Content Security Policy)
- [ ] Enable HSTS (Strict-Transport-Security)
- [ ] Set X-Frame-Options: DENY
- [ ] Set X-Content-Type-Options: nosniff
- [ ] Configure Referrer-Policy

#### 3. Test Security
- [ ] Run security audit (npm audit)
- [ ] Test XSS vulnerabilities
- [ ] Verify all external links
- [ ] Test error boundaries
- [ ] Check rate limiting

#### 4. Monitoring
- [ ] Set up error logging (optional)
- [ ] Monitor for unusual patterns
- [ ] Review security headers with tools like securityheaders.com

---

## Testing Security

### Run Security Audit
```bash
npm audit
npm audit fix
```

### Check Dependencies
```bash
npm outdated
```

### Browser Testing
- Test with different input patterns
- Try special characters in search
- Attempt to inject HTML/JS
- Verify error boundaries catch errors

---

## Secure Coding Practices Used

### 1. TypeScript Strict Mode
- Type safety prevents many runtime errors
- Null checks enforced
- No implicit any

### 2. No Dangerous Patterns
- ❌ No `eval()`
- ❌ No `Function()` constructor
- ❌ No `dangerouslySetInnerHTML`
- ❌ No inline event handlers
- ❌ No `document.write()`

### 3. Safe DOM Manipulation
- ✅ React synthetic events
- ✅ Controlled components
- ✅ Sanitized user input
- ✅ Validated URLs

### 4. Defensive Programming
- Always validate inputs
- Always sanitize outputs
- Always handle errors
- Always use HTTPS in production

---

## Security Maintenance

### Regular Updates
1. Update dependencies monthly
2. Review npm audit reports
3. Update React and security packages first
4. Test after updates

### Code Reviews
- Review all user input handling
- Verify URL sanitization
- Check error boundaries
- Validate external links

---

## Incident Response

### If Security Issue Found:

1. **Assess Impact**
   - Determine affected components
   - Identify data exposure risk
   - Document the issue

2. **Immediate Action**
   - Update affected code
   - Deploy fix immediately
   - Notify users if needed

3. **Prevention**
   - Add tests for the vulnerability
   - Update security documentation
   - Review similar code patterns

---

## Contact for Security Issues

If you discover a security vulnerability, please email:
**security@mskpartnership.org**

### Responsible Disclosure
- Report security issues privately
- Allow 90 days for fix before public disclosure
- Provide detailed reproduction steps
- No public disclosure before fix is deployed

---

## Compliance

### WCAG 2.1 AA Compliance
- Accessibility features don't compromise security
- Secure error messages for screen readers
- Safe keyboard navigation

### GDPR Considerations
- No PII collected without consent
- No tracking without disclosure
- User data minimization
- Right to be forgotten (if applicable)

---

## Security Stack Summary

```
┌─────────────────────────────────────────┐
│  Layer 7: Server Security (HTTPS, CSP) │
├─────────────────────────────────────────┤
│  Layer 6: External Link Validation     │
├─────────────────────────────────────────┤
│  Layer 5: Content Injection Detection  │
├─────────────────────────────────────────┤
│  Layer 4: Secure Storage Obfuscation   │
├─────────────────────────────────────────┤
│  Layer 3: Client-Side Rate Limiting    │
├─────────────────────────────────────────┤
│  Layer 2: Input Sanitization           │
├─────────────────────────────────────────┤
│  Layer 1: Error Boundary Protection    │
└─────────────────────────────────────────┘
```

---

**Last Updated:** January 7, 2026  
**Security Version:** 1.0.0  
**Review Date:** Every 3 months

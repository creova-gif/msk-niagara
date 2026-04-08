# Security Headers Configuration for Netlify
# Protects against common web vulnerabilities

/*
  # Prevent clickjacking attacks
  X-Frame-Options: DENY
  
  # Prevent MIME type sniffing
  X-Content-Type-Options: nosniff
  
  # Enable XSS filter in browsers
  X-XSS-Protection: 1; mode=block
  
  # Control referrer information
  Referrer-Policy: strict-origin-when-cross-origin
  
  # Limit browser features and APIs
  Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=()
  
  # Force HTTPS for 1 year
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  
  # Content Security Policy
  # Allows self-hosted content, inline styles for React, and external images
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
  
  # Cache control
  Cache-Control: public, max-age=31536000, immutable

# Special rules for HTML files
/*.html
  Cache-Control: public, max-age=0, must-revalidate
  
# Special rules for service worker
/sw.js
  Cache-Control: public, max-age=0, must-revalidate
  
# API endpoints if any
/api/*
  Cache-Control: no-store, no-cache, must-revalidate

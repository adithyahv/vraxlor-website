# 🌐 Domain Setup: vraxlor.com → Vercel

## ✅ STEP 1: UPDATE DNS SETTINGS (GoDaddy)

Your domain is registered with **GoDaddy** (ns65/ns66.domaincontrol.com)

### Go to GoDaddy DNS Management:

1. **Login to GoDaddy:** https://dcc.godaddy.com/manage/dns
2. **Select domain:** vraxlor.com
3. **Click:** "DNS" or "Manage DNS"

### Add These DNS Records:

#### Record 1: Main Domain
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600 seconds (or default)
```

#### Record 2: WWW Subdomain
```
Type: A
Name: www
Value: 76.76.21.21
TTL: 600 seconds (or default)
```

### Screenshots/Visual Guide:
1. Click "ADD" button
2. Select "A" from dropdown
3. For Name: Type `@` (for root) or `www` (for www)
4. For Value: Type `76.76.21.21`
5. Click "Save"

---

## ⏰ WAIT FOR DNS PROPAGATION

**Time Required:** 5 minutes - 48 hours (usually 10-30 minutes)

**Check Status:**
- https://dnschecker.org/#A/vraxlor.com
- Should show `76.76.21.21` globally

---

## ✅ STEP 2: VERIFY IN VERCEL

After DNS propagates:

1. Go to: https://vercel.com/adis-projects-db5d10d6/teksyniq-home/settings/domains
2. Check if domains show "Valid Configuration" ✅
3. Wait for SSL certificate (automatic)

---

## 🔍 STEP 3: SUBMIT TO GOOGLE SEARCH CONSOLE

### A. Add Property

1. Go to: https://search.google.com/search-console
2. Click "Add Property"
3. Choose "URL prefix"
4. Enter: `https://vraxlor.com`
5. Click "Continue"

### B. Verify Ownership

**Option 1: HTML File (Easiest)**
1. Google gives you a file like `google1234567890abcdef.html`
2. Add it to `public/` folder
3. Redeploy: `npm run build && vercel --prod`
4. Click "Verify" in Google Search Console

**Option 2: HTML Meta Tag**
1. Google gives you a meta tag
2. Add to `index.html` in `<head>`
3. Redeploy
4. Click "Verify"

**Option 3: DNS TXT Record**
1. Google gives you a TXT record
2. Add to GoDaddy DNS:
   ```
   Type: TXT
   Name: @
   Value: google-site-verification=XXXXX
   ```
3. Click "Verify"

### C. Submit Sitemap

After verification:
1. In Search Console, go to "Sitemaps"
2. Enter: `sitemap.xml`
3. Click "Submit"

**Your sitemap URL:** `https://vraxlor.com/sitemap.xml`

### D. Request Indexing

1. Use "URL Inspection" tool
2. Enter: `https://vraxlor.com`
3. Click "Request Indexing"
4. Repeat for each page:
   - https://vraxlor.com/services
   - https://vraxlor.com/industries
   - https://vraxlor.com/case-studies
   - https://vraxlor.com/about
   - https://vraxlor.com/contact

---

## 📊 STEP 4: ADD GOOGLE ANALYTICS (Optional)

### Create Analytics Account

1. Go to: https://analytics.google.com
2. Click "Start measuring"
3. Create account & property
4. Get your Measurement ID (e.g., `G-XXXXXXXXXX`)

### Add to Your Website

Add this to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Then redeploy:
```bash
npm run build
vercel --prod
```

---

## ✅ CHECKLIST

### DNS Setup (Do Now)
- [ ] Login to GoDaddy DNS
- [ ] Add A record for @ → 76.76.21.21
- [ ] Add A record for www → 76.76.21.21
- [ ] Wait 10-30 minutes

### Verification (After DNS)
- [ ] Check https://vraxlor.com loads
- [ ] Check https://www.vraxlor.com loads
- [ ] Verify SSL certificate is active (🔒 in browser)
- [ ] Test all pages work

### Google Search (After Site Works)
- [ ] Add property to Search Console
- [ ] Verify ownership
- [ ] Submit sitemap
- [ ] Request indexing for all pages
- [ ] Set up Google Analytics (optional)

### SEO Optimization (Already Done ✅)
- [x] Sitemap created
- [x] robots.txt created
- [x] Meta tags added
- [x] Open Graph tags added
- [x] Canonical URLs set

---

## 🚀 TIMELINE

| Step | Time | Status |
|------|------|--------|
| DNS Setup | 5 min | ⏳ Do Now |
| DNS Propagation | 10-30 min | ⏳ Wait |
| SSL Certificate | 1-5 min | ⏳ Auto |
| Domain Active | ~30 min | ⏳ Soon |
| Google Verification | 2 min | ⏳ After DNS |
| Google Indexing | 1-7 days | ⏳ After Submit |
| Search Ranking | 2-4 weeks | ⏳ Gradual |

---

## 📞 QUICK REFERENCE

**Your Domain:** vraxlor.com
**Vercel IP:** 76.76.21.21
**DNS Provider:** GoDaddy
**Current Nameservers:**
- ns65.domaincontrol.com
- ns66.domaincontrol.com

**Vercel Dashboard:**
https://vercel.com/adis-projects-db5d10d6/teksyniq-home

**GoDaddy DNS:**
https://dcc.godaddy.com/manage/dns

**Google Search Console:**
https://search.google.com/search-console

---

## 🆘 TROUBLESHOOTING

### Domain Not Working After 1 Hour?

1. **Check DNS:**
   ```bash
   nslookup vraxlor.com
   ```
   Should show: `76.76.21.21`

2. **Clear DNS Cache:**
   ```bash
   # Mac
   sudo dscacheutil -flushcache
   
   # Windows
   ipconfig /flushdns
   ```

3. **Try Incognito Mode**
   Your browser might cache old DNS

4. **Check Vercel:**
   Go to domain settings, verify status

### SSL Not Working?

- Wait 5-10 minutes after DNS propagates
- Vercel automatically provisions SSL
- Try: https://vraxlor.com (not http://)

### Google Not Indexing?

- Wait 3-7 days minimum
- Check robots.txt isn't blocking
- Submit URL directly via URL Inspection tool
- Add more content to pages

---

## ✨ WHAT'S ALREADY DONE

✅ Domain added to Vercel (vraxlor.com, www.vraxlor.com)
✅ Sitemap updated with your domain
✅ robots.txt updated
✅ SEO meta tags added
✅ Open Graph tags added
✅ Site deployed and ready
✅ Video background working

---

## 🎯 NEXT ACTIONS (Priority Order)

1. **NOW:** Update DNS records in GoDaddy (5 minutes)
2. **WAIT:** 10-30 minutes for DNS propagation
3. **TEST:** Open https://vraxlor.com in browser
4. **SUBMIT:** Add to Google Search Console
5. **VERIFY:** Complete Google verification
6. **SITEMAP:** Submit sitemap.xml
7. **INDEX:** Request indexing for all pages
8. **ANALYTICS:** Add Google Analytics (optional)
9. **MONITOR:** Check Search Console weekly

---

**Your website is ready! Just update DNS and wait for propagation.** 🚀

**After DNS is active, you'll have:**
- ✅ https://vraxlor.com (your main site)
- ✅ https://www.vraxlor.com (redirects to main)
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN
- ✅ SEO optimized
- ✅ Google-ready

---

**Need help with GoDaddy DNS? Let me know!**



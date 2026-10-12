THE ARROW LINK — LEAD GENERATION & TRACKING APP
================================================

WHAT IS INCLUDED
- Field lead form (contact, company, phone, industry, service, status, value, location, notes)
- Search and status filters
- Dashboard: total leads, this-month leads, follow-ups due, won leads
- Follow-up date tracking and WhatsApp message shortcut
- Daily and monthly reports, status counts
- CSV export and JSON backup/restore
- Installable PWA shell and basic offline app caching

IMPORTANT DATA LIMITATION
This first version saves lead data in the browser's localStorage on the current device/browser. It does not sync automatically between devices and it does not send push notifications. Follow-up reminders are displayed in the dashboard when you open the app. Download JSON backups regularly. For cloud sync, multiple users, secure login and actual scheduled notifications, a database/backend is required.

HOW TO TEST LOCALLY
Open index.html in a modern browser. Some PWA features (install/offline) require HTTPS hosting.

FREE HOSTING OPTION (STATIC SITE)
1. Extract this ZIP.
2. Create a GitHub account if you don't have one.
3. Create a new public repository named arrow-link-leads.
4. Upload index.html, manifest.json, sw.js, icon.svg and README.txt to the repository root.
5. In the repository, open Settings > Pages.
6. Under Build and deployment, choose Deploy from a branch; select main and /(root), then Save.
7. Wait for GitHub Pages to publish. Open the URL shown in Settings > Pages.
8. On iPhone: open the published URL in Safari > Share > Add to Home Screen.
   On Android: open the URL in Chrome > menu > Install app / Add to Home screen.

CUSTOM DOMAIN
You can later connect a subdomain such as leads.thearrowlink.com in GitHub Pages settings and add the DNS records shown by GitHub. Do not change your main website's DNS records unless you understand the impact.

SECURITY
This version has no login. Anyone who can open the hosted URL can use the app, but each browser has separate local data. Do not store sensitive personal information in an unsecured/shared device. For business use across devices, the next step is a hosted database, login and access rules.

THE ARROW LINK — PREMIUM CRM V2 (BLACK & GOLD)
================================================

ACTIVE APPLICATION
- index.html is the upgraded Premium CRM V2 application.
- Uses the existing Supabase browser client, email/password authentication and leads table.
- Keeps the existing lead create, edit, delete, search, status filter, WhatsApp shortcut,
  CSV export, JSON backup/restore, cloud sync and PWA shell.

PREMIUM V2 INTERFACE
- Black and gold responsive layout with desktop sidebar and mobile navigation.
- Dashboard KPIs, six-month lead trend, status distribution, open pipeline value and win rate.
- Customers view groups records by company name from existing leads.
- Pipeline view groups leads by the existing lead status values.
- Follow-ups view lists scheduled active follow-ups and allows editing/rescheduling.
- Activities view is a derived timeline from lead created/updated timestamps and notes;
  it is not a separate activity-log database table.
- Team / Users is an informational setup screen only. Team invitations, roles and
  permission management are NOT implemented because no team/profile schema was supplied.

SUPABASE AND DATA SAFETY
- The upgrade does not run SQL migrations or change the Supabase schema.
- Existing lead CRUD and Supabase configuration are retained from the supplied index.html.
- The app expects a leads table with the columns already used by the original application,
  plus appropriate Row Level Security (RLS) policies.
- A browser publishable key is not a substitute for RLS. Never place a Supabase secret/service
  role key in this public repository.
- Download a JSON backup before deployment. Test sign-in, read, create, edit, delete,
  CSV export and backup/restore in the development branch before merging to main.

DEPLOYMENT
1. Extract this ZIP.
2. In GitHub, open the arrowlink repository and select crm-v2-development.
3. Upload/replace the updated index.html and README.txt in the repository root.
4. Keep arrow-logo.png, icon.svg, manifest.json, sw.js and CNAME in the root.
5. Wait for GitHub Pages to deploy, then test the development URL.
6. Only after successful testing, create a pull request from crm-v2-development to main.

OTHER HTML FILES
- index-supabase-ready-v3.html and index-supabase-test.html are retained as reference/test files.
- GitHub Pages serves index.html by default.

# Build Task: shopify-product-compliance-checker

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: shopify-product-compliance-checker
HEADLINE: Check product listings for legal compliance issues
WHAT: Scans Shopify products for FDA, FTC, CPSC violations and missing required disclosures
WHY: E-commerce sellers face $10k+ fines for compliance violations, manual checking is impossible at scale
WHO PAYS: Shopify store owners and e-commerce agencies
NICHE: e-commerce-compliance
PRICE: $$19/mo

ARCHITECTURE SPEC:
Next.js SaaS app that connects to Shopify via webhooks and API to scan product listings against FDA/FTC/CPSC compliance rules. Uses AI/rule-based engine to detect violations and generates compliance reports with actionable fixes.

PLANNED FILES:
- app/page.tsx
- app/dashboard/page.tsx
- app/api/shopify/webhook/route.ts
- app/api/shopify/auth/route.ts
- app/api/compliance/scan/route.ts
- app/api/lemonsqueezy/webhook/route.ts
- components/ComplianceReport.tsx
- components/ProductScanner.tsx
- components/ViolationCard.tsx
- lib/shopify-client.ts
- lib/compliance-engine.ts
- lib/lemonsqueezy.ts
- lib/database.ts
- prisma/schema.prisma

DEPENDENCIES: next, tailwindcss, prisma, @prisma/client, @shopify/shopify-api, @lemonsqueezy/lemonsqueezy.js, openai, zod, next-auth, recharts, lucide-react

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/shopify-product-compliance-checker
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e0114-c208-7ac1-8669-32ca44744a70
--------
user
# Build Task: shopify-product-compliance-checker

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: shopify-product-compl
Please fix the above errors and regenerate.
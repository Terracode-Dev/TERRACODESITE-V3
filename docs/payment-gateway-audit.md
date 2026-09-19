# Payment gateway accessibility audit

**Result: NOT READY — production deployment and verification are still required.**

Audit date: 19 September 2026. The local build passes the technical checks below. The final production recheck still serves the previous implementation. No deployment, payment, contact message, or Cloudflare account change was performed.

## Architecture and access

- React 19, Vite 7, TypeScript 5.8, TanStack Router file routes. The installed TanStack Start dependency is not used as an SSR application.
- Before this change: SPA marketing/contact/payment pages; separately generated static legal HTML. Now: build-time React prerendering of the existing homepage, contact, payment and legacy policy components, plus the existing policy generator. Client navigation and forms retain the existing React bootstrap. Other marketing routes remain SPA routes.
- No repository middleware, authentication guard, login requirement or CAPTCHA protects these public routes. The payment API and provider checkout are separate from public document access.
- Production responds through Cloudflare. Headers and HTML normalization are consistent with Cloudflare Pages; the dashboard/underlying hosting account was not accessible, so Pages hosting is inferred rather than independently confirmed. No Wrangler configuration, Pages Function, WAF rule or Cloudflare account configuration was found in the repository.
- `vercel.json` provides Vercel rewrites, redirects and a CSP. Cloudflare does not apply that file. Static route files and `public/_redirects` now cover the public pages and old policy aliases without relying on Vercel.
- Production HTTPS requests passed curl certificate verification. All tested user agents received final HTTP 200 responses; none received 401, 403, a redirect loop, login screen or detected Cloudflare challenge. These are requests with Googlebot and generic-bot user agents, not requests originating from Google's verified crawler infrastructure.
- `robots.txt` allows the public pages and references the sitemap. Existing restricted `/api/`, `/admin/`, `/private/`, `/tmp/` and JSON rules do not block the audited HTML. No change was needed.
- Both sitemap files parse as XML. The local sitemap contains 26 URLs, including all eight canonical policies, contact and payments. The old duplicate `/t&s` entry was removed; that existing switcher remains accessible and declares the selected policy's canonical URL.

## Discovered pages and validation table

The URL column links to production. **Initial = production baseline; Final = local production preview after fixes.** Final does not mean deployed. “curl” and “Googlebot” mean readable content in the final local response, not merely a 200 shell. Every row also received Mozilla/5.0 and PaymentReviewBot GET and HEAD tests. HEAD final statuses were 200 throughout.

| Page | URL | Initial Status | Final Status | Redirects (live → local) | curl Accessible | Googlebot Accessible | Metadata Present | Canonical Present | Policy/Public Text Present | robots.txt Allowed | In Sitemap | Issue Found | Fix Applied |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Privacy | [Privacy](https://www.terracodedev.com/privacy-policy) | 308 → 200 | 200 | 1 → 0 | Yes | Yes | Yes | Yes, matches | Yes | Yes | Yes | Canonical lacked served trailing slash | Single extensionless canonical document |
| Terms | [Terms](https://www.terracodedev.com/terms-and-conditions) | 308 → 200 | 200 | 1 → 0 | Yes | Yes | Yes | Yes, matches | Yes | Yes | Yes | Canonical lacked served trailing slash | Single extensionless canonical document |
| Refund / Cancellation | [Refund](https://www.terracodedev.com/refund-policy) | 308 → 200 | 200 | 1 → 0 | Yes | Yes | Yes | Yes, matches | Yes | Yes | Yes | Canonical lacked served trailing slash | Single extensionless canonical document |
| Cookie | [Cookie](https://www.terracodedev.com/policies/cookie-policy) | 200 | 200 | 0 → 0 | Yes | Yes | Yes | Yes, matches | Yes | Yes | Yes | Canonical/sitemap used redirected .html URL | Canonical, links and sitemap normalized |
| Data Processing Agreement | [DPA](https://www.terracodedev.com/policies/data-processing-agreement-dpa) | 200 | 200 | 0 → 0 | Yes | Yes | Yes | Yes, matches | Yes | Yes | Yes | Canonical/sitemap used redirected .html URL | Canonical, links and sitemap normalized |
| Disclaimer | [Disclaimer](https://www.terracodedev.com/policies/disclaimer-policy) | 200 | 200 | 0 → 0 | Yes | Yes | Yes | Yes, matches | Yes | Yes | Yes | Canonical/sitemap used redirected .html URL | Canonical, links and sitemap normalized |
| End-User License Agreement | [EULA](https://www.terracodedev.com/policies/end-user-license-agreement-eula) | 200 | 200 | 0 → 0 | Yes | Yes | Yes | Yes, matches | Yes | Yes | Yes | Canonical/sitemap used redirected .html URL | Canonical, links and sitemap normalized |
| Service Level Agreement | [SLA](https://www.terracodedev.com/policies/service-level-agreement-sla) | 200 | 200 | 0 → 0 | Yes | Yes | Yes | Yes, matches | Yes | Yes | Yes | Canonical/sitemap used redirected .html URL | Canonical, links and sitemap normalized |
| Contact | [Contact](https://www.terracodedev.com/contact) | 200 shell | 200 content | 0 → 0 | Yes | Yes | Yes | Yes, matches | Yes | Yes | Yes | Contact information required JS | Prerender existing component and metadata |
| Payment information/form | [Payments](https://www.terracodedev.com/payments) | 200 shell | 200 content | 0 → 0 | Yes | Yes | Yes | Yes, matches | Yes | Yes | Yes | JS-only; client metadata said Page Not Found | Prerender, proper metadata, sitemap entry |
| Homepage | [Home](https://www.terracodedev.com/) | 200 shell | 200 content | 0 → 0 | Yes | Yes | Yes | Yes, matches | Yes | Yes | Yes | Business content and schema required JS | Prerender existing homepage and schema |
| Legacy policy switcher | [Legacy](https://www.terracodedev.com/t&s) | 200 shell | 200 content | 0 → 0 | Yes | Yes | Yes | Selected policy URL | Yes; default Cookie Policy | Yes | Canonical policy only | JS-only; empty initial sidebar; wrong page title | Prerender default; usable policy links; selected-policy metadata; preserve JS query navigation |

Legacy `/t&s?policy=...` selections continue to work in the browser. Without JavaScript the legacy switcher renders its default Cookie Policy and links to every canonical policy. Submit canonical policy URLs to the gateway, not the legacy query-string switcher.

## Fixes and business information

- Every canonical legal page contains the full existing policy section text, title, description, canonical, Open Graph title/description/URL, index/follow metadata and Organization JSON-LD directly in HTML. No policy provisions or company facts were invented.
- Removed duplicate generated primary-policy files and directory indexes. Each of the eight policies now has one generated HTML document. Old `/policies/privacy-policy[.html]`, `/policies/terms-conditions[.html]` and `/policies/refund-policy[.html]` URLs redirect to the existing canonical routes.
- Prerendered pages reuse the existing page components, layout and CSS. A no-JavaScript style makes animation-hidden content visible. The existing form interactions still use JavaScript; no payment or email was submitted during testing.
- Existing public business information: **Terracode Private Limited**, **hello@terracodedev.com**, **operations@terracodedev.com** for policies, **+94 11 283 8640**, and **3rd Floor, No. 274, High Level Road, Maharagama, Sri Lanka**. These are present in repository content; ownership/registration was not independently verified. Existing policy text gives the registered street address without the floor.
- Organization, WebSite and ContactPoint structured data now use the existing contact-page phone/address. Replaced the inconsistent old homepage-schema phone number.
- Corrected Cookie Banner “Learn more” to the actual Cookie Policy. Analytics now loads only after accepted consent; decline and unavailable local storage leave it disabled. Browser checks verified this behavior.
- Fixed `ignoreDeprecations: "6.0"`, which the installed TypeScript 5.8 compiler rejects, to `"5.0"`; retained the surrounding configuration.
- The Vercel CSP omitted EmailJS and the configured fallback API origin. Added those existing endpoints to `connect-src`. Production Cloudflare responses did not contain that Vercel CSP. The observed `nosniff` and referrer-policy headers do not block crawlers. No untested restrictive CSP was added to Cloudflare.

Cancellation is included in the existing Refund Policy and Terms. No separate Shipping, Delivery or physical Return policy route was found. Existing Terms describe project deliverables and estimated timelines through quotations/statements of work, but do not promise a universal digital activation/delivery time. Confirm any provider-specific fulfilment/return requirements with WEBXPAY and supply actual business terms if requested; do not invent a delivery promise or a physical-goods policy. PayHere's published onboarding checklist asks for business terms, return/privacy policies and business contact details; it is a reference for PayHere, not proof of WEBXPAY's requirements. [PayHere application requirements](https://support.payhere.lk/application-process).

## Cloudflare settings to review

No dashboard change is currently proven necessary: the sampled requests were not challenged. Before submission, review these settings against the actual merchant-review request if it fails:

1. **Workers & Pages → project → Settings → Build:** build with `npm run build`, deploy `dist`, and confirm the domain points to the intended production deployment. Do not upload only `public`, omit the prerender step, or upload `dist-ssr` as the website.
2. **Rules → Redirect Rules / Bulk Redirects / legacy Page Rules**, and **Workers routes:** remove conflicting rules that send public policy requests to `/index.html`, a login page, a different hostname, or a slash form inconsistent with the canonical. Keep HTTPS and the intended www hostname consistent. Cloudflare Pages serves `name.html` at `/name`; directory indexes normalize differently. [Pages routing](https://developers.cloudflare.com/pages/configuration/serving-pages/), [Pages redirects](https://developers.cloudflare.com/pages/configuration/redirects/).
3. **Security → Events / Security rules:** filter by the reviewer request's timestamp, URL, source IP and Ray ID. Inspect WAF custom rules, managed rules and rate limiting for Block or Managed Challenge actions on public GET/HEAD requests. If a specific rule is a false positive, scope an exception to the affected public paths and offending rule; do not exempt payment APIs or all site traffic.
4. **Security → Settings → Bot traffic:** check Bot Fight Mode, Super Bot Fight Mode and verified-bot handling. For a confirmed Super Bot Fight Mode false positive, a scoped WAF Skip rule can apply to that product. Ordinary Bot Fight Mode cannot be bypassed by a WAF Skip rule; disable it only if confirmed to block legitimate review traffic and use a suitable alternative. A Googlebot user-agent string alone is not trusted identity. [Cloudflare false positives](https://developers.cloudflare.com/bots/troubleshooting/false-positives/), [Bot Fight Mode limitations](https://developers.cloudflare.com/bots/get-started/bot-fight-mode/).
5. Check **Under Attack Mode**, any **Cloudflare Access** application covering the public domain, and **AI Crawl Control** if the failing reviewer identifies as an AI crawler. Public legal pages must not require a challenge, Access login or browser script. Do not change unrelated private application protection.
6. **Caching → Cache Rules / Configuration:** inspect custom HTML cache rules if the new deployment still returns old shells or redirects. Purge the affected URLs after deployment if stale responses persist, then rerun the live audit. Pages' own defaults normally handle new deployments; extra custom caching can retain stale content. [Pages caching guidance](https://developers.cloudflare.com/pages/configuration/serving-pages/).

## Evidence and remaining work

- Production build and TypeScript checks passed. All eight policies passed full source-section text comparison, metadata, canonical, related-link, footer-link, GET/HEAD and robots/sitemap checks.
- Local HTTP matrix: **96 successful requests** (12 pages × four user agents × GET/HEAD), plus robots and sitemap. No local audit failures.
- Hidden Edge browser checks passed for visible no-JavaScript content, mobile policy width, contact form rendering, payment query restoration, legacy policy selection and analytics consent. No runtime exceptions were recorded. External requests were blocked during browser tests. This does not verify delivery of contact emails, provider credentials or a payment transaction.
- Full-project lint remains at **25 errors and two warnings** in existing code. The new prerender entry, SEO/consent changes and Vite configuration pass targeted lint. The whole-project failures are not public-page access failures and were not suppressed.
- [Production baseline](audit-production-before.json), [final production recheck](audit-production-after.json), [local results](audit-local-after.json), [browser results](browser-validation.json), [mobile screenshot](policy-mobile.png), [lint output](lint-results.txt).

| Remaining item | Severity | Why it matters | Required action |
|---|---|---|---|
| New build is not deployed | High | Production homepage/contact/payments/legacy still return JS shells; static business information and page metadata are absent | Deploy the complete output of `npm run build` to the actual production host |
| Live canonical/sitemap mismatch persists | Medium | Primary policies redirect to slash URLs; secondary policies declare .html canonicals; local normalization is not live | Deploy the generated policy files, updated sitemap and redirect configuration; purge affected URLs only if stale |
| Final host behavior is unverified for the new output | High | Local preview cannot prove Cloudflare rules, caching, or deployment settings | Run both commands below against production and resolve every failure before submission |
| Provider-specific return/fulfilment requirements | Conditional | No separate physical-return/shipping/delivery policy exists; the business appears to sell software/services | Confirm whether existing Refund/Cancellation and project-timeline terms satisfy the actual application checklist; add only approved factual terms if required |

After deployment:

```sh
node scripts/check-policy-pages.mjs https://www.terracodedev.com
node scripts/audit-public-pages.mjs https://www.terracodedev.com docs/audit-production-after.json
```

Only mark **READY FOR PAYMENT GATEWAY REVIEW** when the deployed canonical pages pass, production contains the expected public content, and any provider-specific content requirements are resolved. This audit evaluates technical accessibility; it does not certify legal wording, business registration, merchant approval, or the payment backend.

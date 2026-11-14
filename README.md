# ihmclinic-front

سایت درمانگاه دارالشفاء امام مجتبی (ع) — Next.js (App Router) + Tailwind 4 + Swiper. فعلاً فقط UI است و API وصل نشده.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## ساختار پوشه‌ها (feature-based)

```
src/
├─ app/          # فقط route: هر page.tsx یک خط است و صفحه‌ی فیچر را رندر می‌کند
├─ features/     # هر قابلیت = یک پوشه‌ی مستقل
│  ├─ home/      #   HomePage + sections/* (hero, quick-links, about, stats, why-us, services, doctors, insurance, articles)
│  ├─ doctors/ services/ insurance/   # صفحه‌ی فهرست + کارت‌ها/ردیف‌ها + data + hooks
│  ├─ articles/ about/ contact/ charity/
│  └─ <feature>/{components,hooks,data,types.ts,index.ts}
├─ shared/       # هر چیزی که بیش از یک فیچر استفاده می‌کند
│  ├─ components/{layout/header, layout/footer, directory, ui}
│  ├─ config/    # site.ts, navigation.ts, external-links.ts
│  ├─ hooks/  lib/
└─ styles/       # CSS قدیمی سراسری (ترتیب import در app/globals.css مهم است)
```

### قواعد وابستگی (با ESLint اجرا می‌شود)
- جهت import فقط `app → features → shared`.
- `shared` به `features` و `app` وابسته نیست.
- فیچرها فقط از طریق `index.ts` همدیگر را import می‌کنند (`@/features/doctors`، نه مسیر داخلی).
  داخل خود فیچر از مسیر نسبی استفاده کنید.

### افزودن یک فیچر جدید
1. پوشه‌ی `src/features/<name>/` با `components/`، `hooks/`، `data/`، `types.ts` و `index.ts` بسازید.
2. صفحه‌ی اصلی فیچر را از `index.ts` export کنید.
3. در `src/app/(public)/<route>/page.tsx` فقط همان را رندر کنید.
4. وقتی API آماده شد، `data/*.data.ts` را با `api/` جایگزین کنید؛ کامپوننت‌ها تغییری نمی‌کنند.

## تصاویر
`public/images/<feature>/` برای تصاویر مخصوص یک فیچر، `shared/` برای تصاویر چندفیچری، `brand/` برای لوگو و نقشه.
فایل‌های `public/images/_unused/` در هیچ‌جای کد استفاده نمی‌شوند و قابل حذف‌اند.

## استایل
CSS قدیمی دست‌نخورده منتقل شده است. تبدیل به Tailwind را فیچر به فیچر انجام دهید و بعد هر فایل CSS را حذف کنید.

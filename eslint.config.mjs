import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/**
 * قواعد وابستگی بین لایه‌ها:  app → features → shared
 *  - shared هیچ‌وقت از features یا app import نمی‌کند.
 *  - هر feature فقط از طریق index.ts فیچر دیگر import می‌شود (نه مسیر داخلی آن).
 *    داخل خود feature از مسیر نسبی استفاده کنید.
 */
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/shared/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features", "@/features/*", "@/app", "@/app/*"],
              message: "shared نباید به features یا app وابسته باشد.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/features/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features/*/*"],
              message: "از index.ts فیچر دیگر import کنید (مثلاً @/features/doctors).",
            },
            {
              group: ["@/app", "@/app/*"],
              message: "features نباید به app وابسته باشد.",
            },
          ],
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

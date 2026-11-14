
"use client";

import { useEffect } from "react";
import "./globals.css";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="fa" dir="rtl">
      <body>
        <div className="app-error">
          <h2>
            خطای سراسری
          </h2>

          <p>
            برنامه با مشکلی مواجه شده است.
          </p>

          <button
            onClick={() => reset()}
          >
            تلاش مجدد
          </button>
        </div>
      </body>
    </html>
  );
}

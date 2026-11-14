
"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="app-error">
      <h2>
        مشکلی پیش آمده است!
      </h2>

      <p>
        در بارگذاری این صفحه خطایی رخ داده است.
      </p>

      <button
        onClick={() => reset()}
      >
        تلاش مجدد
      </button>
    </div>
  );
}

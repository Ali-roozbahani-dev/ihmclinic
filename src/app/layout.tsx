import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// metadata
export const metadata: Metadata = {
  title: "درمانگاه دارالشفاء امام مجتبی (ع) | رزرو نوبت آنلاین",

  description:
    "درمانگاه خیریه دارالشفاء امام مجتبی (ع)؛ خدمات تخصصی پزشکی، پزشکان متعهد و رزرو نوبت آنلاین در تهران.",

  keywords: [
    "درمانگاه دارالشفاء امام مجتبی",
    "درمانگاه خیریه",
    "رزرو نوبت",
    "پزشک متخصص",
    "خدمات پزشکی",
  ],

  applicationName: "درمانگاه دارالشفاء امام مجتبی (ع)",

  openGraph: {
    title: "درمانگاه دارالشفاء امام مجتبی (ع)",
    description:
      "خدمات تخصصی پزشکی و رزرو نوبت آنلاین در درمانگاه دارالشفاء امام مجتبی (ع).",
    type: "website",
    locale: "fa_IR",
    siteName: "درمانگاه دارالشفاء امام مجتبی (ع)",
  },

  robots: {
    index: true,
    follow: true,
  },

  // در صورت داشتن دامنه اصلی پروژه:
  // metadataBase: new URL("https://example.com"),
};

export const viewport: Viewport = {
  themeColor: "#00613c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}

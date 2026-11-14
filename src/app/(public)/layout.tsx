import Footer from "@/shared/components/layout/footer/Footer";
import Header from "@/shared/components/layout/header/Header";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
      {children}
      </main>
      <Footer />
    </>
  );
}

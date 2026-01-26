"use client";

import Faq from "@/app/components/layout/pages/Faq";
import Header from "@/app/components/layout/widgets/Header";
import Footer from "@/app/components/layout/widgets/Footer";

export default function FaqPage() {
  return (
    <>
      <Header />
      <div className="flex mx-6 min-h-screen flex-col items-center justify-center pt-24">
        <Faq />
      </div>
      <Footer />
    </>
  );
}

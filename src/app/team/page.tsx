"use client";

import Team from "@/app/components/layout/pages/Team";
import Header from "@/app/components/layout/widgets/Header";
import Footer from "@/app/components/layout/widgets/Footer";

export default function TeamPage() {
  return (
    <>
      <Header />
      <div className="flex mx-6 min-h-screen flex-col items-center justify-center pt-24">
        <Team />
      </div>
      <Footer />
    </>
  );
}

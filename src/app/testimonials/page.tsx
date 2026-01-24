"use client";

import Testimonials from "@/app/components/layout/pages/Testimonials";
import Header from "@/app/components/layout/widgets/Header";
import Footer from "@/app/components/layout/widgets/Footer";

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <div className="flex mx-6 min-h-screen flex-col items-center justify-center pt-24">
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}

"use client";

import Blogs from "@/app/components/layout/pages/Blogs";
import Header from "@/app/components/layout/widgets/Header";
import Footer from "@/app/components/layout/widgets/Footer";

export default function BlogsPage() {
  return (
    <>
      <Header />
      <div className="flex mx-6 min-h-screen flex-col items-center justify-center pt-24">
        <Blogs />
      </div>
      <Footer />
    </>
  );
}

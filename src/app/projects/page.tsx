"use client";

import Projects from "@/app/components/layout/pages/Projects";
import Header from "@/app/components/layout/widgets/Header";
import Footer from "@/app/components/layout/widgets/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="flex mx-6 min-h-screen flex-col items-center justify-center pt-24">
        <Projects />
      </div>
      <Footer />
    </>
  );
}

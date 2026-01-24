"use client";

import Landing from "./components/layout/pages/Landing";
import Footer from "./components/layout/widgets/Footer";
import Header from "./components/layout/widgets/Header";
import WhyChooseUs from "./components/layout/pages/WhyChooseUs";
import Stats from "./components/layout/pages/Stats";
import CTA from "./components/layout/pages/CTA";
import HomeFaq from "./components/layout/pages/HomeFaq";
import TrustedCompanies from "./components/layout/pages/TrustedCompanies";
import InfiniteTestimonials from "./components/layout/pages/InfiniteTestimonials";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex mx-auto min-h-screen flex-col items-center justify-center">
        <div className="w-full">
          <Landing />
        </div>
        <Stats />
        <div className="w-full px-6">
          <WhyChooseUs />
        </div>
        <TrustedCompanies />
        <InfiniteTestimonials />
        <CTA />
        <HomeFaq />
      </div>
      <Footer />
    </>
  );
}

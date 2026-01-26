"use client";

import Services from "@/app/components/layout/pages/Services";
import Header from "@/app/components/layout/widgets/Header";
import Footer from "@/app/components/layout/widgets/Footer";
import ServiceBenefits from "@/app/components/layout/pages/ServiceBenefits";
import ServiceProcess from "@/app/components/layout/pages/ServiceProcess";
import ServicePricing from "@/app/components/layout/pages/ServicePricing";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <div className="flex mx-auto flex-col items-center pt-24">
        <div className="w-full px-6">
          <Services />
        </div>
        <ServiceBenefits />
        <div className="w-full px-6">
          <ServiceProcess />
        </div>
        <ServicePricing />
      </div>
      <Footer />
    </>
  );
}

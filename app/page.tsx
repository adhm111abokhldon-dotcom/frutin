import AboutUsBtm from "@/components/aboutUs/AboutUsBtm";
import AboutUsTop from "@/components/aboutUs/AboutUsTop";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import OurServicesTop from "@/components/OurServicesTop";
import Testimonials from "@/components/Testimonials";
import TopBar from "@/components/TopBar";

import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <AboutUsTop />
      <AboutUsBtm />
      <OurServicesTop />
      <WhyChooseUs />
      <HowWeWork />
      <FAQ />

      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
}

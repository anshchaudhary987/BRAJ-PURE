import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyA2 from "@/components/WhyA2";
import Story from "@/components/Story";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Order from "@/components/Order";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyA2 />
        <Story />
        <Products />
        <Benefits />
        <Testimonials />
        <Order />
      </main>
      <Footer />
    </>
  );
}

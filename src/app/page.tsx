import Hero from "@/components/home/Hero";
import ValueProps from "@/components/home/ValueProps";
import ServicesGrid from "@/components/home/ServicesGrid";
import WeightLossHighlight from "@/components/home/WeightLossHighlight";
import Providers from "@/components/home/Providers";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ServicesGrid />
      <WeightLossHighlight />
      <Providers />
    </>
  );
}

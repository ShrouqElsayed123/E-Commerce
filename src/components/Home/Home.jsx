import Hero from "../Hero/Hero";
import News from "../News/News";
import PromoBanner from "../SummerDiscount/PromoBanner";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
  return (
    <>
    <Hero />

    <Testimonials />
    <PromoBanner />
    <News />
    </>
  )
}

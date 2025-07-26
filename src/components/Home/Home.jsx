import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import News from "../News/News";
import Product from "../Product/Product";
import PromoBanner from "../SummerDiscount/PromoBanner";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />

      <Product />
      <Testimonials />
      <PromoBanner />
      <News />
    </>
  )
}

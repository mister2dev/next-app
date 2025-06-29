import Hero from "@/components/Hero";
import RestaurantMenu from "@/components/RestaurantMenu";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";


export default function Home() {
  return (
    <div className="bg-sky-50 items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-[32px] row-start-2 items-center">
      <Hero />
      <About/>
      <RestaurantMenu />
      <Reviews />
      <Contact />
      </div>
    </div>
  );
}

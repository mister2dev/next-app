import Hero from '@/components/Hero';
import RestaurantMenu from '@/components/RestaurantMenu';
import Gallery from '@/components/Gallery';
import Gallery2 from '@/components/Gallery2';
import About from '@/components/About';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <div className="bg-sky-50 items-center min-h-screen md:p-8 md:pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-[32px] row-start-2 items-center">
        <Hero />
        <About />
        <RestaurantMenu />
        <Gallery />
        <Gallery2 />
        <Team />
        <Reviews />
        <Contact />
      </div>
    </div>
  );
}

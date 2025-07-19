import Hero from '@/components/Hero';
import RestaurantMenu from '@/components/RestaurantMenu';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Reviews from '@/components/Reviews';
import Reservation from '@/components/Reservation';
import Feature from '@/components/Feature';

export default function Home() {
  return (
    <div className="items-center min-h-screen md:pb-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col row-start-2 items-center gap-16">
        <Hero />
        <Reservation />
        <About />
        <Feature />
        <RestaurantMenu />
        <Gallery />
        <Reviews />
        <Contact />
      </div>
    </div>
  );
}

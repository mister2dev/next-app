'use client';

import LightGallery from 'lightgallery/react';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// CSS
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

const images = [
  { src: '/images/food1.webp', alt: 'Saumon grillé et légumes croquants' },
  { src: '/images/food2.webp', alt: 'Tarte fine aux pommes et caramel' },
  {
    src: '/images/food3.webp',
    alt: 'Entrecôte, frites maison et sauce au poivre',
  },
  { src: '/images/food4.webp', alt: 'Salade fraîcheur estivale' },
  { src: '/images/food5.webp', alt: 'Risotto aux champignons' },
  { src: '/images/food6.webp', alt: 'Burger gourmet au cheddar' },
  { src: '/images/food7.webp', alt: 'Dessert chocolaté fondant' },
];

export default function Gallery() {
  return (
    <div className="w-full bg-[color:var(--secondary-color-3)] py-10 px-0">
      <h2 className="text-4xl md:text-5xl text-[color:var(--primary-color)] text-center mb-12">
        Notre Galerie
      </h2>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {images.map((image, i) => (
          <a
            key={i}
            href={image.src}
            data-sub-html={`<h4 class='text-lg font-semibold'>${image.alt}</h4>`}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Caption on hover (optional) */}
            <div className="absolute bottom-2 left-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.alt}
            </div>
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

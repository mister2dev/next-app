'use client';

import LightGallery from 'lightgallery/react';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';

// CSS
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';

const images = [
  { src: '/images/food1.webp', alt: 'Assiette de lasagne à la bolognaise' },
  {
    src: '/images/food2.webp',
    alt: 'Poke bowl avec poulet croustillant et légumes frais',
  },
  {
    src: '/images/food3.webp',
    alt: 'Lasagne revisitée avec chips de parmesan et sauce crémeuse',
  },
  {
    src: '/images/food4.webp',
    alt: 'Filet de saumon grillé avec salade fraîche',
  },
  {
    src: '/images/food5.webp',
    alt: 'Salade fraîche avec framboise et burrata',
  },
  {
    src: '/images/food6.webp',
    alt: 'Plat de nouilles asiatiques avec tofu et légumes',
  },
  { src: '/images/food7.webp', alt: 'Assiette de légumes rôtis' },
  { src: '/images/food8.webp', alt: 'Assiette de frites avec ses légumes' },
];

export default function Gallery() {
  return (
    <div
      id="gallery"
      className="w-full p-6 pb-20"
    >
      <h2 className="text-4xl md:text-5xl text-[color:var(--primary-color)] text-center mb-12">
        Galerie
      </h2>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        elementClassNames="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 -mx-6"
      >
        {images.map((image, i) => (
          <a
            key={i}
            href={image.src}
            data-sub-html={`<h4 class='text-lg font-semibold'>${image.alt}</h4>`}
            className="relative group overflow-hidden shadow-xl"
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

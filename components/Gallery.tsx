'use client';

import Image from 'next/image';

const images = [
  '/salad.jpg',
  '/salad2.jpg',
  '/salad3.jpg',
  '/food.jpg',
  '/food2.jpg',
  '/food3.jpg',
  '/food4.jpg',
];

export default function Gallery() {
  return (
    <section id="gallery" className="mb-12">
      <h2 className="text-3xl md:text-4xl text-[color:var(--primary-color)] text-center mb-12">
        Nos Spécialités
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8 px-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={image}
              alt={`Plat ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-center">Ma Galerie</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://plus.unsplash.com/premium_photo-1673581152308-591c1645be02?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 1"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1677051707499-87ea304987b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 2"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://plus.unsplash.com/premium_photo-1726704103473-4255dfd5b911?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 3"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1723744910399-6fa2951a68b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 4"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1672106646371-2c70a76d0b1c?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 5"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

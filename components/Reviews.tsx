'use client';

import { Star } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    name: 'Marie Dupont',
    rating: 5,
    comment:
      'Une expérience gastronomique exceptionnelle ! Le service était impeccable et les plats délicieux. Une vraie découverte.',
    date: '25 juin 2025',
  },
  {
    name: 'Thomas Martin',
    rating: 4.5,
    comment:
      "Une très belle surprise ! L'ambiance était chaleureuse et la cuisine raffinée. Je recommande vivement.",
    date: '23 juin 2025',
  },
  {
    name: 'Sophie Bernard',
    rating: 5,
    comment:
      'Un moment magique ! Le chef a su nous surprendre avec ses créations culinaires. Une adresse à ne pas manquer.',
    date: '20 juin 2025',
  },
];

export default function Reviews() {
  return (
    <section id="testimonials" className="mb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-[color:var(--primary-color)] text-center mb-12">
          Nos Avis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        size={20}
                        className={`${
                          review.rating >= star
                            ? 'text-[color:var(--primary-color)]'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[color:var(--primary-color)] font-semibold">
                    {review.rating.toFixed(1)}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-[color:var(--text-primary)] mb-4">
                {review.comment}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-[color:var(--primary-color)] font-semibold">
                  {review.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

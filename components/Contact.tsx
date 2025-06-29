'use client'

import Image from 'next/image'
import { Star, Leaf, Clock, MapPin } from 'lucide-react'
        
                export default function Contact() {
                    return (
                  <>
                      <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">



        {/* Section Contact */}
        <section id='contact' className="mb-20">
          <h2 className="text-3xl md:text-4xl text-[color:var(--primary-color)] font-bold text-center mb-12">
            Contactez-nous
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">
                Réserver votre table
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[color:var(--text-primary)] mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[color:var(--primary-color)]"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-[color:var(--text-primary)] mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[color:var(--primary-color)]"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-[color:var(--text-primary)] mb-2">
                    Heure
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[color:var(--primary-color)]"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-[color:var(--text-primary)] mb-2">
                    Nombre de personnes
                  </label>
                  <select
                    id="guests"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[color:var(--primary-color)]"
                  >
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5">5 personnes</option>
                    <option value="6">6 personnes</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[color:var(--primary-color)] hover:bg-[color:var(--primary-color)]/80 text-[color:var(--text-inverse)] py-3 rounded-lg font-semibold transition"
                >
                  Réserver
                </button>
              </form>
            </div>
          </div>
        </section>
        </div>
        </div>
        </>
                    )
                }
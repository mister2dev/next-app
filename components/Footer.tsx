'use client';

import Link from 'next/link';
import { Facebook, Instagram, MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[color:var(--secondary-color-1)] py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section Contact */}
          <div className="space-y-6">
            <h3 className="text-[color:var(--primary-color)] font-bold text-xl mb-4">
              Horaires d'ouverture
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[color:var(--text-primary)] font-semibold w-24">
                  Vendredi :
                </span>
                <span className="text-[color:var(--text-primary)]">
                  12:00–14:00, 19:00–22:00
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[color:var(--text-primary)] font-semibold w-24">
                  Samedi :
                </span>
                <span className="text-[color:var(--text-primary)]">
                  12:00–14:00, 19:00–22:00
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[color:var(--text-primary)] font-semibold w-24">
                  Dimanche :
                </span>
                <span className="text-[color:var(--text-primary)]">
                  12:00–17:00
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[color:var(--text-primary)] font-semibold w-24">
                  Lundi :
                </span>
                <span className="text-[color:var(--text-primary)]">
                  12:00–14:00
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[color:var(--text-primary)] font-semibold w-24">
                  Mardi :
                </span>
                <span className="text-[color:var(--text-primary)]">
                  09:00–17:00
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[color:var(--text-primary)] font-semibold w-24">
                  Mercredi :
                </span>
                <span className="text-[color:var(--text-primary)]">
                  12:00–14:00
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[color:var(--text-primary)] font-semibold w-24">
                  Jeudi :
                </span>
                <span className="text-[color:var(--text-primary)]">
                  12:00–14:00
                </span>
              </div>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="space-y-6">
            <h3 className="text-[color:var(--primary-color)] font-bold text-xl mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-[color:var(--text-primary)] hover:text-[color:var(--primary-color)] transition"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="text-[color:var(--text-primary)] hover:text-[color:var(--primary-color)] transition"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-[color:var(--text-primary)] hover:text-[color:var(--primary-color)] transition"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-[color:var(--text-primary)] hover:text-[color:var(--primary-color)] transition"
                >
                  Équipe
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-[color:var(--text-primary)] hover:text-[color:var(--primary-color)] transition"
                >
                  Avis
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[color:var(--text-primary)] hover:text-[color:var(--primary-color)] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Services */}
          <div className="space-y-6">
            <h3 className="text-[color:var(--primary-color)] font-bold text-xl mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li className="text-[color:var(--text-primary)]">
                <span className="font-medium">Réservation en ligne</span>
              </li>
            </ul>
          </div>

          {/* Section Réseaux sociaux */}
          <div className="space-y-6">
            <h3 className="text-[color:var(--primary-color)] font-bold text-xl mb-4">
              Suivez-nous
            </h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-[color:var(--text-primary)] hover:text-[color:var(--primary-color)] transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-[color:var(--text-primary)] hover:text-[color:var(--primary-color)] transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-6 pt-8 border-t border-[color:var(--accent-wood)]/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-[color:var(--text-primary)] text-sm text-left">
              © {new Date().getFullYear()} Restaurant Brasserie Française. Tous
              droits réservés.
            </p>
            <div className="flex w-full mt-4 md:mt-0 md:flex-row justify-between md:justify-end md:items-center md:w-auto md:space-x-6">
              <Link
                href="/legals"
                className="text-[color:var(--text-primary)] text-sm hover:text-[color:var(--primary-color)] transition text-center md:text-right"
              >
                Mentions légales
              </Link>
              <span className="hidden md:inline-block h-4 border-l border-[color:var(--accent-wood)]/20 mx-2"></span>
              <Link
                href="/privacy"
                className="text-[color:var(--text-primary)] text-sm hover:text-[color:var(--primary-color)] transition text-center md:text-right"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

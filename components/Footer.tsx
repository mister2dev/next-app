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
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[color:var(--text-primary)]" />
                <p className="text-[color:var(--text-primary)]">
                  123 Quai de la Plage, 75000 Paris
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[color:var(--text-primary)]" />
                <p className="text-[color:var(--text-primary)]">
                  Lundi - Samedi : 12h00 - 23h00
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[color:var(--text-primary)]" />
                <p className="text-[color:var(--text-primary)]">
                  +33 1 23 45 67 89
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[color:var(--text-primary)]" />
                <p className="text-[color:var(--text-primary)]">
                  contact@bistrotplage.fr
                </p>
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[color:var(--text-primary)] text-sm">
              © {new Date().getFullYear()} Le Bistrot de la Plage. Tous droits
              réservés.
            </p>
            <div className="flex w-full justify-between mt-4 md:mt-0">
              <Link
                href="/legals"
                className="text-[color:var(--text-primary)] text-sm hover:text-[color:var(--primary-color)] transition"
              >
                Mentions légales
              </Link>
              <Link
                href="/privacy"
                className="text-[color:var(--text-primary)] text-sm hover:text-[color:var(--primary-color)] transition"
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

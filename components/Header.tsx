'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

// Liens de navigation centralisés
const navLinks = [
  { name: 'À propos', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Galerie', href: '#gallery' },
  { name: 'Avis', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

function NavLinks() {
  return (
    <nav className="hidden md:flex gap-6 text-lg font-medium items-center">
      {navLinks.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-[color:var(--primary-color)] transition"
        >
          {link.name}
        </Link>
      ))}
      <Link
        href="#reservation"
        className="bg-[color:var(--primary-color)] hover:bg-[color:var(--primary-color)]/80 text-[color:var(--text-inverse)] px-4 py-2 rounded-full transition"
      >
        Réserver
      </Link>
    </nav>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed top-0 right-0 h-[900px] bg-[color:var(--secondary-color-1)] shadow-lg py-20 w-64 z-48 md:hidden transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full shadow-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu mobile"
    >
      <ul className="flex flex-col gap-4 text-sm font-medium">
        {navLinks.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onClose}
              className="hover:text-amber-600 transition block text-center"
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li className="px-12">
          <Link
            href="#reservation"
            onClick={onClose}
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full transition block text-center"
          >
            Réserver
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogoClick = () => {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMenu = () => setIsMenuOpen(open => !open);

  // Classes conditionnelles
  const headerClass = `fixed top-0 w-full z-50 transition-colors duration-300 ${
    scrolled
      ? 'bg-[color:var(--secondary-color-1)]/90 backdrop-blur-xs shadow-md'
      : 'bg-sky-50/70 backdrop-blur-lg'
  }`;
  const overlayClass = `fixed inset-0 bg-black/50 backdrop-blur-sm z-40 h-[900px] transition-opacity duration-300 ease-in-out ${
    isMenuOpen ? 'opacity-100' : 'opacity-0'
  }`;

  return (
    <header className={headerClass}>
      {/* Overlay mobile */}
      <div
        className={overlayClass}
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
        onClick={toggleMenu}
      />
      <div className="h-[80px] flex items-center justify-between md:px-6 mx-auto">
        <Link
          href="#hero"
          onClick={handleLogoClick}
          className="items-center flex flex-row md:text-2xl font-bold text-[color:var(--primary-color)]"
        >
          <img src="/logo.png" alt="Logo" className="h-16 w-auto mx-2" />
          Restaurant au produit de la mer
        </Link>
        <NavLinks />
        <button
          className="px-6 md:hidden text-gray-700 z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile menu content */}
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
}

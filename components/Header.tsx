'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import MenuHeader from './Menu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300
      ${
        scrolled
          ? 'bg-[color:var(--secondary-color-2)]/90 backdrop-blur-md shadow-md'
          : 'bg-sky-50/70 backdrop-blur-lg'
      }
    `}
    >
      <div className="h-[80px] flex items-center justify-between md:px-6 mx-auto">
        <Link
          href="#"
          className="items-center flex flex-row md:text-2xl font-bold text-[color:var(--primary-color)]"
          onClick={e => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <img
            src="/bistrot_plage.png"
            alt="Logo"
            className="h-12 w-auto mx-2"
          />
          Le Bistrot de la Plage
        </Link>
        <nav className="hidden md:flex gap-6 text-lg font-medium items-center">
          <Link
            href="#about"
            className="hover:text-[color:var(--primary-color)] transition"
          >
            À propos
          </Link>
          <Link href="#menu" className="hover:text-[color:var(--primary-color)] transition">
            Menu
          </Link>
          <Link href="#gallery" className="hover:text-[color:var(--primary-color)] transition">
            Galerie
          </Link>
          <Link href="#team" className="hover:text-[color:var(--primary-color)] transition">
            Équipe
          </Link>
          <Link href="#testimonials" className="hover:text-[color:var(--primary-color)] transition">
            Avis
          </Link>
          <Link href="#contact" className="hover:text-[color:var(--primary-color)] transition">
            Contact
          </Link>
          <Link
            href="/reservation"
            className="bg-[color:var(--primary-color)] hover:bg-[color:var(--primary-color)]/80 text-[color:var(--text-inverse)] px-4 py-2 rounded-full transition"
          >
            Réserver
          </Link>
        </nav>

        <button
          className="px-6 md:hidden text-gray-700"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <MenuHeader isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

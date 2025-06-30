'use client';

import Link from 'next/link';

interface MenuHeaderProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuHeader({ isOpen, onClose }: MenuHeaderProps) {
  const navLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Équipe', href: '#team' },
    { name: 'Avis', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="md:hidden">
      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 text-sm font-medium items-center">
        {navLinks.map(link => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-amber-600 transition">
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/reservation"
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full transition text-sm"
          >
            Réserver
          </Link>
        </li>
      </ul>

      {/* Mobile menu content */}
      <div
        className={`fixed top-0 right-0 h-[900px] bg-[color:var(--secondary-color-2)] shadow-lg py-20 w-64 z-48 md:hidden transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full shadow-none'
        }`}
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
              href="/reservation"
              onClick={onClose}
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full transition block text-center"
            >
              Réserver
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-sky-50/70 backdrop-blur-lg'
      }`}
    >
      <div className="h-[80px] flex items-center justify-between px-6 mx-auto">
        <Link href="/" className="items-center flex flex-row text-2xl font-bold text-gray-800">
        <img
          src="/bistrot_plage.png"
            alt="Logo"
            className="h-18 w-auto mx-2"
            />
          Bistrot de la Plage
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          <Link href="#about" className="hover:text-amber-600 transition">
            À propos
          </Link>
          <Link href="#menu" className="hover:text-amber-600 transition">
            Menu
          </Link>
          <Link href="#gallery" className="hover:text-amber-600 transition">
            Galerie
          </Link>
          <Link href="#team" className="hover:text-amber-600 transition">
            Équipe
          </Link>
          <Link href="#testimonials" className="hover:text-amber-600 transition">
            Avis
          </Link>
          <Link href="#contact" className="hover:text-amber-600 transition">
            Contact
          </Link>
          <Link
            href="/reservation"
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full transition text-sm"
          >
            Réserver
          </Link>
        </nav>

        <button className="md:hidden text-gray-700">
          <Menu />
        </button>
      </div>
    </header>
  )
}

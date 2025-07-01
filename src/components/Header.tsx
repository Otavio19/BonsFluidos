import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';

import logo from '../img/logocanil.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '#quem-somos' },
    // { name: 'Raças', href: '/racas' },
    { name: 'Nossos Serviços', href: '/#servicos' },
    { name: 'Fale Conosco', href: '/#contato' },
    { name: 'Reprodutores', href: '/reprodutores' },
  ];

const handleNavigation = (href) => {
  setIsMenuOpen(false);

  if (href.startsWith('#')) {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      const yOffset = -80; // Compensação em pixels, ajuste conforme altura do seu Header (~5rem = 80px)
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  } else if (href.includes('/#')) {
    const [path, hash] = href.split('/#');
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        const yOffset = -80;
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
    }, 100);
  } else {
    navigate(href);
  }
};

  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="Logo do Canil" className="h-20 w-20 ml-20" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className="hover:text-blue-300 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-700 px-4 py-2">
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="hover:text-blue-300 transition-colors text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

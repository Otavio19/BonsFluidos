import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';

import logo from '../img/logocanil.png'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '/#quem-somos' },
    /* { name: 'Raças', href: '/racas' }, */
    { name: 'Nossos Serviços', href: '/#servicos' },
    { name: 'Fale Conosco', href: '/#contato' },
    { name: 'Reprodutores', href: '/reprodutores' },
  ];

  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* <img src="/src/img/logocanil.png" alt="Logo do canil" /> */}
        <div className="flex items-center ">
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="" className='h-20 w-20 ml-20' />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map(item => (
            <Link
              key={item.name}
              to={item.href}
              className="hover:text-blue-300 transition-colors"
            >
              {item.name}
            </Link>
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
            {menuItems.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className="hover:text-blue-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

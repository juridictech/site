import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from './logo-A85Z94pv90u50JwD.svg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="JuridicTech" className="h-8" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-lime-500 transition-colors">
              Serviços
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-lime-500 transition-colors">
              Depoimentos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-lime-500 transition-colors">
              Contato
            </a>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Área Autenticada
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-lime-500">
              Serviços
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-lime-500">
              Depoimentos
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-lime-500">
              Contato
            </a>
            <button className="w-full text-left px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Área Autenticada
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
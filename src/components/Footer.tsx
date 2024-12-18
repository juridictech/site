import React from 'react';
import logo from './logo-A85Z94pv90u50JwD-white.svg';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <img src={logo} alt="JuridicTech" className="h-8 ml-2" />
            </div>
            <p className="mt-4 text-gray-300">
              Transformando a prática jurídica através da tecnologia e inovação.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Links Rápidos</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#services" className="text-gray-300 hover:text-lime-400">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-lime-400">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-lime-400">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contato</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-lime-400" />
                <span className="text-gray-300">contato@juridictech.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-lime-400" />
                <span className="text-gray-300">(34) 00000-0000</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-lime-400" />
                <span className="text-gray-300">Uberlândia, MG</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} JuridicTech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import NavLink from './NavLink';
import Button from '../ui/Button';

interface MobileMenuProps {
  navItems: Array<{ href: string; label: string; }>;
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          className="block px-3 py-2 text-base"
        >
          {item.label}
        </NavLink>
      ))}
      <Button variant="primary" className="w-full mt-4">
        Área Restrita
      </Button>
    </div>
  );
}
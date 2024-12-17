import React from 'react';
import NavLink from './NavLink';
import Button from '../ui/Button';

interface DesktopMenuProps {
  navItems: Array<{ href: string; label: string; }>;
}

export default function DesktopMenu({ navItems }: DesktopMenuProps) {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
      <Button variant="primary">
        Área Restrita
      </Button>
    </div>
  );
}
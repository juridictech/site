import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray';
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'white'
}) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  };

  return (
    <section
      id={id}
      className={`py-24 ${bgColors[background]} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
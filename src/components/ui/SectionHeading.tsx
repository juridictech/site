import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} max-w-2xl ${centered ? 'mx-auto' : ''}`}>
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-xl text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
}

export default function TestimonialCard({ name, role, image, content }: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-8 shadow-md">
      <div className="flex items-center mb-6">
        <img
          className="h-12 w-12 rounded-full"
          src={image}
          alt={name}
        />
        <div className="ml-4">
          <h4 className="text-lg font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{content}"</p>
    </div>
  );
}
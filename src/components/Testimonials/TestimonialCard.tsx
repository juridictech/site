import React from 'react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  role,
  image
}) => {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl">
      <p className="text-gray-600 italic">"{content}"</p>
      <div className="mt-6 flex items-center">
        <img
          className="h-12 w-12 rounded-full"
          src={image}
          alt={author}
        />
        <div className="ml-4">
          <p className="text-base font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
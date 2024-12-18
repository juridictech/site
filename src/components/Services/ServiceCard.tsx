import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <div className="inline-flex p-3 rounded-xl bg-lime-400 text-black">
          <Icon size={24} />
        </div>
      </div>
      <h3 className="mt-8 text-xl font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mt-4 text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
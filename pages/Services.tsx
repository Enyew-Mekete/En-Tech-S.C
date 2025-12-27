
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="animate-fadeIn py-20 container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-accent text-center mb-16 border-b-2 border-primary dark:border-accent pb-4 inline-block mx-auto">Our Core Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group border border-gray-100 dark:border-gray-700 transition-all hover:shadow-2xl hover:-translate-y-2">
            <Link to={`/services/${service.id}`} className="block h-full">
              <div className="p-8">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary dark:text-accent mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-xl border border-gray-200 dark:border-gray-600" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

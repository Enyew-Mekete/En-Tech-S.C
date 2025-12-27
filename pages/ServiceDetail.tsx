
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="animate-fadeIn py-20 container mx-auto px-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
        <div className="p-8 md:p-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-accent text-center mb-10 border-b-4 border-primary dark:border-accent pb-6">
            {service.title}
          </h2>
          
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-12 text-justify">
            {service.fullDescription}
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-primaryDark dark:text-accent mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">
            Our Approach to {service.title}:
          </h3>
          
          <ul className="list-disc pl-8 space-y-4 mb-16 text-lg text-gray-700 dark:text-gray-300">
            {service.offerings.map((item, idx) => {
              const parts = item.split(':');
              return (
                <li key={idx} className="leading-relaxed">
                  {parts.length > 1 ? (
                    <>
                      <strong className="text-primary dark:text-accent">{parts[0]}:</strong> {parts[1]}
                    </>
                  ) : (
                    <strong className="text-primary dark:text-accent">{item}</strong>
                  )}
                </li>
              );
            })}
          </ul>

          <h3 className="text-2xl md:text-3xl font-bold text-primaryDark dark:text-accent mb-12">
            {service.title} in Action:
          </h3>

          <div className="space-y-16">
            {service.sections.map((section, idx) => (
              <div key={idx} className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl shadow-sm border border-primary/5`}>
                <div className="lg:w-1/3 flex flex-col items-center">
                  <div className="border-2 border-primary dark:border-accent p-2 rounded-2xl bg-white dark:bg-gray-800 overflow-hidden shadow-lg w-full">
                    <img src={section.image} alt={section.title} className="w-full h-[250px] object-cover" />
                    <div className="bg-primary dark:bg-primaryDark p-4 text-center text-white rounded-b-lg">
                      <h4 className="text-lg font-bold mb-1">{section.captionTitle}</h4>
                      <p className="text-sm opacity-90">{section.captionText}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 flex flex-col justify-start pt-4">
                  <h4 className="text-2xl font-bold text-primary dark:text-accent mb-4 border-b-2 border-primary/20 pb-2 inline-block">
                    {section.title}.
                  </h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/services" 
              className="bg-primary hover:bg-primaryDark text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 inline-block text-xl"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

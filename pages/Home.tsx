import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, MANAGEMENT_TEAM } from '../constants';

// Define STATS directly here
const STATS = [
  { value: 1200 },
  { value: 5000 },
  { value: 75 },
  { value: 3 }
];

// Hero slides configuration
const HERO_SLIDES = [
  {
    image: './images/backgrounds/hero1.jpg',
    heading: 'Welcome to En-Tech S.C',
    subheading: 'Your trusted partner in innovative Technology solutions, delivering excellence in ERP, IT Services, and Digital Transformation across Ethiopia and beyond.',
  },
  {
    image: './images/backgrounds/hero2.png',
    heading: 'Transform Your Business with ERP System',
    subheading: 'Streamline operations, boost efficiency, and make data-driven decisions with our customized ERP Consulting and implementation services.',
  },
  {
    image: './images/backgrounds/Digital.jpg', 
    heading: 'Secure Your Digital Future',
    subheading: 'Protect your business with advanced cybersecurity, network infrastructure, and IT support tailored to safeguard your assets and ensure uninterrupted operations.',
  },
  {
    image: './images/backgrounds/graphic-design.png',
    heading: 'Elevate Your Brand with Creative Design',
    subheading: 'Stand out with professional graphic design, branding, and digital visuals that capture attention and communicate your message powerfully.',
  },
  {
    image: './images/backgrounds/hero3.png',
    heading: 'Comprehensive Surveillance Solutions',
    subheading: 'Enhance safety with expert CCTV installation, remote monitoring, and integrated security systems for homes and businesses.',
  },
];

const Home: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Hero slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          STATS.forEach((stat, idx) => {
            const duration = 2000;
            const steps = 60;
            const stepValue = stat.value / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += stepValue;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[idx] = Math.floor(current);
                return newCounts;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const current = HERO_SLIDES[currentSlide];

  // Render heading with "ERP System" highlighted
  const renderHeading = (heading: string) => {
    if (heading.includes('ERP System')) {
      const parts = heading.split('ERP System');
      return (
        <>
          {parts[0]}
          <span className="text-accent drop-shadow-none">ERP System</span>
          {parts[1] && parts[1]}
        </>
      );
    }
    return heading;
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        {/* Background slider */}
        <div className="absolute inset-0">
          <div
            className="relative w-full h-full flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {HERO_SLIDES.map((slide, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <img
                  src={slide.image}
                  alt={`Hero background ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/hero/1920/1080';
                  }}
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-10' : 'bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Dynamic text content */}
        <div className="relative z-10 px-4 max-w-5xl">
          {/* UPDATED HEADING WITH GRADIENT */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-white via-blue-100 to-accent bg-clip-text text-transparent py-2 drop-shadow-2xl">
            {renderHeading(current.heading)}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed drop-shadow-lg max-w-4xl mx-auto">
            {current.subheading}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="bg-primary hover:bg-primaryDark text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-primary dark:text-accent font-bold tracking-widest uppercase mb-2">
              Why Choose En-Tech S.C
            </h2>
            <h3 className="text-2xl font-bold dark:text-white">Partnering for Excellence</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Innovation First', desc: 'We stay ahead of the curve by adopting the latest Technologies and Methodologies.', icon: 'fa-lightbulb' },
              { title: 'Global Standards', desc: 'Our solutions meet international benchmarks for Quality, Security, and Performance.', icon: 'fa-globe' },
              { title: 'Dedicated Support', desc: '24/7 Technical Assistance to ensure your operations never skip a beat.', icon: 'fa-headset' },
            ].map((item, i) => (
              <div key={i} className="text-center group p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                <div className="w-20 h-20 bg-primary/10 dark:bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <i className={`fas ${item.icon} text-3xl`}></i>
                </div>
                <h4 className="text-2xl font-bold mb-4 dark:text-white">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50 dark:bg-[#222]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl text-primary dark:text-accent font-bold tracking-widest uppercase mb-2">Expertise</h2>
              <h3 className="text-2xl font-bold dark:text-white">Our Core Services</h3>
            </div>
            <Link to="/services" className="text-primary dark:text-accent font-bold hover:underline hidden md:block">
              Explore All <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/service/800/600';
                    }}
                  />
                </div>
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-2xl font-bold mb-3 dark:text-white">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">{service.description}</p>
                  <Link to={`/services/${service.id}`} className="inline-flex items-center text-primary dark:text-accent font-bold hover:gap-3 transition-all">
                    Learn More <i className="fas fa-chevron-right ml-2 text-sm"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-24 bg-white dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-primary dark:text-accent font-bold tracking-widest uppercase mb-2">Leadership</h2>
          <h3 className="text-2xl font-bold dark:text-white mb-16">Meet Our Management</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MANAGEMENT_TEAM.map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square shadow-md border border-gray-100 dark:border-gray-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/staff/300/300';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-4 text-white">
                      <a href="#"><i className="fab fa-linkedin text-xl"></i></a>
                      <a href="#"><i className="fab fa-twitter text-xl"></i></a>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold dark:text-white">{member.name}</h4>
                <p className="text-primary dark:text-accent font-medium">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* En-Tech S.C in Numbers */}
      <section className="py-24 bg-[#0f2b3f] text-white" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider">
              En-Tech S.C in Numbers
            </h2>
            <p className="text-xl md:text-2xl mt-4 opacity-90">Our Key Figures</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: counts[0], label: 'CUSTOMERS' },
              { value: counts[1], label: 'WEBSITE VISITS' },
              { value: counts[2], label: 'EMPLOYEES' },
              { value: counts[3], label: 'BRANCHES' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-primary rounded-3xl p-10 text-center shadow-2xl">
                <div className="text-5xl md:text-6xl font-extrabold text-cyan-300 mb-4">
                  {stat.value.toLocaleString()}
                </div>
                <div className="text-lg uppercase tracking-wider text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <br /><br /><br />
    </div>
  );
};

export default Home;
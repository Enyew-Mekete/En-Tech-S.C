import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [phoneError, setPhoneError] = useState(''); // New state for phone validation
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Validation Logic
  const validatePhone = (number: string) => {
    // Regex allows: 
    // 1. Ethiopian: 09/07 followed by 8 digits (0911223344)
    // 2. International: +251 followed by 9 digits
    // 3. Generic: + followed by 9-14 digits
    const phoneRegex = /^(\+251|0)[1-9]\d{8}$|^\+?\d{9,15}$/;
    
    if (!number) {
      setPhoneError('Phone number is required');
      return false;
    } else if (!phoneRegex.test(number.replace(/\s|-/g, ''))) {
      setPhoneError('Invalid format. Use 09... or +251...');
      return false;
    }
    setPhoneError('');
    return true;
  };

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone before submitting
    if (!validatePhone(formData.phone)) return;

    setIsSubmitting(true);
    try {
        // ACTUAL API CALL (Replacing the mock delay)
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
            // Only show success if the database actually saved the record
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } else {
            // Handle server-side validation errors
            alert(result.error || 'Failed to send message. Please try again.');
        }
    } catch (error) {
        console.error('Network Error:', error);
        alert('Could not connect to the server. Please ensure the backend is running on port 5000.');
    } finally {
        setIsSubmitting(false);
    }
  };
  // Helper to restrict input to numbers and phone symbols (+, -, space)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d+ \-]/g, ''); // Remove any non-phone characters
    setFormData({ ...formData, phone: value });
    if (phoneError) validatePhone(value); // Clear error as user types
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', path: 'https://www.linkedin.com/in/enyew-mekete', color: 'bg-[#0077B5]' },
    { name: 'Telegram', icon: 'fab fa-telegram-plane', path: 'https://t.me/En_TechSC', color: 'bg-[#0088cc]' },
    { name: 'Email', icon: 'fas fa-envelope', path: 'mailto:enyewmekete65@gmail.com', color: 'bg-[#D44638]' },
    { name: 'Facebook', icon: 'fab fa-facebook-f', path: 'https://www.facebook.com/share/1BELouZTv8/', color: 'bg-[#3b5998]' },
  ];

  return (
    <div className="animate-fadeIn py-24 container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-primary dark:text-accent mb-4 tracking-tight">Let's Connect</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Have a project in mind? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-xl flex items-center justify-center text-primary dark:text-accent flex-shrink-0">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <p className="font-bold dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">+251-943-305937</p>
                  </div>
                </div>
                {/* ... other info items stay same ... */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-xl flex items-center justify-center text-primary dark:text-accent flex-shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="font-bold dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">enyewmekete65@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-xl flex items-center justify-center text-primary dark:text-accent flex-shrink-0">
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="font-bold dark:text-white">Head Office</p>
                    <p className="text-gray-600 dark:text-gray-400">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary dark:bg-primaryDark p-8 rounded-3xl shadow-lg text-white">
              <div className="mb-6 flex items-center gap-3">
                 <img src="./images/brand/logo-white.png" alt="Logo" className="h-10 w-auto" onError={(e) => { (e.target as HTMLImageElement).src = './images/brand/logo.png' }} />
                 <h3 className="text-2xl font-bold">Social Networks</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.path} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center text-xl hover:scale-110 transition-transform`}>
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-3xl font-bold mb-2 dark:text-white">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" required placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-accent outline-none transition-all dark:text-white"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" required placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-accent outline-none transition-all dark:text-white"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* UPDATED PHONE NUMBER FIELD */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="0911223344 or +251..."
                    className={`w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border ${phoneError ? 'border-red-500' : 'border-transparent'} focus:border-accent outline-none transition-all dark:text-white`}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onBlur={() => validatePhone(formData.phone)}
                  />
                  {phoneError && <p className="text-red-500 text-xs mt-2 font-bold uppercase tracking-widest">{phoneError}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                    How can we help? <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    required rows={6} placeholder="Tell us about your project..."
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-accent outline-none transition-all dark:text-white resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primaryDark text-white font-bold py-5 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? <><i className="fas fa-spinner fa-spin"></i> Sending...</> : <>Send Message <i className="fas fa-paper-plane"></i></>}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Location Map stays same */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-primary dark:text-accent">Our Location</h2>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.404068992299!2d38.792899375868!3d9.000499591035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b7f7f7f7f7f7f%3A0x1234567890abcdef!2sBole%20Lingo%20Tower!5e0!3m2!1sen!2set!4v1700000000000"
              width="100%" height="500" style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Bole Lingo Tower"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
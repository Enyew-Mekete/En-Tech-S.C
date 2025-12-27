
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 transition-theme dark:bg-primaryDark">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-xl font-bold mb-6 text-[#FF4040] border-b-2 border-[#FF4040] pb-2 inline-block">Company</h3>
          <ul className="space-y-3">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Affiliate Program</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6 text-[#FF4040] border-b-2 border-[#FF4040] pb-2 inline-block">Get Help</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Order Status</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6 text-[#FF4040] border-b-2 border-[#FF4040] pb-2 inline-block">Online Shop</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-accent transition-colors">Watch</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Bag</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Shoes</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6 text-[#FF4040] border-b-2 border-[#FF4040] pb-2 inline-block">Follow Us</h3>
          <div className="grid grid-cols-4 gap-4">
            <a href="https://www.facebook.com/share/1BELouZTv8/" className="text-2xl hover:text-[#3b5998] transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="https://x.com/enyew21?s=09" className="text-2xl hover:text-[#1DA1F2] transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/enyewmekete?igsh=MTloN2ljMHF2cTM0Zg==" className="text-2xl hover:text-[#E1306C] transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/enyew-mekete-106308372" className="text-2xl hover:text-[#0077B5] transition-colors"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://t.me/En_TechSC" className="text-2xl hover:text-[#0088cc] transition-colors"><i className="fab fa-telegram-plane"></i></a>
            <a href="https://www.youtube.com/@Geraht_Media" className="text-2xl hover:text-[#FF0000] transition-colors"><i className="fab fa-youtube"></i></a>
            <a href="enyewmekete65@gmail.com" className="text-2xl hover:text-[#D44638] transition-colors"><i className="fas fa-envelope"></i></a>
            <a href="https://tiktok.com/@enyew527" className="text-2xl hover:text-[#00F2EA] transition-colors"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>
      <hr className="border-white/10" />
      <div className="bg-[#0a2f44] py-8 text-center text-gray-300">
        <p className="mb-2">Designed and Developed By Enyew.M - Founder and CEO of En-Tech S.C</p>
        <p>October, 2025 © All Rights Reserved!</p>
      </div>
    </footer>
  );
};

export default Footer;

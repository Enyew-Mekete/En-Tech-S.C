
import React from 'react';
import { MANAGEMENT_TEAM } from '../constants';

const About: React.FC = () => {
  // Fallback partner data in case constants.tsx does not have PARTNERS yet
  const PARTNERS = [
    { name: 'Microsoft', logo: './images/partners/microsoft.png' },
    { name: 'Dell', logo: './images/partners/dell.png' },
    { name: 'Cisco', logo: './images/partners/cisco.png' },
    { name: 'Lenovo', logo: './images/partners/lenovo.png' },
    { name: 'Motorola', logo: './images/partners/motorola.png' },
    { name: 'Huawei', logo: './images/partners/huawei.png' },
    { name: 'Check Point', logo: './images/partners/checkpoint.png' },
    { name: 'Odoo', logo: './images/partners/odoo.png' },
  ];

  return (
    <div className="animate-fadeIn pt-10">
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-accent text-center mb-12 border-b-2 border-primary dark:border-accent pb-4 inline-block mx-auto">About En-Tech S.C</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border-2 border-primary dark:border-accent mb-16 shadow-lg">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <b className="text-primary dark:text-accent">En-Tech S.C</b> is a dynamic and forward-thinking technology company established by <b className="text-primary dark:text-accent">Mr. Enyew Mekete</b>, a passionate and visionary professional with a strong background in Engineering and Technology, specializing in Computer Science. Founded with a clear mission to empower businesses and organizations through digital innovation, En-Tech S.C stands as a trusted partner in providing cutting-edge IT and software solutions that drive operational excellence, efficiency, and growth.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Our services cover a broad spectrum of the Information and Communication Technology (ICT) field, including Software Development, IT consulting, System Administration, Network setup and management, Cybersecurity, Database Design and maintenance, and cloud-based solutions. Whether it’s developing a core business application, implementing IT infrastructure, or providing ongoing technical support, En-Tech S.C ensures the highest standards of quality and performance.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            In essence, En-Tech S.C is more than a tech company; it is a catalyst for digital growth and innovation. Our vision is to empower organizations across Ethiopia and beyond to harness the full potential of technology creating smarter, faster, and more connected futures for all.
          </p>
        </div>

        {/* Founder Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/3 flex flex-col items-center">
            <div className="border-2 border-accent p-2 rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-xl">
              <img 
                src="./images/backgrounds/Bldg.png" 
                alt="Headquarters" 
                className="w-[345px] h-[330px] object-cover" 
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/hq/400/400' }}
              />
              <div className="bg-primary p-3 text-center text-white font-bold">
                En-Tech S.C Head Quarter<br />Our Hub of Innovation
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <h3 className="text-3xl font-bold text-primary dark:text-accent border-b-4 border-primary dark:border-accent mb-6 inline-block">We Build Progress through Technology.</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              En-Tech S.C is an Ethiopian Technology company established with the vision of building progress through technology. The company focuses on developing innovative digital solutions that address local and global challenges. By integrating creativity with advanced technology, the company aims to contribute to Ethiopia’s digital transformation and sustainable development.
            </p>
            <h3 className="text-4xl font-bold text-primary dark:text-accent mt-8 italic">“እድገትን በቴክኖሎጂ እንገነባለን።”</h3>
          </div>
        </div>

        {/* Founder Row 2 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/3 flex flex-col items-center order-1 lg:order-2">
            <div className="border-2 border-primary p-2 rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-xl">
              <img 
                src="./images/team/founder.jpg" 
                alt="Founder Enyew Mekete" 
                className="w-[345px] h-[330px] object-cover" 
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/enyew/400/400' }}
              />
              <div className="bg-primary p-3 text-center text-white font-bold">
                Mr. Enyew Mekete<br />Founder and CEO
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-primary dark:text-accent border-b-4 border-primary dark:border-accent mb-6 inline-block">Founder and CEO of En-Tech S.C.</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Mr. Enyew Mekete, Founder and CEO of En-Tech S.C, is an accomplished Ethiopian technologist and entrepreneur. He graduated with high distinction and a Gold Medal in Computer Science, demonstrating outstanding academic excellence and leadership. Driven by a deep passion for technology and innovation, Mr. Enyew founded En-Tech S.C to contribute to Ethiopia’s growing technology ecosystem.
            </p>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="my-20 bg-gray-50 dark:bg-gray-800/50 py-16 rounded-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-accent text-center mb-16">
            Vision and Mission | ራዕይ እና ተልዕኮ
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto px-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 flex flex-col items-center text-center">
              <div className="mb-8 text-9xl text-primary dark:text-accent">
                👁️
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-accent mb-4">Our Vision | ራዕያችን</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To be the leading catalyst for digital transformation in Ethiopia and beyond, empowering organizations to harness the full potential of technology for smarter, faster, and more connected futures.
              </p>
              <p className="text-lg italic text-gray-600 dark:text-gray-400 leading-relaxed">
                በኢትዮጵያ እና ከዚያ ባሻገር ዲጂታል ትራንስፎርሜሽን መሪ ማነቃቂያ መሆን፣ ድርጅቶች ቴክኖሎጂን ሙሉ በሙሉ እንዲጠቀሙ በማብቃት የበለጠ ብልህ፣ ፈጣን እና ተገናኝቶ የሚሰራ የወደፊት ጊዜ ለመፍጠር።
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 flex flex-col items-center text-center">
              <div className="mb-8 text-9xl text-primary dark:text-accent">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-accent mb-4">Our Mission | ተልዕኮአችን</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To deliver innovative, reliable, and high-quality IT solutions that drive operational excellence, foster growth, and create sustainable value for businesses and communities through cutting-edge technology.
              </p>
              <p className="text-lg italic text-gray-600 dark:text-gray-400 leading-relaxed">
                አዳዲስ፣ አስተማማኝ እና ከፍተኛ ጥራት ያላቸው የአይቲ መፍትሄዎችን በመጠቀም የስራ ቅልጥፍናን ማሳደግ፣ እድገትን ማበረታታት እና ለንግዶችና ማህበረሰቦች ዘላቂ እሴት መፍጠር።
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="my-20 bg-primary dark:bg-primaryDark py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
              OUR CORE VALUES
            </h2>
            <p className="text-xl text-white text-center mb-16 max-w-4xl mx-auto">
              At En-Tech S.C we are guided by core values that shape our culture and define how we operate.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-primaryDark text-white p-10 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-center">Excellence | ብቃት</h3>
                <p className="text-lg leading-relaxed text-center">
                  We are committed to delivering excellence in everything we do. From the quality of our solutions to the experience we provide our clients, we strive for the highest standards of performance and reliability.
                </p>
              </div>
              
              <div className="bg-white text-gray-800 p-10 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-center text-primary dark:text-accent">Collaboration | ትብብር</h3>
                <p className="text-lg leading-relaxed text-center">
                  We believe in the power of collaboration and teamwork. We foster a culture of working closely with our clients and partners to achieve mutual success and greater impact.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-10 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-center text-primary dark:text-accent">Innovation | ፈጠራ</h3>
                <p className="text-lg leading-relaxed text-center">
                  We embrace innovation and continuously explore new technologies, tools, and approaches to push the boundaries of what's possible and deliver cutting-edge solutions that drive business growth.
                </p>
              </div>
              
              <div className="bg-white text-gray-800 p-10 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-center text-primary dark:text-accent">Integrity | ታማኝነት</h3>
                <p className="text-lg leading-relaxed text-center">
                  We uphold the highest ethical standards and prioritize integrity in all our interactions. We value transparency, honesty, and trust, building long-term relationships based on reliability.
                </p>
              </div>
              
              <div className="bg-primaryDark text-white p-10 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-center">Customer Focus | ደንበኛ ትኩረት</h3>
                <p className="text-lg leading-relaxed text-center">
                  Our clients are at the center of everything we do. We listen to their needs, understand their challenges, and deliver solutions that meet and exceed their expectations. Customer satisfaction is our utmost priority.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Partners Section - Now works without requiring constants update */}
        <div className="my-20 bg-white dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="bg-primary dark:bg-primaryDark py-6 rounded-t-3xl text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Our Partners</h2>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              {PARTNERS.map((partner) => (
                <img
                  key={partner.name}
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="h-16 md:h-20 object-contain transition-transform hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/partner/200/100' }}
                />
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {PARTNERS.map((partner) => (
                <button
                  key={partner.name}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {partner.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* The Management Team Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-primary dark:text-accent text-center mb-16 border-b-2 border-primary dark:border-accent pb-4 inline-block mx-auto">The Management Team</h2>
          
          <div className="flex flex-col items-center">
            <div className="border-4 border-primary dark:border-accent rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="./images/team/Myphoto2.png"
                alt="Mr. Enyew Mekete - Director"
                className="w-64 h-64 md:w-80 md:h-80 object-cover"
                onError={(e) => {(e.target as HTMLImageElement).src = 'https://picsum.photos/seed/director/320/320'}}
              />
            </div>
            <p className="mt-4 text-xl font-bold text-primary dark:text-accent">Mr. Enyew Mekete</p>
            <p className="text-lg italic text-primary dark:text-accent">Director</p>
          </div>
          
          <br /><br />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {MANAGEMENT_TEAM.map((member) => (
              <div key={member.name} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 text-center border border-gray-100 dark:border-gray-700">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-[180px] h-[180px] mx-auto rounded-xl object-cover border-2 border-primary dark:border-accent mb-4 shadow-md" 
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/staff/200/200' }}
                />
                <h4 className="text-xl font-bold text-primary dark:text-accent">{member.name}</h4>
                <p className="text-sm font-bold italic text-primary dark:text-accent">{member.position}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-xl shadow-lg border-2 border-primary dark:border-accent group">
              <img 
                src="./images/team/Taem1.jpg" 
                alt="Our Team in Action" 
                className="w-full h-[400px] object-cover transition-transform group-hover:scale-105" 
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/team1/800/500' }}
              />
              <div className="bg-primary dark:bg-primaryDark py-4 text-center text-white text-2xl font-bold">Our Dedicated Team</div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg border-2 border-primary dark:border-accent group">
              <img 
                src="./images/team/Taem2.png" 
                alt="Collaborative Workspace" 
                className="w-full h-[400px] object-cover transition-transform group-hover:scale-105" 
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/team2/800/500' }}
              />
              <div className="bg-primary dark:bg-primaryDark py-4 text-center text-white text-2xl font-bold">Our Dedicated Team</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


import { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Mail, Phone, Linkedin } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'Lead Data Engineer',
    'MLOps Expert',
    'Cloud Architecture Specialist',
    'Big Data Enthusiast',
    'Open Source Contributor'
  ];

  useEffect(() => {
    const title = titles[currentIndex];
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex <= title.length) {
        setCurrentText(title.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            PIYUSH MUJAVADIYA
          </h1>
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-300">
              {currentText}<span className="animate-pulse">|</span>
            </h2>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          8+ years of experience designing scalable, cloud-native data platforms, 
          real-time streaming pipelines, and MLOps solutions
        </p>

        <div className="flex flex-wrap gap-6 justify-center items-center text-gray-400 mb-12">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>+91-7415845040</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>piyush4porwal@gmail.com</span>
          </div>
          <a 
            href="https://linkedin.com/in/piyu5h" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;

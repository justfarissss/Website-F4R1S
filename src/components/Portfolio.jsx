import React from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from '@/components/PortfolioCard';
import { Users, Info, FolderKanban, SlidersHorizontal, MonitorSpeaker, Disc, QrCode, Gamepad2 } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Social Media',
    description: 'Connect with me on various platforms.',
    icon: Users,
    gradient: 'from-blue-500 to-purple-500',
    path: '/social-media',
  },
  {
    id: 2,
    title: 'Setting Service Audio',
    description: 'Services for audio setup and configuration.',
    icon: SlidersHorizontal,
    gradient: 'from-green-500 to-teal-500',
    path: '/audio-services',
  },
  {
    id: 3,
    title: 'About Me',
    description: 'Learn more about my journey and skills.',
    icon: Info,
    gradient: 'from-red-500 to-orange-500',
    path: '/about-me',
  },
  {
    id: 4,
    title: 'Portfolio',
    description: 'Explore my diverse range of projects.',
    icon: FolderKanban,
    gradient: 'from-yellow-500 to-lime-500',
    path: '/portfolio',
  },
  {
    id: 5,
    title: 'Spesifikasi PC & Audio',
    description: 'Check out my PC and audio gear specs.',
    icon: MonitorSpeaker,
    gradient: 'from-cyan-500 to-blue-500',
    path: '/specs',
  },
  {
    id: 6,
    title: 'VST & DAW Plugins',
    description: 'My collection of virtual instruments and plugins.',
    icon: Disc,
    gradient: 'from-indigo-500 to-violet-500',
    path: 'https://drive.google.com/drive/u/3/folders/1p850u4_FnqaFLGxO220wVIZNnx6unr6A',
  },
  {
    id: 7,
    title: 'QRIS For Donate',
    description: 'Support my work through a donation.',
    icon: QrCode,
    gradient: 'from-rose-500 to-pink-500',
    path: '/donate',
  },
  {
    id: 8,
    title: 'Nickname Game',
    description: 'Find me in your favorite games.',
    icon: Gamepad2,
    gradient: 'from-fuchsia-500 to-purple-600',
    path: '/nicknames',
  },
];

const Portfolio = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
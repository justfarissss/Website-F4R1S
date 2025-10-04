import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, HardDrive, Music, Tv, ExternalLink } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8,
};

const portfolioItems = [
  {
    icon: HardDrive,
    title: 'Computer Engineering',
    description: 'I can fix problems on computers and laptops, troubleshoot hardware and software, reinstall operating systems, assemble computers, and also clean computer components.',
    imageUrl: 'https://horizons-cdn.hostinger.com/a63cf1df-2683-4d33-969d-7a49bcbd7600/14d511a5db7aeee0d7692bb58c35dd37.png',
    imageAlt: 'A person assembling a computer motherboard',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Music,
    title: 'Mixing / Audio Engineering',
    description: 'I can mix vocals, bumpers, and instruments. I also offer composing services on the piano, Voicemeeter setup, and FL Studio configuration for clearer and more stable audio for Live Karaoke or Live Talk.',
    imageUrl: 'https://horizons-cdn.hostinger.com/a63cf1df-2683-4d33-969d-7a49bcbd7600/b43fa6de9ec1651b9fac827c85d73562.png',
    imageAlt: 'A digital audio workstation interface with multiple tracks',
    color: 'from-purple-500 to-pink-500',
    link: 'https://drive.google.com/drive/u/3/folders/1OEfE1xwYETlqZqiPPyFHXplawEPuVsZb',
    linkText: 'View Mixing Samples',
  },
  {
    icon: Tv,
    title: 'Multimedia Operator',
    description: 'I can configure OBS for banner events, camera events, and other visualizer effects to create a professional live production environment.',
    imageUrl: 'https://horizons-cdn.hostinger.com/a63cf1df-2683-4d33-969d-7a49bcbd7600/59ff5ff5d0a7b1eb527ac86bc1b6f38a.jpg',
    imageAlt: 'A multi-monitor setup showing OBS streaming software',
    color: 'from-orange-500 to-red-500',
  },
];

const PortfolioPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Explore the portfolio of F4R1S, showcasing skills in Computer Engineering, Audio Engineering, and Multimedia Operations." />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center p-4 pt-24 relative">
        <div className="absolute top-5 left-5 z-20">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <main className="relative z-10 max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">My Portfolio</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my skills and projects in the digital and audio realm.
            </p>
          </motion.div>

          <div className="space-y-12">
            {portfolioItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                  <div className={`md:col-span-2 rounded-2xl overflow-hidden shadow-lg ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <img className="w-full h-64 object-cover" alt={item.imageAlt} src={item.imageUrl} />
                  </div>
                  <div className={`md:col-span-3 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">{item.title}</h2>
                    </div>
                    <p className="text-gray-300 mb-6">{item.description}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                      >
                        {item.linkText}
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
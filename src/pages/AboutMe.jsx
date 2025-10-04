import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, MapPin, Pencil as Piano, Languages, GraduationCap, Building } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.9 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8,
};

const AboutMe = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>About Me</title>
        <meta name="description" content="Learn more about Muhammad Faristanto Salman (F4R1S), his skills, and background." />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
        <div className="absolute top-5 left-5 z-20">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <main className="relative z-10 max-w-4xl w-full bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl shadow-2xl shadow-purple-500/10 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div 
              className="md:col-span-1 flex flex-col items-center text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  className="w-40 h-40 rounded-full object-cover border-4 border-purple-500/50 shadow-lg"
                  alt="Muhammad Faristanto Salman"
                 src="https://horizons-cdn.hostinger.com/a63cf1df-2683-4d33-969d-7a49bcbd7600/e70599f6859e9c92161f2afec7323e0f.jpg" />
                <div className="absolute bottom-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
              <h1 className="text-3xl font-bold mt-4 text-gradient">Muhammad Faristanto Salman</h1>
              <div className="flex items-center gap-2 mt-2 text-gray-400">
                <MapPin size={16} />
                <span>Tasikmalaya, Indonesia</span>
              </div>
            </motion.div>

            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold border-b-2 border-purple-500/50 pb-2 mb-6">Introduction</h2>
              <p className="text-gray-300 mb-6">
                Hi, I'm a passionate individual with a deep interest in the world of audio and technology. My journey involves everything from playing piano and singing to understanding the technical side of computer networks.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg"><Piano className="w-5 h-5 text-purple-400" /></div>
                  <div>
                    <h3 className="font-semibold">Hobbies</h3>
                    <p className="text-gray-400 text-sm">Playing piano, singing, exploring audio tech & TKJ.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg"><Languages className="w-5 h-5 text-pink-400" /></div>
                  <div>
                    <h3 className="font-semibold">Languages</h3>
                    <p className="text-gray-400 text-sm">Indonesian, Sundanese, English (conversational).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg"><GraduationCap className="w-5 h-5 text-green-400" /></div>
                  <div>
                    <h3 className="font-semibold">Education</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Building size={14} className="text-gray-500" />
                      <p className="text-gray-400 text-sm">SMKN 4 Tasikmalaya (Teknik Komputer dan Jaringan)</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Building size={14} className="text-gray-500" />
                      <p className="text-gray-400 text-sm">Universitas Muhammadiyah Tasikmalaya (Seni Drama, Tari dan Musik)</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-500 italic mt-8">"Greetings everyone, I hope we can be good friends!"</p>
            </motion.div>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default AboutMe;
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, QrCode } from 'lucide-react';
import qris from '../assets/qris.webp';

const pageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.95 },
};

const pageTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

const DonatePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>Donate</title>
        <meta name="description" content="Support F4R1S's work through a QRIS donation." />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <div className="absolute top-5 left-5 z-20">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <main className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg mb-4">
              <QrCode className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-gradient from-rose-400 to-pink-400">Support My Work</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              Your donation helps me continue creating and sharing my passion. Thank you for your support!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/100 shadow-2xl inline-block"
          >
            <img 
              src={qris} 
              alt="QRIS Donation Code for Warung Safira" 
              className="w-64 h-64 md:w-72 md:h-72 rounded-2xl"
            />
            <p className="mt-4 text-lg font-semibold text-white">Scan to Donate</p>
            <p className="text-sm text-gray-300">via QRIS</p>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
};

export default DonatePage;
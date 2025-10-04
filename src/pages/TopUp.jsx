import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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

const topup = () => (
    
  <motion.div 
  initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
    
    <Helmet>
      <title>My New Page</title>
    </Helmet>

    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg text-center">
        <Link to="/" className="inline-flex items-center gap-2 mb-6">
          <ArrowLeft size={18} /> Back
        </Link>
        <h1 className="text-3xl font-bold">My New Page</h1>
        <p className="mt-4 text-gray-300">Konten halaman baru di sini.</p>
      </div>
    </div>
  </motion.div>
);

export default topup;
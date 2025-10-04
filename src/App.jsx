import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '@/pages/Home';
import SocialMedia from '@/pages/SocialMedia';
import AboutMe from '@/pages/AboutMe';
import PortfolioPage from '@/pages/PortfolioPage';
import SpecsPage from '@/pages/SpecsPage';
import DonatePage from '@/pages/DonatePage';
import GameNicknamesPage from '@/pages/GameNicknamesPage';
import AudioServicesPage from '@/pages/AudioServicesPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/specs" element={<SpecsPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/nicknames" element={<GameNicknamesPage />} />
          <Route path="/audio-services" element={<AudioServicesPage />} />
        </Routes>
      </AnimatePresence>
      <Toaster />
    </>
  );
}

export default App;
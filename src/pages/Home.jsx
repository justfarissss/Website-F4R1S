import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';

function Home() {
  return (
    <>
      <Helmet>
        <title>F4R1S</title>
        <meta name="description" content="Explore F4R1S's portfolio featuring Audio Engineering, Multimedia Operations, Music Composition, and Mixing Engineering." />
      </Helmet>
      <div className="min-h-screen">
        <Hero />
      </div>
    </>
  );
}

export default Home;
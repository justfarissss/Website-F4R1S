
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Youtube, Twitter, Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

const TikTokIcon = (props) => (
  <img
    alt="TikTok Logo"
    src="https://horizons-cdn.hostinger.com/a63cf1df-2683-4d33-969d-7a49bcbd7600/2ec12bc5e5d8d1e69b9e3a30fdfe4eef.png"
    className={props.className}
    style={{ width: props.width, height: props.height }}
  />
);

const SpotifyIcon = (props) => (
  <img
    alt="Spotify Logo"
    src="https://horizons-cdn.hostinger.com/a63cf1df-2683-4d33-969d-7a49bcbd7600/c47f905da2489bdffe3002d9ab2ee2fe.png"
    className={props.className}
    style={{ width: props.width, height: props.height }}
  />
);

const AppleMusicIcon = (props) => (
  <img
    alt="Apple Music Logo"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png"
    className={props.className}
    style={{ width: props.width, height: props.height }}
  />
);

const SoundcloudIcon = (props) => (
  <img
    alt="Soundcloud Logo"
    src="https://horizons-cdn.hostinger.com/a63cf1df-2683-4d33-969d-7a49bcbd7600/ac667ed9d2c71eb24ea17a0e75a2da6e.png"
    className={props.className}
    style={{ width: props.width, height: props.height }}
  />
);

const socialLinks = [
  { name: 'Instagram', icon: Instagram, color: '#E4405F', url: 'https://www.instagram.com/just.farissss/' },
  { name: 'TikTok', icon: TikTokIcon, color: '#000000', url: 'https://www.tiktok.com/@just.farissss' },
  { name: 'YouTube', icon: Youtube, color: '#FF0000', url: 'https://www.youtube.com/@just.farissss' },
  { name: 'Twitter / X', icon: Twitter, color: '#1DA1F2', url: 'https://x.com/justfarissss' },
  { name: 'Facebook', icon: Facebook, color: '#1877F2', url: 'https://www.facebook.com/just.farissss/' },
  { name: 'LinkedIn', icon: Linkedin, color: '#0A66C2', url: 'https://www.linkedin.com/in/justfarissss/' },
  { name: 'Spotify', icon: SpotifyIcon, color: '#1dd760', url: 'https://open.spotify.com/artist/3RkUsbVhWLyZPTUy565YZm' },
  { name: 'Apple Music', icon: AppleMusicIcon, color: '#fa5872', url: 'https://music.apple.com/us/artist/f4r1s/1817775152' },
  { name: 'Soundcloud', icon: SoundcloudIcon, color: '#FF5500', url: 'https://soundcloud.com/justfarissss' },
  { name: 'Email', icon: Mail, color: '#EA4335', url: 'mailto:justfarissss.official@gmail.com' },
  { name: 'WhatsApp', icon: Phone, color: '#25D366', url: 'https://wa.me/6289657737111' },
];

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '100vw',
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8,
};

const SocialMedia = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>Social Media</title>
        <meta name="description" content="Connect with F4R1S on all social media platforms." />
      </Helmet>
      <section className="min-h-screen flex flex-col items-center justify-center p-4 pt-24 pb-12 relative">
        <div className="absolute top-5 left-5 z-20">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>

        <div className="text-center mb-12">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gradient mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Connect With Me
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Find me on your favorite platforms.
          </motion.p>
        </div>

        <div className="w-full max-w-md">
          <motion.ul 
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {socialLinks.map((link) => (
              <motion.li
                key={link.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center w-full p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg" style={{ backgroundColor: link.color }}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="flex-grow text-center text-lg font-semibold text-white">{link.name}</span>
                  <div className="w-10"></div>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </motion.div>
  );
};

export default SocialMedia;

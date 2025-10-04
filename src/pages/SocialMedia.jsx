
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Youtube, Twitter, Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';
// path relatif dari src/pages ke src/assets
import tiktokLogo from '../assets/tiktok.png';
import spotifyLogo from '../assets/spoti.png';
import appleMusicLogo from '../assets/applemusic.png';
import Instag from '../assets/instagram.png';
import ytube from '../assets/youtube.png';
import twit from '../assets/twitter.png';
import fb from '../assets/facebook.png';
import linkin from '../assets/linkedin.png';
import email from '../assets/email.png';
import whatsapp from '../assets/whatsapp.png';
import soundcloudLogo from '../assets/soundcloud.jpg';
import discord from '../assets/discord.png';

const TikTokIcon = (props) => (
  <img
    alt="TikTok Logo"
    src={tiktokLogo}
    className={props.className}
    style={{ width: 100, height: 40 }}
  />
);

const SpotifyIcon = (props) => (
  <img
    alt="Spotify Logo"
    src={spotifyLogo}
    className={props.className}
    style={{ width: 40, height: 40 }}
  />
);

const AppleMusicIcon = (props) => (
  <img
    alt="Apple Music Logo"
    src={appleMusicLogo}
    className={props.className}
    style={{ width: 150, height: 40}}
  />
);

const SoundcloudIcon = (props) => (
  <img
    alt="Soundcloud Logo"
    src={soundcloudLogo}
    className={props.className}
    style={{ width: 100, height: 40 }}
  />
);

const IconInstag = (props) => (
  <img
    alt="Instagram Logo"
    src={Instag}
    className={props.className}
    style={{ width: 100, height: 40 }}
  />
);

const IconYoutube = (props) => (
  <img
    alt="YouTube Logo"
    src={ytube}
    className={props.className}
    style={{ width: 100, height: 40 }}
  />
);

const IconTwitter = (props) => (
  <img
    alt="Twitter Logo"
    src={twit}
    className={props.className}
    style={{ width: 100, height: 40 }}
  />
);

const IconFacebook = (props) => (
  <img
    alt="Facebook Logo"
    src={fb}
    className={props.className}
    style={{ width: 100, height: 40 }}
  />
);

const IconLinkin = (props) => (
  <img
    alt="LinkedIn Logo"
    src={linkin}
    className={props.className}
    style={{ width: 100, height: 40 }}
  />
);

const IconEmail = (props) => (
  <img
    alt="Email Logo"
    src={email}
    className={props.className}
    style={{ width: 100, height: 40 }}
  />
);

const IconWhatsApp = (props) => (
  <img
    alt="WhatsApp Logo"
    src={whatsapp}
    className={props.className}
    style={{ width: 100, height: 40 }}
  />
);
const IconDiscord = (props) => (
  <img
    alt="Discord Logo"
    src={discord}
    className={props.className}
    style={{ width: 100, height: 40 }}
  />
);

const socialLinks = [
  { name: 'Instagram', icon: IconInstag, color: '#FFFFFF00', url: 'https://www.instagram.com/just.farissss/' },
  { name: 'TikTok', icon: TikTokIcon, color: '#FFFFFF00', url: 'https://www.tiktok.com/@just.farissss' },
  { name: 'YouTube', icon: IconYoutube, color: '#FFFFFF00', url: 'https://www.youtube.com/@just.farissss' },
  { name: 'Discord', icon: IconDiscord, color: '#FFFFFF00', url: 'https://discord.com/users/997016243741667379' },
  { name: 'Twitter / X', icon: IconTwitter, color: '#FFFFFF00', url: 'https://x.com/justfarissss' },
  { name: 'Facebook', icon: IconFacebook, color: '#FFFFFF00', url: 'https://www.facebook.com/just.farissss/' },
  { name: 'LinkedIn', icon: IconLinkin, color: '#FFFFFF00', url: 'https://www.linkedin.com/in/justfarissss/' },
  { name: 'Spotify', icon: SpotifyIcon, color: '#FFFFFF00', url: 'https://open.spotify.com/artist/3RkUsbVhWLyZPTUy565YZm' },
  { name: 'Apple Music', icon: AppleMusicIcon, color: '#FFFFFF00', url: 'https://music.apple.com/us/artist/f4r1s/1817775152' },
  { name: 'Soundcloud', icon: SoundcloudIcon, color: '#FFFFFF00', url: 'https://soundcloud.com/justfarissss' },
  { name: 'Email', icon: IconEmail, color: '#FFFFFF00', url: 'mailto:justfarissss.official@gmail.com' },
  { name: 'WhatsApp', icon: IconWhatsApp, color: '#FFFFFF00', url: 'https://wa.me/6289657737111' },
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

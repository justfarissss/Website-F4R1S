
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal, CheckCircle, Star, Phone, Instagram, MessageSquare } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import discord from '../assets/discord.png';
import whatsapp from '../assets/whatsapp.png';
import ig from '../assets/instagram.png';

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

const services = [
  {
    title: 'Stereo in Your Discord Desktop',
    price: 'Rp. 5.000',
    features: ['Adding stereo to desktop discord', 'No Using Vencord & Betterdiscord', 'No need to install anything', 'Easy and Fast' ],
    isFeatured: false,
  },
  {
    title: 'Setup Voicemeeter Only',
    price: 'Rp. 50.000',
    features: ["Voicemeeter Configuration", "Can reflect the sound of music from your microphone", "Easy to use", "Easy and Fast"],
    isFeatured: false,
  },
  {
    title: 'Voicemeeter + Stereo',
    price: 'Rp. 55.000',
    features: ['Voicemeeter Configuration', 'Adding stereo to desktop discord', 'No Using Vencord & Betterdiscord', 'Easy and Fast'],
    isFeatured: false,
  },
  {
    title: 'Full Setup',
    price: 'Rp. 100.000',
    features: [
      'Voicemeeter Configuration',
      'FL Studio Installation',
      'Installation of VST Plugins for FX in microphone',
      'Setup for singing or voice chatting',
      'Adding stereo to desktop discord',
      "Can reflect the sound of music from your microphone",
    ],
    isFeatured: true,
  },
];

const DiscordIcon = (props) => (
  <img
    alt="Discord Logo"
    src={discord}
    className={props.className}
    style={{ width: props.width, height: props.height }}
  />
);

const WhatsAppIcon = (props) => (
  <img
    alt="Discord Logo"
    src={whatsapp}
    className={props.className}
    style={{ width: props.width, height: props.height }}
  />
);

const InstagramIcon = (props) => (
  <img
    alt="Discord Logo"
    src={ig}
    className={props.className}
    style={{ width: props.width, height: props.height }}
  />
);

const ServiceCard = ({ service, index }) => {
  return (
    <Dialog>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border ${
          service.isFeatured ? 'border-green-500' : 'border-white/10'
        } p-8 flex flex-col`}
      >
        {service.isFeatured && (
          <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
            <Star size={14} />
            <span>BEST SELLER</span>
          </div>
        )}
        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-3xl font-bold text-green-400 mb-4">
          {service.price}
          {service.note && <span className="text-sm text-gray-400 ml-2">{service.note}</span>}
        </p>
        <ul className="space-y-3 text-gray-300 flex-grow mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <DialogTrigger asChild>
          <button className="mt-auto w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300">
            Order Now
          </button>
        </DialogTrigger>
      </motion.div>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-gradient from-green-400 to-teal-400">Contact to Order</DialogTitle>
          <DialogDescription className="text-center text-gray-400 pt-2">
            Choose your preferred platform to get in touch with me.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button asChild className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-6 text-lg">
            <a href="https://www.instagram.com/just.farissss/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="mr-2 h-5 w-5" /> Instagram
            </a>
          </Button>
          <Button asChild className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-6 text-lg">
            <a href="https://wa.me/6289657737111" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 h-5 w-5" /> WhatsApp
            </a>
          </Button>
          <Button asChild className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-bold py-6 text-lg">
            <a href="https://discord.com/users/997016243741667379" target="_blank" rel="noopener noreferrer">
              <DiscordIcon className="mr-2 h-5 w-5" width="20" height="20" /> Discord
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const AudioServicesPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>Audio Services Pricelist</title>
        <meta name="description" content="Pricelist for F4R1S's audio engineering and setup services." />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center p-4 pt-24 relative">
        <div className="absolute top-5 left-5 z-20">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <main className="relative z-10 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg mb-4">
              <SlidersHorizontal className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient from-green-400 to-teal-400">Audio Services Pricelist</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional audio setup and configuration services to elevate your sound experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500 mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Interested? Contact Me!</h2>
            <p className="text-gray-400 mb-4">For payment, you can use QRIS, or anything else. Without any further ado, order now!!</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">
              <p className="text-gray-300">Discord: <span className="font-semibold text-white">just.farissss</span></p>
              <p className="text-gray-300">Instagram: <span className="font-semibold text-white">just.farissss</span></p>
              <p className="text-gray-300">WhatsApp: <span className="font-semibold text-white">089657737111</span></p>
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
};

export default AudioServicesPage;

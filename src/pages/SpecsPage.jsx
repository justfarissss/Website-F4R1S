import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, HardDrive, Speaker, Mouse, Keyboard, Headphones as Headset } from 'lucide-react';
import pctercintah from '../assets/pctercintah.webp';

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

const pcSpecs = {
  title: 'Spesifikasi PC',
  icon: Cpu,
  color: 'from-sky-400 to-cyan-300',
  specs: [
    { key: 'CPU', value: 'Intel Core i7 12700 2.1 GHz 12 Core 20 Threads' },
    { key: 'Motherboard', value: 'Asrock B660M-HDV' },
    { key: 'WIFI', value: 'Intel AX210 Wifi 6E Card + Paket Antenna' },
    { key: 'USB Mount Panel', value: 'USB 2.0 Back Panel 4 Port' },
    { key: 'VGA', value: 'Zotac Gaming GeForce RTX 3050 Twin Edge OC' },
    { key: 'RAM', value: 'Vengeance RGB Pro DDR4 3200Mhz 16x2GB' },
    { key: 'Cooling CPU', value: 'Arctic Liquid Freezer III Pro 240' },
    { key: 'PSU', value: '1STPLAYER NGDP ATX 3.1 750W HA-750BA4 80+ Gold Full Modular' },
    { key: 'SSD 1', value: 'TEAM SSD MP44Q 1TB M.2 NVME' },
    { key: 'SSD 2', value: 'ADATA SSD XPG SX8200 PRO 512GB' },
    { key: 'HDD', value: 'WD Blue PC 1TB 3.5 Inch' },
    { key: 'FAN', value: '4 Fan Casing, 1 Fan Random, 2 Fan Radiator' },
    { key: 'Casing', value: 'Tecware Flatline TG MK 2' },
  ],
};

const peripherals = {
  title: 'Peripherial PC',
  icon: Mouse,
  color: 'from-lime-400 to-green-400',
  specs: [
    { key: 'Monitor 1', value: 'AOC 24G2E5 75hz 23,8" IPS IPS Panel' },
    { key: 'Monitor 2', value: 'DELL U2412M 60hz 24" IPS Panel' },
    { key: 'Keyboard 1', value: 'Fantech MAXFIT61 FROST Wired' },
    { key: 'Keyboard 2', value: 'Acome Keyboard & Mouse Wireless Portable' },
    { key: 'Numeric Key', value: 'M-TECH Numeric Keyboard' },
    { key: 'Webcam', value: 'M-TECH Webcam WB600' },
    { key: 'Mouse', value: 'Logitech G102' },
    { key: 'Gamepad', value: 'Rexus Daxa Asteria V2 Gen 2 AX1' },
    { key: 'Mousepad 1', value: 'Fantech Basic MP64 XL Gaming - Ultra Thin' },
    { key: 'Mousepad 2', value: 'Random dari Toko Online' },
    { key: 'Jam', value: 'JD-03' },
    { key: 'Router', value: 'Totolink A720R' },
    { key: 'Figure', value: 'Kevin Vangardo (Dapat Giveaway) & Momoka Kawaragi' },
    { key: 'Lamp', value: 'Ring Light 23cm' },
  ],
};

const audioGear = {
  title: 'Peripherial AUDIO',
  icon: Speaker,
  color: 'from-amber-400 to-orange-400',
  specs: [
    { key: 'Piano', value: 'Roland FP-30X' },
    { key: 'Keyboard Piano', value: 'Roland XPS-10' },
    { key: 'Audio Interface', value: 'Audient EVO 8' },
    { key: 'Headphone', value: 'AKG 52 Headphone Monitor Audio' },
    { key: 'IEM', value: 'Soundcore R50i' },
    { key: 'Earphone', value: 'CCA Polaris' },
    { key: 'Mic 1', value: 'Behringer XM8500' },
    { key: 'Mic 2', value: 'Behringer C1' },
    { key: 'Stand Arm MIC', value: 'SOUNDTECH Lite Microphone Arm Stand' },
    { key: 'Speaker', value: 'Advance M310BT' },
    { key: 'Mixer Controller', value: 'DIY Midi Controller' },
  ],
};

const SpecCard = ({ data }) => {
  const Icon = data.icon;
  return (
    <motion.div 
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${data.color} shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white">{data.title}</h2>
      </div>
      <ul className="space-y-3 text-gray-300">
        {data.specs.map((spec, index) => (
          <li key={index} className="flex justify-between border-b border-white/10 pb-2 text-sm">
            <span className="font-semibold text-gray-200">{spec.key}</span>
            <span className="text-right">{spec.value}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const SpecsPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>My Setup</title>
        <meta name="description" content="Detailed specifications of F4R1S's PC, peripherals, and audio gear." />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center p-4 pt-24 relative">
        <div className="absolute top-5 left-5 z-20">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <main className="relative z-10 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">My Setup</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The gear and components that power my creative workflow.
            </p>
          </motion.div>

          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative aspect-video bg-black/20 rounded-2xl border border-white/0 flex items-center justify-center overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover" alt="F4R1S's actual computer and audio setup" src={pctercintah} />
              <div className="absolute bottom-4 left-0 right-0 text-center p-4">
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SpecCard data={pcSpecs} />
            <SpecCard data={peripherals} />
            <SpecCard data={audioGear} />
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default SpecsPage;
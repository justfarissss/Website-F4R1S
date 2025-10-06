import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Gamepad2, Copy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import Valorant from '../assets/valo.png';
import Steam from '../assets/steam.jpeg';
import xbox from '../assets/xbox.png';
import Roblox from '../assets/roblok.png';

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

const gameNicknames = [
  {
    game: 'Valorant',
    nickname: 'Just#F4R1S',
    logo: <img src={Valorant} alt="Valorant" width={40} height={40} />,
    color: 'from-red-500/20 to-gray-900',
  },
  {
    game: 'Roblox',
    nickname: 'JustF4R1S',
    logo: <img src={Roblox} alt="Valorant" width={40} height={40} />,
    color: 'from-gray-500/20 to-gray-900',
  },
  {
    game: 'Steam',
    nickname: 'Just F4R1S',
    logo: <img src={Steam} alt="Valorant" width={40} height={40} />,
    color: 'from-blue-500/20 to-gray-900',
  },
  {
    game: 'Xbox',
    nickname: 'JustF4R1S',
    logo: <img src={xbox} alt="Valorant" width={40} height={40} />,
    color: 'from-green-500/20 to-gray-900',
  },
];

const GameNicknameCard = ({ item, index }) => {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(item.nickname);
    toast({
      title: 'Copied to Clipboard!',
      description: `Nickname "${item.nickname}" has been copied.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 p-6 flex flex-col items-center text-center`}
    >
      <div className="mb-4">{item.logo}</div>
      <h3 className="text-xl font-bold text-white mb-2">{item.game}</h3>
      <div className="relative group w-full">
        <p className="text-lg text-gray-300 bg-black/30 rounded-lg px-4 py-2 w-full truncate">
          {item.nickname}
        </p>
        <button
          onClick={copyToClipboard}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-white transition-colors duration-200 opacity-0 group-hover:opacity-100"
          aria-label={`Copy ${item.game} nickname`}
        >
          <Copy size={18} />
        </button>
      </div>
    </motion.div>
  );
};

const GameNicknamesPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>Game Nicknames</title>
        <meta name="description" content="Find F4R1S's nicknames for various online games." />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center p-4 pt-24 relative">
        <div className="absolute top-5 left-5 z-20">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <main className="relative z-10 max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 shadow-lg mb-4">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient from-fuchsia-400 to-purple-400">Game Nicknames</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Find me in-game! Here are my current nicknames.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameNicknames.map((item, index) => (
              <GameNicknameCard key={item.game} item={item} index={index} />
            ))}
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default GameNicknamesPage;
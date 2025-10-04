import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, MonitorPlay, Music, Sliders, User, Briefcase, Settings, Mic, QrCode, Gamepad2, Link as LinkIcon, FolderGit2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleNotImplemented = () => {
    toast({
      title: "🚧 Fitur Belum Tersedia",
      description: "Fitur ini sedang dalam pengembangan.",
      variant: "destructive",
    });
  };

  const portfolioItems = [
    {
      title: "Social Media",
      icon: <LinkIcon className="w-8 h-8 text-pink-400" />,
      color: "from-pink-500/10 to-transparent",
      link: "/social-media",
    },
    {
      title: "Setting Service Audio",
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      color: "from-blue-500/10 to-transparent",
      link: "/audio-services",
    },
    {
      title: "About Me",
      icon: <User className="w-8 h-8 text-green-400" />,
      color: "from-green-500/10 to-transparent",
      link: "/about-me",
    },
    {
      title: "Portofolio",
      icon: <Briefcase className="w-8 h-8 text-yellow-400" />,
      color: "from-yellow-500/10 to-transparent",
      link: "/portfolio",
    },
    {
      title: "Spesifikasi PC & Audio",
      icon: <MonitorPlay className="w-8 h-8 text-indigo-400" />,
      color: "from-indigo-500/10 to-transparent",
      link: "/specs",
    },
    {
      title: "VST & DAW Plugins",
      icon: <FolderGit2 className="w-8 h-8 text-red-400" />,
      color: "from-red-500/10 to-transparent",
      link: "https://drive.google.com/drive/u/3/folders/1p850u4_FnqaFLGxO220wVIZNnx6unr6A",
      external: true,
    },
    {
      title: "QRIS For Donate",
      icon: <QrCode className="w-8 h-8 text-teal-400" />,
      color: "from-teal-500/10 to-transparent",
      link: "/donate",
    },
    {
      title: "Nickname Game",
      icon: <Gamepad2 className="w-8 h-8 text-orange-400" />,
      color: "from-orange-500/10 to-transparent",
      link: "/nicknames",
    },
  ];

  const renderLink = (item, children) => {
    if (item.external) {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
          {children}
        </a>
      );
    }
    if (item.onClick) {
      return (
        <div onClick={item.onClick} className="block h-full cursor-pointer">
          {children}
        </div>
      );
    }
    return (
      <Link to={item.link} className="block h-full">
        {children}
      </Link>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            <div className="relative">
              <img 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50 mx-auto object-cover"
                alt="F4R1S Profile"
               src="https://horizons-cdn.hostinger.com/a63cf1df-2683-4d33-969d-7a49bcbd7600/1e3262b5d17c6c1f567ab3d363b83706.jpg" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="text-gradient">F4R1S</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Headphones className="w-5 h-5 text-purple-400" />
              <span className="text-sm">Audio Engineer</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MonitorPlay className="w-5 h-5 text-pink-400" />
              <span className="text-sm">Multimedia Operator</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Music className="w-5 h-5 text-green-400" />
              <span className="text-sm">Composer Music</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sliders className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Mixing Engineer</span>
            </div>
          </motion.div>

          <motion.div 
            className="pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="h-full"
                >
                  {renderLink(item, (
                    <div className={`h-full flex flex-col justify-center items-center p-4 rounded-2xl bg-gradient-to-br ${item.color} border border-white/10 backdrop-blur-sm shadow-lg transition-all duration-300`}>
                      {item.icon}
                      <p className="mt-2 text-sm font-semibold text-center text-white">{item.title}</p>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
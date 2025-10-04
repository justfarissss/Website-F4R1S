import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const PortfolioCard = ({ item, index }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const Icon = item.icon;

  const handleClick = () => {
    if (item.path) {
      if (item.path.startsWith('http')) {
        window.open(item.path, '_blank', 'noopener,noreferrer');
      } else {
        navigate(item.path);
      }
    } else {
      toast({
        title: "🚧 Feature Coming Soon!",
        description: "This feature isn't implemented yet—but don't worry!",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={handleClick}
      className="group cursor-pointer"
    >
      <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
             style={{ 
               background: `linear-gradient(135deg, ${item.gradient.split(' ')[0].replace('from-', 'var(--tw-gradient-from)')}, ${item.gradient.split(' ')[1].replace('to-', 'var(--tw-gradient-to)')})`,
               opacity: 0.1 
             }}>
        </div>

        <div className="relative p-6 h-full flex flex-col justify-between">
          <div>
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg mb-4`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {item.description}
            </p>
          </div>

          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
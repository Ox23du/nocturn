import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const GIFS = [
  "https://i.pinimg.com/originals/14/f4/35/14f435eaaf8d107cca5055ce150eaf47.gif",
  "https://64.media.tumblr.com/db8472cfbb89a155148003b053d5f3de/4d6d987e0cee7307-8e/s400x225/158142e8e876044a6191733a02f6ee5ac1643b58.gif"
];

export const HeroSection = () => {
  const isMobile = useIsMobile();
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prev) => (prev + 1) % GIFS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Optimize for mobile - simplified animation
  if (isMobile) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Static Background - No animation for mobile performance */}
        <div className="absolute inset-0 z-0">
          <img
            src={GIFS[0]}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          
          {/* Static gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="label-caps mb-6 inline-block"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display mb-6"
          >
            REDEFINA
            <br />
            <span className="text-muted-foreground">SEUS LIMITES</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="body-lg max-w-xl mx-auto mb-10"
          >
            Streetwear premium criado para quem ousa se destacar.
            Drops exclusivos. Quantidades limitadas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#shop"
              whileTap={{ scale: 0.98 }}
              className="btn-primary min-w-[200px]"
            >
              Comprar Agora
            </motion.a>
            <motion.a
              href="#collections"
              whileTap={{ scale: 0.98 }}
              className="btn-secondary min-w-[200px]"
            >
              Ver Coleções
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Rolar</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with GIFs */}
      <div className="absolute inset-0 z-0">
        {GIFS.map((gif, index) => (
          <motion.div
            key={gif}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentGifIndex ? 1 : 0 
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={gif}
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        
        {/* Gradient overlays - balanced brightness */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="label-caps mb-6 inline-block"></span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display mb-6"
        >
          REDEFINA
          <br />
          <span className="text-muted-foreground">SEUS LIMITES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="body-lg max-w-xl mx-auto mb-10"
        >
          Streetwear premium criado para quem ousa se destacar.
          Drops exclusivos. Quantidades limitadas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#shop"
            whileTap={{ scale: 0.98 }}
            className="btn-primary min-w-[200px]"
          >
            Comprar Agora
          </motion.a>
          <motion.a
            href="#collections"
            whileTap={{ scale: 0.98 }}
            className="btn-secondary min-w-[200px]"
          >
            Ver Coleções
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Rolar</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};


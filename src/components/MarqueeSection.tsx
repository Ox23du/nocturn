import { motion } from "framer-motion";

const marqueeItems = [
  "NOVO DROP",
  "FRETE GRÁTIS ACIMA DE R$750",
  "EDIÇÃO LIMITADA",
  "QUALIDADE PREMIUM",
  "ACESSO EXCLUSIVO",
];

export const MarqueeSection = () => {
  return (
    <section className="py-4 md:py-6 border-y border-border bg-card/30 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex items-center gap-8 md:gap-16"
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className="text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-8 md:gap-16"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
            </span>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex items-center gap-8 md:gap-16"
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className="text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-8 md:gap-16"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

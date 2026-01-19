import { motion } from "framer-motion";
import { useState, useRef } from "react";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";
import { Instagram } from "lucide-react";

const lookbookImages = [
  { id: 1, image: lookbook1 },
  { id: 2, image: lookbook2 },
  { id: 3, image: lookbook3 },
];

interface LookbookItemProps {
  item: { id: number; image: string };
  index: number;
}

const LookbookItem = ({ item, index }: LookbookItemProps) => {
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden aspect-[4/5]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        src={item.image}
        alt={`Lookbook ${item.id}`}
        className="w-full h-full object-cover"
      />

      {/* Magnifier lens overlay */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute pointer-events-none border-2 border-white/50 rounded-full w-40 h-40 overflow-hidden shadow-2xl z-20"
          style={{
            left: `${zoomPosition.x}%`,
            top: `${zoomPosition.y}%`,
            transform: "translate(-50%, -50%)",
            backgroundImage: `url(${item.image})`,
            backgroundSize: "400%",
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
          }}
        />
      )}

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </motion.div>
  );
};

export const LookbookSection = () => {
  return (
    <section id="lookbook" className="section-padding bg-card/20">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="label-caps mb-4 block">Identidade Visual</span>
          <h2 className="heading-xl">
            O
            <br />
            <span className="text-muted-foreground">LOOKBOOK</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {lookbookImages.map((item, index) => (
            <LookbookItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Instagram Follow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-card border border-border hover:border-foreground/30 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">
              @nocturn
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

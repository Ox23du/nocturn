import { motion } from "framer-motion";
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden aspect-[4/5]"
    >
      <motion.img
        src={item.image}
        alt={`Lookbook ${item.id}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

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
            whileTap={{ scale: 0.98 }}
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

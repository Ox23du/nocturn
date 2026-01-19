import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";

const collections = [
  {
    id: 1,
    title: "Essenciais de Inverno",
    subtitle: "Conforto premium encontra a cultura urbana",
    image: collection1,
    itemCount: 24,
  },
  {
    id: 2,
    title: "Sombras Urbanas",
    subtitle: "Tons escuros para os caminhantes da noite",
    image: collection2,
    itemCount: 18,
  },
];

export const CollectionsSection = () => {
  return (
    <section id="collections" className="section-padding bg-card/30">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="label-caps mb-4 block">Selecionados para Você</span>
          <h2 className="heading-xl">
            EXPLORAR
            <br />
            <span className="text-muted-foreground">COLEÇÕES</span>
          </h2>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <Link to="/shop" key={collection.id}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative aspect-[4/3] md:aspect-[16/10] overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <motion.img
                  src={collection.image}
                  alt={collection.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                      {collection.itemCount} Itens
                    </span>
                    <h3 className="heading-lg mb-2">{collection.title}</h3>
                    <p className="body-sm max-w-xs">{collection.subtitle}</p>
                  </motion.div>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute top-8 right-8 md:top-12 md:right-12"
                  >
                    <div className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                      <ArrowUpRight className="w-5 h-5 group-hover:text-background transition-colors" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};


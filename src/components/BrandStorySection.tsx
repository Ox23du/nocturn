import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import brandStory from "@/assets/brand-story.jpg";

const stats = [
  { value: "100%", label: "Materiais Premium" },
  { value: "500+", label: "Peças Limitadas" },
  { value: "48H", label: "Envio Global" },
];

export const BrandStorySection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-padding relative overflow-hidden"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] lg:aspect-[3/4]"
          >
            <motion.div style={{ y }} className="absolute inset-0">
              <img
                src={brandStory}
                alt="Brand craftsmanship"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>

            {/* Floating accent */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-6 -bottom-6 lg:-right-12 lg:-bottom-12 w-32 h-32 lg:w-48 lg:h-48 border border-muted flex items-center justify-center"
            >
              <span className="text-xs uppercase tracking-widest text-muted-foreground text-center leading-relaxed">
                Criado com
                <br />
                Propósito
              </span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="label-caps mb-6 block">Nossa História</span>
            <h2 className="heading-xl mb-8">
              NASCIDO DAS
              <br />
              <span className="text-muted-foreground">RUAS</span>
            </h2>

            <div className="space-y-6 mb-12">
              <p className="body-lg">
                NOCTURN foi fundado em uma crença simples: qualidade premium
                não deveria ser exclusividade das passerias de alta moda. Trazemos
                essa mesma atenção aos detalhes para as ruas.
              </p>
              <p className="body-md">
                Cada peça é criada com materiais cuidadosamente selecionados,
                desenhada em nosso estúdio e produzida em quantidades limitadas.
                Acreditamos em qualidade sobre quantidade — cada drop é uma declaração,
                não apenas mais um produto.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="text-2xl md:text-3xl font-bold block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

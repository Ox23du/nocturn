import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Users,
  Award,
} from "lucide-react";
import { useScroll, useTransform } from "framer-motion";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";

const values = [
  {
    icon: Award,
    title: "Qualidade Premium",
    description:
      "Cada peça écrafted com materiais selecionados e atenção meticulosa aos detalhes.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description:
      "Mais que clientes, somos uma comunidade de pessoas que compartilham valores e estilo de vida.",
  },
  {
    icon: Award,
    title: "Autenticidade",
    description:
      "Mantemos nossa essência streetwear genuína, sem seguir tendências passageiras.",
  },
];

const Company = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <main className="relative min-h-screen">
      <div className="grain-overlay" />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <h1 className="heading-xl mb-6">
              SOBRE A
              <br />
              <span className="text-muted-foreground">NOCTURN</span>
            </h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Streetwear premium nascido das ruas, criado para quem não segue
              tendências — quem as cria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5]"
            >
              <motion.div style={{ y }} className="absolute inset-0">
                <img
                  src={lookbook1}
                  alt="NOCTURN craftsmanship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="label-caps mb-6 block">Nossa História</span>
              <h2 className="heading-md mb-8">
                NASCIDO DAS RUAS,
                <br />
                <span className="text-muted-foreground">CRiado COM PROPÓSITO</span>
              </h2>

              <div className="space-y-6">
                <p className="body-lg">
                  NOCTURN nasceu de uma crença simples: qualidade premium não
                  deveria ser exclusividade das passerias de alta moda.
                  Trazemos essa mesma atenção aos detalhes para as ruas.
                </p>
                <p className="body-md text-muted-foreground">
                  Fundado em 2023 por um grupo de amigos apaixonados por
                  streetwear, começamos vendendo peças limitadas em
                  pop-ups e feiras. A resposta da comunidade foi tão
                  overwhelmed que transformamos nosso hobby em uma marca
                  completa.
                </p>
                <p className="body-md text-muted-foreground">
                  Cada peça é criada em nosso estúdio, produzida em
                  quantidades limitadas e desenhada para durar. Acreditamos
                  em qualidade sobre quantidade — cada drop é uma declaração,
                  não apenas mais um produto.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label-caps mb-6 block">Nossos Valores</span>
            <h2 className="heading-md">O QUE NOS MOVE</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-border hover:border-foreground/50 transition-colors"
              >
                <value.icon className="w-10 h-10 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Preview */}
      <section className="py-12 md:py-20">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label-caps mb-6 block">Visual</span>
            <h2 className="heading-md mb-4">LOOKBOOK</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[lookbook1, lookbook2, lookbook3].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-[3/4] overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Lookbook ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 md:py-20">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="label-caps mb-6 block">Fale Conosco</span>
            <h2 className="heading-md mb-8">ENTRE EM CONTATO</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a
                href="mailto:contato@nocturn.com"
                className="p-6 border border-border hover:border-foreground/50 transition-colors"
              >
                <Mail className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">E-mail</h3>
                <p className="text-sm text-muted-foreground">
                  contato@nocturn.com
                </p>
              </a>

              <a
                href="tel:+55XXXXXXXXXX"
                className="p-6 border border-border hover:border-foreground/50 transition-colors"
              >
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="text-sm text-muted-foreground">+55 (11) 99999-9999</p>
              </a>

              <a
                href="#"
                className="p-6 border border-border hover:border-foreground/50 transition-colors"
              >
                <MapPin className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Loja Física</h3>
                <p className="text-sm text-muted-foreground">
                  São Paulo, SP
                </p>
              </a>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @nocturn.streetwear
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Company;


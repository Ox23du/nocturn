import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ChevronDown,
  Truck,
  RotateCcw,
  Ruler,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const faqs = [
  {
    question: "Qual é o prazo de entrega?",
    answer:
      "Para capitais, o prazo é de 2 a 5 dias úteis. Para interior, de 5 a 10 dias úteis. Pedidos internacionais variam de 7 a 20 dias úteis.",
  },
  {
    question: "Como posso rastrear meu pedido?",
    answer:
      "Assim que seu pedido for despachado, você receberá um e-mail com o código de rastreamento. Você também pode acompanhar pelo seu account na seção 'Meus Pedidos'.",
  },
  {
    question: "Qual é a política de devolução?",
    answer:
      "Você tem até 30 dias após o recebimento para devolver produtos não usados, com etiquetas originais. Devoluções são gratuitas para clientes Prime.",
  },
  {
    question: "Os produtos têm garantia?",
    answer:
      "Sim! Todos os produtos NOCTURN têm garantia de 90 dias contra defeitos de fabricação. Após esse período, oferecemos serviços de reparo mediante orçamento.",
  },
  {
    question: "Vocês fazem trocas?",
    answer:
      "Sim! Você pode trocar produtos dentro de 30 dias. A primeira troca é gratuita. Para trocas adicionais, há uma taxa de R$15 para cobrir custos de logística.",
  },
  {
    question: "Como escolho o tamanho certo?",
    answer:
      "Cada produto tem um guia de tamanhos específico na página do produto. Nossa tabela considera suas medidas corporais, não apenas a numeração padrão.",
  },
  {
    question: "Os produtos são originais?",
    answer:
      "Absolutamente! Todos os produtos são originais NOCTURN, produzidos em nossa fábrica com materiais premium e supervisionados pela nossa equipe de qualidade.",
  },
  {
    question: "Aceitam quais formas de pagamento?",
    answer:
      "Aceitamos cartões de crédito/débito (Visa, Mastercard, Amex), Pix, Boleto Bancário, e parcelamento em até 6x sem juros em compras acima de R$300.",
  },
];

const shippingInfo = [
  {
    icon: Truck,
    title: "Envio Grátis",
    description: "Para pedidos acima de R$299",
  },
  {
    icon: Clock,
    title: "Envio Express",
    description: "Entrega em 24h para capitais",
  },
  {
    icon: MapPin,
    title: "Retire na Loja",
    description: "Retire em até 2h na loja física",
  },
];

const returnInfo = [
  {
    icon: RotateCcw,
    title: "30 Dias para Devolver",
    description: "Sem perguntas, sem burocracia",
  },
  {
    icon: Ruler,
    title: "Guia de Tamanhos",
    description: "Encontre o tamanho perfeito",
  },
  {
    icon: MessageCircle,
    title: "Suporte WhatsApp",
    description: "Atendimento em tempo real",
  },
];

const sizeGuide = [
  { size: "P", chest: "88-94", length: "68", sleeve: "60" },
  { size: "M", chest: "96-102", length: "70", sleeve: "62" },
  { size: "G", chest: "104-110", length: "72", sleeve: "64" },
  { size: "GG", chest: "112-118", length: "74", sleeve: "66" },
  { size: "XGG", chest: "120-126", length: "76", sleeve: "68" },
];

const Support = () => {
  const [openFaqs, setOpenFaqs] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (question: string) => {
    setOpenFaqs((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

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
              CENTRAL DE
              <br />
              <span className="text-muted-foreground">SUPORTE</span>
            </h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas, acompanhe seus pedidos ou fale conosco.
              Estamos aqui para ajudar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="pb-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shippingInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-border hover:border-foreground/50 transition-colors"
              >
                <item.icon className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-md mb-8 text-center">
              Perguntas Frequentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <Collapsible
                  key={faq.question}
                  open={openFaqs.includes(faq.question)}
                  onOpenChange={() => toggleFaq(faq.question)}
                >
                  <CollapsibleTrigger className="w-full flex items-center justify-between p-4 border border-border hover:border-foreground/50 transition-colors text-left">
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openFaqs.includes(faq.question) ? "rotate-180" : ""
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="p-4 border-x border-b border-border text-muted-foreground"
                    >
                      {faq.answer}
                    </motion.div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-md mb-8 text-center">Guia de Tamanhos</h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="p-4 text-left font-semibold">Tamanho</th>
                    <th className="p-4 text-left font-semibold">Peito (cm)</th>
                    <th className="p-4 text-left font-semibold">
                      Comprimento (cm)
                    </th>
                    <th className="p-4 text-left font-semibold">
                      Manga (cm)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sizeGuide.map((size) => (
                    <tr key={size.size} className="border-t border-border">
                      <td className="p-4 font-medium">{size.size}</td>
                      <td className="p-4 text-muted-foreground">
                        {size.chest}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {size.length}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {size.sleeve}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              * Medidas aproximadas. Recomendamos verificar as medidas específicas
              de cada produto.
            </p>
          </motion.div>
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
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="heading-md mb-8">Fale Conosco</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="https://wa.me/55XXXXXXXXXXXX"
                className="p-6 border border-border hover:border-foreground/50 transition-colors group"
              >
                <MessageCircle className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">
                  Atendimento imediato
                </p>
              </a>

              <a
                href="mailto:contato@nocturn.com"
                className="p-6 border border-border hover:border-foreground/50 transition-colors group"
              >
                <Mail className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">E-mail</h3>
                <p className="text-sm text-muted-foreground">
                  responde em 24h
                </p>
              </a>

              <a
                href="#"
                className="p-6 border border-border hover:border-foreground/50 transition-colors group"
              >
                <Phone className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="text-sm text-muted-foreground">
                  Seg-Sex, 9h-18h
                </p>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Support;


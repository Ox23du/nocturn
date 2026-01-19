import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

// TikTok icon component since lucide doesn't have it
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const footerLinks = {
  shop: [
    { name: "Todos os Produtos", href: "/shop" },
    { name: "Camisetas Oversized", href: "/shop/camisetas" },
    { name: "Moletons", href: "/shop/moletons" },
    { name: "Acessórios", href: "/shop/acessorios" },
  ],
  company: [
    { name: "Sobre Nós", href: "/company" },
    { name: "Lookbook", href: "/company" },
    { name: "Contato", href: "/company" },
  ],
  support: [
    { name: "Perguntas Frequentes", href: "/support" },
    { name: "Envio", href: "/support" },
    { name: "Devoluções", href: "/support" },
    { name: "Guia de Tamanhos", href: "/support" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", name: "Instagram" },
  { icon: TikTokIcon, href: "https://tiktok.com", name: "TikTok" },
  { icon: Twitter, href: "https://x.com", name: "X" },
];

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container-wide">
        {/* Main Footer */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.a
                href="/"
                className="text-2xl font-black tracking-tighter inline-block mb-6"
                whileHover={{ scale: 1.02 }}
              >
                NOCTURN
              </motion.a>
              <p className="body-sm max-w-sm mb-8">
                Streetwear premium para quem ousa se destacar.
                Criado com propósito, usado com orgulho.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
                Loja
              </h4>
              <ul className="space-y-4">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
                Empresa
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
                Suporte
              </h4>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NOCTURN. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

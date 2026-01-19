import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { ArrowRight } from "lucide-react";

import productHoodie1 from "@/assets/product-hoodie-1.jpg";
import productHoodie2 from "@/assets/product-hoodie-2.jpg";
import productHoodie3 from "@/assets/product-hoodie-3.jpg";
import productHoodie4 from "@/assets/product-hoodie-4.jpg";

const products = [
  {
    id: 1,
    image: productHoodie1,
    name: "Shadow Oversized Tee",
    price: 89,
    category: "T-Shirts",
    isNew: true,
  },
  {
    id: 2,
    image: productHoodie2,
    name: "Fog Essential Tee",
    price: 75,
    category: "T-Shirts",
    isNew: true,
  },
  {
    id: 3,
    image: productHoodie3,
    name: "Sand Dune Premium Tee",
    price: 95,
    category: "T-Shirts",
    isNew: false,
  },
  {
    id: 4,
    image: productHoodie4,
    name: "Military Relaxed Tee",
    price: 85,
    category: "T-Shirts",
    isNew: false,
  },
];

export const ProductsSection = () => {
  return (
    <section id="shop" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16"
        >
          <div>
            <span className="label-caps mb-4 block">Destaques</span>
            <h2 className="heading-xl">
              MAIS
              <br />
              <span className="text-muted-foreground">VENDIDOS</span>
            </h2>
          </div>
          <motion.a
            href="/shop"
            whileHover={{ x: 10 }}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mt-6 md:mt-0"
          >
            Ver Todos os Produtos
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
              isNew={product.isNew}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


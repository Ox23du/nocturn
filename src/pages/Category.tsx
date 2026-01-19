import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "NOCTURN Essential Tee",
    price: 129,
    image: "/src/assets/product-hoodie-1.jpg",
    category: "Camisetas",
    isNew: true,
  },
  {
    id: 2,
    name: "Oversized Hoodie",
    price: 299,
    image: "/src/assets/product-hoodie-2.jpg",
    category: "Moletons",
    isNew: false,
  },
  {
    id: 3,
    name: "Urban Cargo Pants",
    price: 249,
    image: "/src/assets/product-hoodie-3.jpg",
    category: "Calças",
    isNew: true,
  },
  {
    id: 4,
    name: "Limited Edition Cap",
    price: 89,
    image: "/src/assets/product-hoodie-4.jpg",
    category: "Acessórios",
    isNew: false,
  },
  {
    id: 5,
    name: "Graphic Tee - Night",
    price: 139,
    image: "/src/assets/lookbook-1.jpg",
    category: "Camisetas",
    isNew: true,
  },
  {
    id: 6,
    name: "Denim Jacket",
    price: 399,
    image: "/src/assets/lookbook-2.jpg",
    category: "Jaquetas",
    isNew: false,
  },
  {
    id: 7,
    name: "Tech Wear Vest",
    price: 279,
    image: "/src/assets/lookbook-3.jpg",
    category: "Moletons",
    isNew: true,
  },
  {
    id: 8,
    name: "Bucket Hat",
    price: 79,
    image: "/src/assets/collection-1.jpg",
    category: "Acessórios",
    isNew: false,
  },
];

const categoryConfig: Record<string, { title: string; description: string }> = {
  camisetas: {
    title: "CAMISETAS",
    description: "O essencial do streetwear. Qualidade premium, corte oversized.",
  },
  moletons: {
    title: "MOLETONS",
    description: "Conforto e estilo para os dias mais frios.",
  },
  calcas: {
    title: "CALÇAS",
    description: "Cortes modernos para complementar seu visual.",
  },
  jaquetas: {
    title: "JAQUETAS",
    description: "Peçasstatement para destacar seu look.",
  },
  acessorios: {
    title: "ACESSÓRIOS",
    description: "Os detalhes que fazem toda a diferença.",
  },
};

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const [sortBy, setSortBy] = useState("Mais Novos");

  const config = categoryConfig[category || ""] || {
    title: "PRODUTOS",
    description: "Todos os produtos NOCTURN.",
  };

  const categoryProducts = products.filter(
    (product) =>
      !category ||
      product.category.toLowerCase() === category ||
      (category === "calcas" && product.category === "Calças")
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

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
              {config.title}
            </h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              {config.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="pb-20 md:pb-32">
        <div className="container-wide">
          {/* Sort */}
          <div className="mb-8 flex justify-end">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
            >
              <option value="Mais Novos">Mais Novos</option>
              <option value="Menor Preço">Menor Preço</option>
              <option value="Maior Preço">Maior Preço</option>
              <option value="Mais Vendidos">Mais Vendidos</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {categoryProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Category;


import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Search, Filter, X } from "lucide-react";

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

const categories = [
  { name: "Todos", count: products.length },
  { name: "Camisetas", count: 2 },
  { name: "Moletons", count: 2 },
  { name: "Calças", count: 1 },
  { name: "Jaquetas", count: 1 },
  { name: "Acessórios", count: 2 },
];

const sortOptions = [
  { name: "Mais Novos" },
  { name: "Menor Preço" },
  { name: "Maior Preço" },
  { name: "Mais Vendidos" },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Mais Novos");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              NOVA
              <br />
              <span className="text-muted-foreground">COLEÇÃO</span>
            </h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Peças exclusivas criadas para quem não segue tendências — quem as
              cria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="pb-20 md:pb-32">
        <div className="container-wide">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-6 flex items-center justify-between">
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border border-border"
            >
              <Filter className="w-4 h-4" />
              Filtros
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-border bg-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.name} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-12">
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-64 shrink-0">
              <div className="sticky top-32 space-y-8">
                {/* Search */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-3 block">
                    Buscar
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Buscar produto..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-3 block">
                    Categorias
                  </label>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <button
                          onClick={() => setSelectedCategory(category.name)}
                          className={`w-full text-left px-3 py-2 text-sm transition-colors flex items-center justify-between ${
                            selectedCategory === category.name
                              ? "bg-foreground text-background"
                              : "hover:bg-muted"
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="text-muted-foreground opacity-60">
                            {category.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sort */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-3 block">
                    Ordenar
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.name} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6 hidden md:block">
                <p className="text-sm text-muted-foreground">
                  Mostrando {filteredProducts.length} produtos
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
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

              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground">
                    Nenhum produto encontrado.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filters Overlay */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
          >
            <div className="container-wide py-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold">Filtros</h2>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-3 block">
                    Categorias
                  </label>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <button
                          onClick={() => {
                            setSelectedCategory(category.name);
                            setIsMobileFiltersOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 text-sm transition-colors flex items-center justify-between ${
                            selectedCategory === category.name
                              ? "bg-foreground text-background"
                              : "hover:bg-muted"
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="text-muted-foreground opacity-60">
                            {category.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full py-3 bg-foreground text-background font-medium"
                >
                  Aplicar Filtros
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Shop;


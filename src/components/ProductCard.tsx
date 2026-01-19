import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Eye, Check, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
  category: string;
  isNew?: boolean;
  index: number;
}

export const ProductCard = ({
  id,
  image,
  name,
  price,
  category,
  isNew,
  index,
}: ProductCardProps) => {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    
    // Adicionar múltiplos itens se quantidade > 1
    for (let i = 0; i < quantity; i++) {
      addItem({ id, name, price, category, image });
    }
    
    // Reset após animação
    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 1500);
  };

  const incrementQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity(prev => Math.min(prev + 1, 10));
  };

  const decrementQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div className="card-product aspect-[3/4] rounded-sm overflow-hidden mb-4">
        {/* Product Image */}
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
        />

        {/* New Badge */}
        {isNew && (
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-foreground text-background text-xs font-bold uppercase tracking-wider px-3 py-1">
              Novo
            </span>
          </div>
        )}

        {/* Hover Overlay - Improved Add to Cart UX - Disabled on mobile to prevent lag */}
        <motion.div
          initial={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent z-10 flex flex-col items-center justify-end gap-4 pb-12 md:opacity-0 md:group-hover:opacity-100 md:hover:opacity-100 transition-opacity duration-500 pointer-events-none md:pointer-events-auto"
        >
          <AnimatePresence mode="wait">
            {!isAdding ? (
              <motion.div
                key="controls"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center gap-4"
              >
                {/* Quantity Selector */}
                <div className="flex items-center gap-3 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={decrementQuantity}
                    className="p-1 hover:text-primary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </motion.button>
                  <span className="w-8 text-center font-semibold">{quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={incrementQuantity}
                    className="p-1 hover:text-primary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  className="flex items-center gap-2 bg-foreground text-background px-8 py-3.5 text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-foreground/90 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Adicionar
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex flex-col items-center gap-3"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 rounded-full bg-primary flex items-center justify-center"
                >
                  <Check className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <span className="text-sm font-medium uppercase tracking-wider">
                  Adicionado!
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick View Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full border border-border/50 hover:bg-card transition-colors"
          >
            <Eye className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Mobile Add to Cart Button - Always visible on mobile */}
        <motion.div
          className="md:hidden absolute bottom-4 left-0 right-0 px-4 z-20"
        >
          {!isAdding ? (
            <div className="flex flex-col items-center gap-3">
              {/* Quantity Selector - Mobile */}
              <div className="flex items-center gap-3 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={decrementQuantity}
                  className="p-1 hover:text-primary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </motion.button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={incrementQuantity}
                  className="p-1 hover:text-primary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Add to Cart Button - Mobile */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-3 text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-foreground/90 transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Adicionar
              </motion.button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
              >
                <Check className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <span className="text-xs font-medium uppercase tracking-wider">
                Adicionado!
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-sm font-semibold tracking-tight md:group-hover:text-muted-foreground transition-colors">
          {name}
        </h3>
        <p className="text-sm font-bold">R$ {price.toFixed(2).replace(".", ",")}</p>
      </div>
    </motion.div>
  );
};


import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { ProductsSection } from "@/components/ProductsSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { BrandStorySection } from "@/components/BrandStorySection";
import { LookbookSection } from "@/components/LookbookSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative">
      {/* Film grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Marquee Banner */}
      <MarqueeSection />
      
      {/* Best Sellers / Products */}
      <ProductsSection />
      
      {/* Collections */}
      <CollectionsSection />
      
      {/* Brand Story */}
      <BrandStorySection />
      
      {/* Lookbook Gallery */}
      <LookbookSection />
      
      {/* Newsletter Signup */}
      <NewsletterSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;


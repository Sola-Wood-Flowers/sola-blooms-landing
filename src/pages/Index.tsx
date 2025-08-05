import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import WholesaleInfo from "@/components/WholesaleInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductCategories />
      <WholesaleInfo />
      <Footer />
    </div>
  );
};

export default Index;

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { SimulationSection } from "@/components/SimulationSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <SimulationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

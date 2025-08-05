import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { NewsEventsSection } from "@/components/NewsEventsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WelcomeMessage />
        <NewsEventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

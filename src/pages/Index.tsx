import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { NewsEventsSection } from "@/components/NewsEventsSection";
import { DeputyMessage } from "@/components/DeputyMessage";
import { DirectorMessage } from "@/components/DirectorMessage";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WelcomeMessage />
        <div className=" bg-peaceful">
          <div className="container mx-auto px-1">
            <div className="grid lg:grid-cols-2 gap-1 max-w-7xl py-4">
              <div className="w-full">
                <DirectorMessage />
              </div>
              <div className="w-full">
                <DeputyMessage />
              </div>
            </div>
          </div>
        </div>
        <NewsEventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

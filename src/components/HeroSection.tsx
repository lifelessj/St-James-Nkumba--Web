import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-school.jpg";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 min-h-[80vh] flex items-center">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src={heroImage}
          alt="St. James Nkumba Primary School students"
          className="w-full h-full object-cover opacity-50"
          style={{ transform: `translateY(${parallaxOffset}px)` }} // Optional parallax effect
        />
        <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-100/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content with Staggered Animation */}
          <div className="text-gray-900 space-y-6">
            <div className="space-y-4">
              <h1 className={`text-4xl md:text-6xl font-bold leading-tight hover:shadow-xl hover:scale-[1.02] transition-all duration-700 ease-out cursor-pointer transform ${isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
                }`}>
                Welcome to{" "}
                <span className={`text-red-600 transition-all duration-700 delay-200 ease-out transform ${isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-12 opacity-0'
                  }`}>St. James Nkumba</span>{" "}
                Primary School
              </h1>
              <p className={`text-xl md:text-2xl opacity-90 leading-relaxed transition-all duration-700 delay-300 ease-out transform ${isVisible
                ? 'translate-y-0 opacity-90'
                : 'translate-y-12 opacity-0'
                }`}>
                Nurturing young minds with excellence, care, and Christian values since our founding.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ease-out transform ${isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-12 opacity-0'
              }`}>
              <Button
                size="lg"
                className="px-6 py-3 bg-red-500 hover:bg-black/90 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.05] transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center">
                <Link to="/admissions">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-6 py-3 border-2 border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-secondary hover:shadow-xl hover:scale-[2] transition-all duration-300 ease-in-out cursor-pointer" />
                  </div>
                </div>
                <div className="text-2xl font-bold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">Nursery</div>
                <div className="text-2xl font-bold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">P.1 - P.7</div>
                <div className="text-sm opacity-80 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">Classes</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary hover:shadow-xl hover:scale-[2] transition-all duration-300 ease-in-out cursor-pointer" />
                  </div>
                </div>
                <div className="text-2xl font-bold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">500+</div>
                <div className="text-sm opacity-80 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">Students</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-secondary hover:shadow-xl hover:scale-[2] transition-all duration-300 ease-in-out cursor-pointer" />
                  </div>
                </div>
                <div className="text-2xl font-bold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">25+</div>
                <div className="text-sm opacity-80 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">Years</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-secondary/10 rounded-full blur-3xl absolute -top-10 -left-10"></div>
              <div className="w-60 h-60 bg-accent/10 rounded-full blur-2xl absolute top-20 left-20"></div>
              <div className="relative z-10 text-center space-y-6 p-8">
                <div className="text-6xl">📚</div>
                <div className="text-xl font-semibold">Building Tomorrow's Leaders</div>
                <div className="text-sm opacity-80">Through Quality Education & Christian Values</div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  );
}

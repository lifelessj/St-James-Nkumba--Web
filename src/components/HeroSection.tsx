import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-school.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="St. James Nkumba Primary School students"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-black space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Welcome to{" "}
                <span className="text-secondary text-red-600">St. James Nkumba</span>{" "}
                Primary School
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Nurturing young minds with excellence, care, and Christian values since our founding.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white shadow-glow"
              >
                <Link to="/admissions">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-black hover:bg-white/10"
              >
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
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div className="text-2xl font-bold">Nursery</div>
                <div className="text-2xl font-bold">P.1 - P.7</div>
                <div className="text-sm opacity-80">Classes</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-80">Students</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm opacity-80">Years</div>
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
      </div>
    </section>
  );
}
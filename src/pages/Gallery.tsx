import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Image, Calendar, Trophy, Users, BookOpen, Heart, Play, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Chapel from "@/assets/chapel.jpg";
import Dance from "@/assets/dance.jpg";

export default function Gallery() {
  const albums = [
    {
      id: 1,
      title: "Annual Sports Day 2024",
      description: "Exciting athletic competitions and team spirit",
      imageCount: 45,
      date: "March 2024",
      featured: true,
      category: "Sports",
      icon: Trophy
    },
    {
      id: 2,
      title: "Graduation Ceremony 2023",
      description: "Celebrating our P.7 graduates and their achievements",
      imageCount: 32,
      date: "December 2023",
      featured: true,
      category: "Academic",
      icon: BookOpen
    },
    {
      id: 3,
      title: "Chapel Services",
      description: "Weekly worship and spiritual development activities",
      imageCount: 28,
      date: "Ongoing",
      featured: false,
      category: "Spiritual",
      icon: Heart
    },
    {
      id: 4,
      title: "Science Fair 2024",
      description: "Students showcasing their innovative projects",
      imageCount: 24,
      date: "February 2024",
      featured: false,
      category: "Academic",
      icon: BookOpen
    },
    {
      id: 5,
      title: "School Anniversary Celebration",
      description: "20 years of excellence in education",
      imageCount: 38,
      date: "January 2024",
      featured: true,
      category: "Events",
      icon: Calendar
    },
    {
      id: 6,
      title: "Cultural Day 2023",
      description: "Celebrating Uganda's rich cultural heritage",
      imageCount: 31,
      date: "November 2023",
      featured: false,
      category: "Cultural",
      icon: Users
    }
  ];

  const categories = ["All", "Sports", "Academic", "Spiritual", "Events", "Cultural"];

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="absolute inset-0 py-16 bg-center">
          <img src={Chapel} alt="Chapel" className="w-full h-64 object-cover mt-10 opacity-30 hover:opacity-40 transition-opacity duration-300" />
        </div>
        <div className="container mx-auto px-4 text-center ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 opacity-90 max-w-2xl mx-auto text-gray-800">Gallery</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-900">
            Capturing precious moments and memories from school life at St. James Nkumba
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Filter Buttons */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full z-10 hover:shadow-xl hover:scale-[1.09] transition-all duration-300 ease-in-out cursor-pointer"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Featured Albums */}
        <section className="mb-16 bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="text-center mb-12">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Featured</Badge>
            <h2 className="text-3xl font-bold text-onyx mb-4">Latest Photo Albums</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our most recent and popular photo collections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.filter(album => album.featured).map((album) => {
              const Icon = album.icon;
              return (
                <Card key={album.id} className="group hover:shadow-card transition-all duration-300 border-0 shadow-soft overflow-hidden">
                  <div className="relative">
                    {/* Placeholder image area */}
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <Icon className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                        <div className="text-sm text-muted-foreground">{album.imageCount} Photos</div>
                      </div>
                    </div>

                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-gray-400 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/0 group-hover:bg-gray-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <Badge className="absolute top-3 left-3 bg-gray-800 text-white text-sm px-2 py-1 rounded">
                      {album.category}
                    </Badge>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-orange-800 transition-colors">
                      {album.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{album.description}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{album.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Image className="h-3 w-3" />
                        <span>{album.imageCount} photos</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* All Albums */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-4">All Photo Albums</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Explore our complete collection of school memories and events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => {
              const Icon = album.icon;
              return (
                <motion.div key={album.id}
                  className="transition-all duration-200 border-0 hover:bg-gray-300 shadow-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card key={album.id} className="group-hover:shadow-md bg-gradient-to-br from-primary/20 to-secondary/20 transition-all duration-100 border-0 hover:bg-gray-300 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex group-hover:shadow-md items-center space-x-2 mb-2">
                            <h3 className="font-bold text-orange-900 group-hover:text-primary-dark transition-colors">
                              {album.title}
                            </h3>
                            {album.featured && (
                              <Badge variant="secondary" className="text-xs">
                                New
                              </Badge>
                            )}
                          </div>

                          <p className="text-sm text-muted-foreground-200 mb-3 leading-relaxed">
                            {album.description}
                          </p>

                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{album.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Image className="h-3 w-3" />
                              <span>{album.imageCount} photos</span>
                            </div>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full mt-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                          >
                            View Album
                            <ArrowRight className="h-3 w-3 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <Card className="shadow-card border-4 bg-stone-100 hover:shadow-md hover:shadow-xl hover:scale-[1.00] transition-all duration-300 ease-in-out cursor-pointer  hover:bg-gradient-to-br from-primary/20 to-secondary/20 transition-all duration-300">
            <CardContent className="p-12">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Want to See More?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Follow us on social media for daily updates and behind-the-scenes moments
                  from school life. Don't miss out on the latest photos and videos!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gray-500 hover:bg-gray-800 text-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                    Follow on Tiktok
                  </Button>
                  <Button variant="outline" size="lg" className="border-gray-500 text-gray-900 hover:bg-gray-100  hover:text-gray-900 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                    Subscribe to Newsletter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
      <Footer />
    </div >
  );
}
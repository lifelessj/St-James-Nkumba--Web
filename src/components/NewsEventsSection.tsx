import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Trophy, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "Annual School Events",
    excerpt: "Join us for our exciting annual school events featuring various competitions and fun activities for all students.",
    date: "2025-08-15",
    time: "To be announced",
    category: "Events",
    featured: true,
    icon: Trophy
  },
  {
    id: 2,
    title: "Parent-Teacher Conference",
    excerpt: "Important meeting to discuss your child's academic progress and future development plans.",
    date: "2025-09-10",
    time: "To be confirmed",
    category: "Academic",
    featured: false,
    icon: Users
  },
  {
    id: 3,
    title: "New Computer Laboratory Opened and Swimming lessons",
    excerpt: "We're excited to announce the opening of our new state-of-the-art computer laboratory for enhanced learning. Weekly swimming lessons are also available for all students.",
    date: "2024",
    time: "Ongoing",
    category: "News",
    featured: true,
    icon: BookOpen
  }
];

export function NewsEventsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4  hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer hover:border-rounded-lg">
            Latest News & Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest happenings, announcements, and upcoming events at our school.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="group hover:shadow-card transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:scale-[1.05] transition-all duration-300 ease-in-out cursor-pointer hover:color-gray-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <Badge
                        variant={item.featured ? "default" : "secondary"}
                        className={item.featured ? "bg-secondary text-secondary-foreground" : ""}
                      >
                        {item.category}
                      </Badge>
                    </div>
                    {item.featured && (
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-red-700 hover:bg-red-800  hover:shadow-xl hover:scale-[1.05] transition-all duration-300 ease-in-out cursor-pointer">
            <Link to="/news">
              View All News & Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
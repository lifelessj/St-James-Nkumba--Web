import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Download, Bell, Trophy, BookOpen, Users, Megaphone } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import backgroundImage from "@/assets/news-events-hero.jpg";
import background from "@/assets/ps.jpg";
import { useEffect, useState } from "react";

export default function NewsEvents() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    // Initial page load animation
    setTimeout(() => setIsLoaded(true), 100);
  }, []);
  const newsArticles = [
    {
      id: 1,
      title: "Outstanding Performance in 2024 PLE Results",
      excerpt: "We are proud to announce that 95% of our P.7 students passed the Primary Leaving Examinations with flying colors.",
      date: "2024-01-15",
      category: "Academic",
      featured: true,
      readTime: "3 min read",
      icon: Trophy
    },
    {
      id: 2,
      title: "New Computer Laboratory Officially Opened",
      excerpt: "State-of-the-art computer lab with 30 computers and high-speed internet connection now available for all students.",
      date: "2024-01-10",
      category: "Infrastructure",
      featured: true,
      readTime: "2 min read",
      icon: BookOpen
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting Scheduled for February",
      excerpt: "Join us for our quarterly parent-teacher meeting to discuss your child's progress and academic development.",
      date: "2024-01-08",
      category: "Events",
      featured: false,
      readTime: "1 min read",
      icon: Users
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "To be announced",
      time: "To be announced",
      location: "School Sports Ground",
      description: "Annual athletics competition featuring track and field events, football, netball, and fun activities for all classes.",
      category: "Sports",
      urgent: false
    },
    {
      id: 2,
      title: "Exhibition 2025",
      date: "to be announced",
      time: "to be announced",
      location: "School Hall",
      description: "Students will showcase their innovative projects and experiments. Parents and guardians are welcome.",
      category: "Academic",
      urgent: true
    },
    {
      id: 3,
      title: "Parent-Teacher Conference",
      date: "to be announced",
      time: "to be announced",
      location: "Various Classrooms",
      description: "Individual meetings to discuss student progress, challenges, and development plans.",
      category: "Academic",
      urgent: true
    }
  ];

  const newsletters = [
    { title: "Term 1 Newsletter 2024", date: "January 2024", size: "2.4 MB" },
    { title: "End of Year Report 2023", date: "December 2023", size: "1.8 MB" },
    { title: "Term 3 Newsletter 2023", date: "October 2023", size: "2.1 MB" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="shadow-md  text-gray-800 py-16 md:py-24 lg:py-32 relative overflow-hidden muted-foreground"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}   >
        <div className="absolute inset-0 bg-black/20 z-0 opacity-100"></div>
        <div className={`container mx-auto px-4 text-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 z-10">News & Events</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto z-10 text-gray-700">
            Stay updated with the latest news, announcements, and upcoming events at our school
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Latest News */}
        <section className={`mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
          <div className="text-center mb-12">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Latest News</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">School News & Announcements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Important updates and exciting news from our school community
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Featured Article */}
            <div className="lg:col-span-2">
              <Card className="shadow-md bg-slate-100 border-0 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                  style={{ background: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}    >
                  <div className="text-center ">
                    <Trophy className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                    <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge className="bg-yellow-500 text-white">Academic</Badge>
                    <span className="text-sm text-muted-foreground">3 min read</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Outstanding Performance in 2024 PLE Results
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We are incredibly proud to announce that 95% of our Primary 7 students passed
                    the Primary Leaving Examinations with outstanding grades. This achievement
                    reflects our commitment to academic excellence and the dedication of our
                    teachers and students.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>January 15, 2025</span>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center  hover:shadow-xl hover:scale-[1.08] transition-all duration-300 ease-in-out cursor-pointer">
                      Read More <ArrowRight className="h-3 w-3 ml-2 hover:shadow-xl hover:scale-[2] transition-all duration-300 ease-in-out cursor-pointer" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* News List */}
            <div className="space-y-4">
              {newsArticles.slice(1).map((article) => {
                const Icon = article.icon;
                return (
                  <Card key={article.id} className="shadow-md border-gray-200 hover:shadow-card transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Badge variant="secondary" className="text-xs mb-2">
                            {article.category}
                          </Badge>
                          <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-tight">
                            {article.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{new Date(article.date).toLocaleDateString()}</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-accent text-accent-foreground mb-4">Upcoming</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">School Events Calendar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mark your calendars for these important upcoming events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="shadow-md border-gray-100 hover:shadow-glow transition-all duration-300 hover:shadow-xl hover:scale-[.99] transition-all duration-300 ease-in-out cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <Badge className={event.urgent ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"}>
                      {event.category}
                    </Badge>
                    {event.urgent && (
                      <div className="flex items-center space-x-1">
                        <Bell className="h-3 w-3 text-secondary" />
                        <span className="text-xs text-secondary font-medium">Urgent</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletters & Downloads */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Newsletters */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Megaphone className="h-5 w-5 text-primary" />
                  <span>School Newsletters</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Download our termly newsletters for detailed school updates
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {newsletters.map((newsletter, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{newsletter.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {newsletter.date} • {newsletter.size}
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="flex items-center hover:shadow-xl hover:scale-[.95] transition-all duration-300 ease-in-out cursor-pointer">
                      <Download className="h-3 w-3 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}

                <div className="pt-4 border-t">
                  <Button
                    variant="outline"
                    className="w-full hover:shadow-xl hover:scale-[.95] transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    View All Newsletters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Event Calendar */}
            <Card className="shadow-md bg-black/10 border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Academic Calendar</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  View the complete academic calendar for the current year
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-primary-light p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Current Term</h4>
                    <div className="text-sm space-y-1">
                      <div>Term 1: January 29 - April 26, 2024</div>
                      <div className="text-muted-foreground">Mid-term break: March 11-15</div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium">Term 2</div>
                      <div className="text-muted-foreground">May 6 - August 23, 2025</div>
                    </div>
                    <div>
                      <div className="font-medium">Term 3</div>
                      <div className="text-muted-foreground">September 9 - December 6, 2025</div>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-gray-900 hover:bg-blue-100 text-gray-100 hover:text-gray-900 transition-colors hover:shadow-xl hover:scale-[.95] transition-all duration-300 ease-in-out cursor-pointer">
                    <Download className="h-4 w-4 mr-2" />
                    Download Full Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
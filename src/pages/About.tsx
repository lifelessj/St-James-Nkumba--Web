import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Eye, Star, Users, BookOpen, Award, Cross, Flame, Hammer } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import schoolBuildingImage from "@/assets/school-building.jpg";

export default function About() {
  const values = [
    {
      icon: Cross,
      title: "Christian Values",
      description: "Rooted in faith, we teach students to live with integrity and compassion."
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Committed to providing quality education that prepares students for success."
    },
    {
      icon: Heart,
      title: "Care & Nurture",
      description: "Every child is valued and supported in their individual growth journey."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong partnerships between students, parents, and teachers."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-gradient-primary">
        <div className="absolute inset-0">
          <img
            src={schoolBuildingImage}
            alt="St. James Nkumba Primary School building"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-900">About Us</h1>
            <p className="text-xl opacity-90 text-gray-800">Our Story, Motto, Mission & Values</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* School History */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="bg-secondary text-secondary-foreground mb-4">Our History</Badge>
                <h2 className="text-3xl font-bold text-red-800 mb-4">Building Excellence Since 1999</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  St. James Nkumba Primary School was founded in 1999 with a vision to provide
                  quality Christian education to the children of Entebbe and surrounding communities.
                  Starting with just 9 students, we have grown into a thriving institution.
                </p>
                <p>
                  Over the years, we have maintained our commitment to academic excellence while
                  nurturing each child's spiritual, emotional, and social development. Our graduates
                  consistently perform well in national examinations and go on to prestigious
                  secondary schools.
                </p>
                <p>
                  Today, we proudly serve over 500 students from Primary 1 to Primary 7 including our Nursery section,
                  with both day and boarding facilities available to meet your diverse family needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={schoolBuildingImage}
                alt="St. James Nkumba Primary School"
                className="rounded-lg shadow-card w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground">
                <div className="text-center">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-orange-700">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-center">
                  To provide quality, holistic education that nurtures young minds through
                  Christian values, academic excellence, and character development, preparing
                  students to become responsible leaders in their communities.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-orange-700">Our Motto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-center">
                  with God All is Possible.
                  We strive to create a nurturing environment
                  where every child feels valued, supported, and inspired to reach their full potential.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-secondary text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-orange-700">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-center">
                  To be the leading primary school in Uganda, recognized for academic excellence,
                  strong Christian foundation, and producing well-rounded students who positively
                  impact society.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-accent text-accent-foreground mb-4">Our Values</Badge>
            <h2 className="text-3xl font-bold text-red-900 mb-4">What We Stand For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do and shape the character of our students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 border-0 shadow-soft">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Staff Section */}
        <section>
          <div className="text-center mb-12">
            <Badge className="bg-primary text-primary-foreground mb-4">Our Team</Badge>
            <h2 className="text-3xl font-bold text-red-900 mb-4">Dedicated Educators</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our qualified and experienced teachers are committed to nurturing each child's potential.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card border-0 text-center">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">

                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Qualified Teachers</h3>
                <p className="text-muted-foreground">All our teachers hold relevant degrees and teaching qualifications.</p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 text-center">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-800 text-2xl font-bold">
                  15+
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Years Experience</h3>
                <p className="text-muted-foreground">Our senior teachers bring over 15 years of educational experience.</p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 text-center">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Continuous Training</h3>
                <p className="text-muted-foreground">Regular professional development ensures modern teaching methods.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
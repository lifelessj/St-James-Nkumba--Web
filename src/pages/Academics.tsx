import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Trophy, Download, Calendar } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Library from "@/assets/Library.jpg";

export default function Academics() {
  const subjects = [
    "English Language", "Mathematics", "Science", "Social Studies",
    "Religious Education", "Sports", "Art & Craft", "Music"
  ];

  const classes = [
    { level: "Nursery", age: "Below 7 years", students: "over 40", focus: "Play-based learning and social skills" },
    { level: "P.1", age: "6-7 years", students: "over 39", focus: "Foundation skills, basic literacy and numeracy" },
    { level: "P.2", age: "7-8 years", students: "over 35", focus: "Building reading and writing skills" },
    { level: "P.3", age: "8-9 years", students: "over 50", focus: "Intermediate skills development" },
    { level: "P.4", age: "9-10 years", students: "over 56", focus: "Advanced reading and problem solving" },
    { level: "P.5", age: "10-11 years", students: "over 57", focus: "Preparation for upper primary" },
    { level: "P.6", age: "11-12 years", students: "over 60", focus: "Pre-examination preparation" },
    { level: "P.7", age: "12-13 years", students: "over 66", focus: "PLE examination preparation" }
  ];

  const schedule = [
    { time: "6:00 - 7:30 AM", activity: "Arrival & Morning Preparations" },
    { time: "7:30 - 8:50 AM", activity: "First Lesson" },
    { time: "8:50 - 10:10 AM", activity: "Second Lesson" },
    { time: "10:10 - 11:00 AM", activity: "Break Time" },
    { time: "11:00 - 12:00 PM", activity: "Third Lesson" },
    { time: "12:00 - 1:00 PM", activity: "Fourth Lesson" },
    { time: "1:00 - 2:00 PM", activity: "Lunch Break" },
    { time: "2:00 - 3:00 PM", activity: "Fifth Lesson" },
    { time: "3:00 - 4:00 PM", activity: "Sixth Lesson" },
    { time: "4:00 - 5:00 PM", activity: "Co-curricular Activities" },
    { time: "5:00 - 5:30 PM", activity: "clean-up & Departure" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-primary text-gray-800 py-16">
        <div className="absolute inset-0">
          <img
            src={Library}
            alt="St. James Nkumba Primary School building"
            className="px-4 py-12 w-full h-65 object-cover opacity-30  hover:shadow-xl hover:scale-[1.05] transition-all duration-300 ease-in-out cursor-pointer"
          />
        </div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Academics</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Comprehensive curriculum designed to build strong foundations and prepare students for success
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Curriculum Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Curriculum</Badge>
            <h2 className="text-3xl font-bold text-orange-900 mb-4">What We Teach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our curriculum follows the Uganda National Curriculum with enhanced Christian education and life skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {subjects.map((subject, index) => (
              <Card key={index} className="shadow-md bg-gray-300 border-0 hover:shadow-card transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{subject}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-accent-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-orange-900 mb-3">Special Programs</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                <Trophy className="h-4 w-4 text-accent" />
                <span>Debate & Public Speaking</span>
              </div>
              <div className="flex items-center space-x-2 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                <Trophy className="h-4 w-4 text-accent" />
                <span>Swimming lessons</span>
              </div>
              <div className="flex items-center space-x-2 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                <Trophy className="h-4 w-4 text-accent" />
                <span>Computer Literacy</span>
              </div>
            </div>
          </div>
        </section>

        {/* Class Structure */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-400 text-white mb-4">Classes</Badge>
            <h2 className="text-3xl font-bold text-orange-900 mb-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">Class Structure (P.1 - P.7)</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
              Age-appropriate learning with small class sizes for personalized attention.
            </p>
          </div>

          <div className="grid gap-4">
            {classes.map((classInfo, index) => (
              <Card key={index} className="bg-green-100 shadow-md border-2 hover:2xl hover:shadow-card transition-all duration-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="text-center md:text-left">
                      <div className="text-2xl font-bold text-red-900">{classInfo.level}</div>
                      <div className="text-sm text-muted-foreground">{classInfo.age}</div>
                    </div>
                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Users className="h-4 w-4 text-accent" />
                        <span className="font-medium">{classInfo.students} students</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-700">{classInfo.focus}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* School Schedule */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <Badge className="bg-accent text-accent-foreground mb-4">Schedule</Badge>
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Daily Schedule</h2>
                <p className="text-lg text-muted-foreground">
                  Structured day promoting learning, spiritual growth, and character development.
                </p>
              </div>

              <Card className="shadow-md bg-blue-100 border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Monday - Friday</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-md">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-white last:border-0 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer bg-blue-200 rounded-md">
                      <span className="font-medium text-lg font-semibold">{item.time}</span>
                      <span className="text-sm text-foreground">{item.activity}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Assessment */}
              <Card className="shadow-md border-0 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer bg-gray-100">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">Assessment & Evaluation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <div className="font-medium">Continuous Assessment</div>
                        <div className="text-sm text-muted-foreground">Regular tests and assignments</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                      <div>
                        <div className="font-medium">Termly Examinations</div>
                        <div className="text-sm text-muted-foreground">Comprehensive end-of-term exams</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <div>
                        <div className="font-medium">Progress Reports</div>
                        <div className="text-sm text-muted-foreground">Detailed feedback to parents</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Academic Calendar */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Academic Year</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium">Term 1: January - April</div>
                      <div className="text-sm text-muted-foreground">New academic year begins</div>
                    </div>
                    <div>
                      <div className="font-medium">Term 2: May - August</div>
                      <div className="text-sm text-muted-foreground">Mid-year assessments</div>
                    </div>
                    <div>
                      <div className="font-medium">Term 3: September - December</div>
                      <div className="text-sm text-muted-foreground">Final exams and promotions</div>
                    </div>
                  </div>

                  <Button className=" bg-gray-200 w-full mt-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Academic Calendar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
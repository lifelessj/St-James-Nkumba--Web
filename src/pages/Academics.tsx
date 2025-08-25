import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Trophy, Download, Calendar, Star } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Library from "@/assets/Library.jpg";
import { useState, useEffect } from "react";

export default function Academics() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  useEffect(() => {
    // Initial page load animation
    setTimeout(() => setIsLoaded(true), 100);

    // Simulate scroll-triggered animations
    const sections = ['hero', 'curriculum', 'classes', 'schedule'];
    sections.forEach((section, index) => {
      setTimeout(() => {
        setVisibleSections(prev => ({ ...prev, [section]: true }));
      }, 300 + index * 200);
    });
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section with enhanced animations */}
      <section className={`relative text-gray-900 py-20 overflow-hidden transition-all duration-1000 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0">
          <img
            src={Library}
            alt="kids in library"
            className="w-full h-full object-cover opacity-40 hover:opacity-60 hover:scale-105 transition-all duration-700 ease-in-out"
          />
        </div>

        {/* Floating elements for visual appeal */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-300 bg-opacity-20 rounded-full animate-ping"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}>
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
              <Star className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium">Excellence in Education</span>
              <Star className="h-5 w-5 text-yellow-300" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-black">
              Our Academics
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive curriculum designed to build strong foundations and prepare students for success
            </p>
            <div className="mt-8 flex justify-center space-x-4">
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        {/* Curriculum Overview with staggered animations */}
        <section className={`mb-20 transition-all duration-1000 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
          <div className="text-center mb-16">
            <div className="inline-block">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-6 px-6 py-2 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Our Curriculum
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-900 to-red-800 bg-clip-text text-transparent mb-6">
              What We Teach
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our curriculum follows the Uganda National Curriculum with enhanced Christian education and life skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className={`group shadow-lg bg-stone-900 border-white hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer
                  }`}
                style={{ animationDelay: `${index * 100}ms`, animationDuration: '1s', animationFillMode: 'both' }}
              >
                <CardContent className="p-4 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white transition-all duration-300">
                    <BookOpen className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-lg text-white">{subject}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center">
              <Trophy className="h-6 w-6 mr-3 text-yellow-500" />
              Special Programs
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Debate & Public Speaking",
                "Swimming lessons",
                "Computer Literacy"
              ].map((program, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <Trophy className="h-5 w-5 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300" />
                  <span className="font-medium text-gray-800 group-hover:text-gray-900">{program}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Class Structure with enhanced design */}
        <section className={`mb-20 transition-all duration-1000 delay-200'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white mb-6 px-6 py-2 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Our Classes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-900 to-red-800 bg-clip-text text-transparent mb-6">
              Class Structure (P.1 - P.7)
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Age-appropriate learning with small class sizes for personalized attention.
            </p>
          </div>

          <div className="grid gap-4">
            {classes.map((classInfo, index) => (
              <Card
                key={index}
                className={`bg-green-100 shadow-md border-2 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer 'animate-slide-in' : ''
                  }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
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

        {/* School Schedule with modern design */}
        <section className={`transition-all duration-1000 delay-400'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-12">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-6 px-6 py-2 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Daily Schedule
                </Badge>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-800 to-red-700 bg-clip-text text-transparent mb-6">
                  Our Day Structure
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mb-6 rounded-full"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
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
                    <div key={index} className="flex justify-between items-center py-2 border-b border-blue last:border-0 hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-blue-200 rounded-md">
                      <span className="font-medium text-sm font-semibold">{item.time}</span>
                      <span className="text-sm text-foreground">{item.activity}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              {/* Assessment Card */}
              <Card className="shadow-md bg-gray-100 border-0 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
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

              {/* Academic Calendar Card */}
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
                  <a
                    href="/academiccalendar3.docx"
                    download
                    className="inline-flex items-center justify-center bg-gray-200 hover:bg-gray-600 hover:text-white w-full mt-4 px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 clickmotion:scale-[1.02] ease-in-out"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Academic Calendar
                  </a>
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
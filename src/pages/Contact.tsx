import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, MessageCircle, Instagram } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Tiktok from "../assets/Tiktok.svg";
import backgroundImage from "@/assets/happykids.jpg"

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Enhanced Hero Section */}
      <section className="relative text-white py-17 md:py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(49, 47, 47, 0.5)'
        }}>

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-gray-800/30 to-black/50"></div>

        {/* Animated floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse backdrop-blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-orange-300/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-green-400/15 rounded-full animate-pulse delay-300"></div>

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Main heading with enhanced styling */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white relative">
            <span className="bg-gradient-to-r from-white via-sky-300 to-white bg-clip-text text-transparent drop-shadow-lg">
              Contact Us
            </span>
          </h1>

          {/* Enhanced description */}
          <p className="text-xl font-muted  max-w-2xl mx-auto text-gray-100 leading-relaxed drop-shadow-md mb-8">
            Get in touch with us. We're here to help and answer any questions you may have.
          </p>

          {/* Call-to-action indicators */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Quick Responses</span>
            </div>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-white/20 rounded-tl-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-white/20 rounded-tr-full"></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-md bg-stone-200 border-0 ">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-900">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  We'll respond to your message within 24 hours during school days.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+256 700 123 456" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this about?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={6}
                  />
                </div>

                <Button className="w-full bg-gray-900 hover:bg-blue-100 text-gray-100 hover:text-gray-900 transition-colors" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Main Contact Info */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <div className="font-semibold text-lg">School Address</div>
                    <div className="text-muted-foreground leading-relaxed">
                      St. James Nkumba Primary School<br />
                      Lyamutundwe, Mpala-Entebbe<br />
                      Wakiso District, Uganda<br />
                      P.O. Box 86, Abaita Ababiri
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold text-lg">Phone Numbers</div>
                    <div className="text-muted-foreground">
                      <div>Main Office: +256 705 339 746</div>
                      <div>Headteacher: +256 702 997 656</div>
                      <div>Admissions: +256 772 327 842</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold text-lg">WhatsApp</div>
                    <div className="text-muted-foreground">+256 705 339 746</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold text-lg">Email Addresses</div>
                    <div className="text-muted-foreground">
                      <div>stjamesnkumba@gmail.com</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="shadow-md  shadow-gray-500 border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Office Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday</span>
                    <span className="text-muted-foreground">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    <strong>Note:</strong> During school holidays, office hours may vary.
                    Please call ahead to confirm availability.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-card border-0 ">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 ">
                  <a
                    href="https://www.instagram.com/stjamesnkumbaprimarysch_mpala?igsh=bWJvYWwxamZ3cGEz"
                    className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors hover:shadow-xl hover:scale-[0.98] transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    <Instagram className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-medium">Instagram</div>
                      <div className="text-sm text-muted-foreground">@stjamesnkumbaprimarysch_mpala</div>
                    </div>
                  </a>
                  <a
                    href="https://www.tiktok.com/@st.james_pri_sch_mpala?_t=ZM-8ya2WRML8pq&_r=1"
                    className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors hover:shadow-xl hover:scale-[0.98] transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    <img src={Tiktok} alt="Tiktok" className="h-4 w-4" />
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-medium">Tiktok</div>
                        <div className="text-sm text-muted-foreground">@st.james_pri_sch_mpala</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="mt-4 p-4 bg-secondary-light rounded-lg">
                  <div className="text-sm text-gray-700">
                    Stay connected with us on social media for the latest updates,
                    photos from school events, and important announcements.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 text-center">Find Us on the Map</CardTitle>
              <p className="text-muted-foreground text-center">
                Located in the heart of Entebbe, easily accessible by public and private transport
              </p>
            </CardHeader>
            <CardContent>
              <iframe
                className="bg-muted h-64 w-full md:h-96 rounded-lg flex items-center justify-center hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.24352171167!2d32.494534051577325!3d0.11064839821219981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d858b15e104f3%3A0x830c2e9d2217bd55!2sSt.%20James%20Nkumba%20Nursery%20and%20Primary%20School%20Mpala!5e0!3m2!1sen!2sug!4v1754550415175!5m2!1sen!2sug"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="St. James Nkumba Primary School Map"
              />

              <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-primary-light rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                  <div className="font-semibold text-primary">By Car</div>
                  <div className="text-muted-foreground">Ample parking available on campus</div>
                </div>
                <div className="text-center p-3 bg-secondary-light rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                  <div className="font-semibold text-primary">By Taxi/Bus</div>
                  <div className="text-muted-foreground">Regular transport to Mpala-Entebbe, Around Keba Express Hotel</div>
                </div>
                <div className="text-center p-3 bg-accent-light rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                  <div className="font-semibold text-primary">Walking Distance</div>
                  <div className="text-muted-foreground">Safe pedestrian access from main road</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
      <Footer />
    </div>
  );
}
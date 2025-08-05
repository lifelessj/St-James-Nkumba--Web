import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, MessageCircle } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get in touch with us. We're here to help and answer any questions you may have.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
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
                
                <Button className="w-full" size="lg">
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
                      St. James Nkumba Primary School<br/>
                      Nkumba Road, Entebbe<br/>
                      Wakiso District, Uganda<br/>
                      P.O. Box 123, Entebbe
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold text-lg">Phone Numbers</div>
                    <div className="text-muted-foreground">
                      <div>Main Office: +256 700 123 456</div>
                      <div>Headteacher: +256 701 234 567</div>
                      <div>Admissions: +256 702 345 678</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold text-lg">WhatsApp</div>
                    <div className="text-muted-foreground">+256 700 123 456</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold text-lg">Email Addresses</div>
                    <div className="text-muted-foreground">
                      <div>General: info@stjamesnkumba.ac.ug</div>
                      <div>Admissions: admissions@stjamesnkumba.ac.ug</div>
                      <div>Headteacher: head@stjamesnkumba.ac.ug</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="shadow-card border-0">
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
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-medium">Facebook</div>
                      <div className="text-sm text-muted-foreground">@stjamesnkumba</div>
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
              <CardTitle className="text-2xl text-primary text-center">Find Us on the Map</CardTitle>
              <p className="text-muted-foreground text-center">
                Located in the heart of Entebbe, easily accessible by public and private transport
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-muted h-64 md:h-96 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <div className="text-lg font-medium">Interactive Map</div>
                  <div className="text-sm">Google Maps integration would be placed here</div>
                  <div className="text-xs mt-2">Nkumba Road, Entebbe, Wakiso District</div>
                </div>
              </div>
              
              <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-primary-light rounded-lg">
                  <div className="font-semibold text-primary">By Car</div>
                  <div className="text-muted-foreground">Ample parking available on campus</div>
                </div>
                <div className="text-center p-3 bg-secondary-light rounded-lg">
                  <div className="font-semibold text-primary">By Taxi/Bus</div>
                  <div className="text-muted-foreground">Regular transport to Entebbe town</div>
                </div>
                <div className="text-center p-3 bg-accent-light rounded-lg">
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
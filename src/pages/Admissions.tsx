import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Phone, Mail, MapPin, CheckCircle, DollarSign, Calendar, FileText } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Admissions() {
  const fees = [
    { class: "Nursery", dayFee: "500,000-600,000", boardingFee: "850,000" },
    { class: "P.1 - P.4", dayFee: "600,000", boardingFee: "900,000" },
    { class: "P.5 - P.6", dayFee: "700,000", boardingFee: "1,000,000" },
    { class: "P.7", dayFee: "N/A", boardingFee: "1,100,000" }
  ];

  const requirements = [
    "Birth certificate or baptism card",
    "Previous school report (if transferring)",
    "Passport-size photographs (4 copies)",
    "Medical report from certified clinic",
    "Parent/Guardian identification"
  ];

  const process = [
    { step: 1, title: "Application Form", description: "Complete and submit application form with required documents" },
    { step: 2, title: "Assessment", description: "Child assessment for class placement (P.2 and above)" },
    { step: 3, title: "Interview", description: "Parent/guardian interview with school administration" },
    { step: 4, title: "Admission Decision", description: "Receive admission decision within 5 working days" },
    { step: 5, title: "Fee Payment", description: "Pay admission and first term fees to secure place" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-primary text-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join our school family and give your child the foundation for lifelong success
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-3">
        {/* Admission Process */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Process</Badge>
            <h2 className="text-3xl font-bold text-orange-500 mb-4">Admission Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple steps to secure your child's place at St. James Nkumba Primary School
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {process.map((item, index) => (
              <Card key={index} className="text-center shadow-soft border-0 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Requirements & Fees */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div>
              <div className="mb-8">
                <Badge className="bg-accent text-accent-foreground mb-4">Requirements</Badge>
                <h2 className="text-3xl font-bold text-orange-500 mb-4">Required Documents</h2>
                <p className="text-lg text-muted-foreground">
                  Please prepare these documents for a smooth admission process.
                </p>
              </div>

              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                        <span className="text-gray-700">{requirement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-primary-light rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-primary">Application Form</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Download our application form and fill it out completely before submission.
                    </p>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Application Form
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fees Structure */}
            <div>
              <div className="mb-8">
                <Badge className="bg-primary text-primary-foreground mb-4">Fees</Badge>
                <h2 className="text-3xl font-bold text-orange-500 mb-4">School Fees</h2>
                <p className="text-lg text-muted-foreground">
                  Affordable fees with payment plans available. All amounts in UGX per term.
                </p>
              </div>

              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span>Fee Structure (Per Term)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {fees.map((fee, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="font-bold text-red-900 mb-2">{fee.class}</div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Day Scholar:</span>
                            <div className="font-semibold">UGX {fee.dayFee}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Boarding:</span>
                            <div className="font-semibold">UGX {fee.boardingFee}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-secondary-light rounded-lg">
                    <h4 className="font-bold text-red-900 mb-2">Additional Fees</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Registration Fee:</span>
                        <span className="font-medium">UGX 50,000 (one-time)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Computer Lessons:</span>
                        <span className="font-medium">UGX 100,000 (per term)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Swimming Lessons:</span>
                        <span className="font-medium">UGX 50,000 (per term)</span>
                      </div>
                      <div className="flex justify-between">
                        <span> UNIFORMS:</span>
                        <p> NUR </p>
                        <span className="font-medium">UGX 150,000-340,00 (estimate)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>       </span>
                        <p className="text-center"> P.1 - P.4</p>
                        <span className="font-medium">UGX 150,000-340,000 (estimate)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>        </span>
                        <p className="text-center mr-center"> P.5 - P.7</p>
                        <span className="font-medium">UGX 150,000-340,000 (estimate)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Inquiry Form */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-700">Make an Inquiry</CardTitle>
                <p className="text-muted-foreground">
                  Have questions? Send us a message and we'll get back to you within 24 hours.
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
                  <Label htmlFor="childClass">Class of Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="p1">Primary 1</SelectItem>
                      <SelectItem value="p2">Primary 2</SelectItem>
                      <SelectItem value="p3">Primary 3</SelectItem>
                      <SelectItem value="p4">Primary 4</SelectItem>
                      <SelectItem value="p5">Primary 5</SelectItem>
                      <SelectItem value="p6">Primary 6</SelectItem>
                      <SelectItem value="p7">Primary 7</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your child and any questions you have..."
                    rows={4}
                  />
                </div>

                <Button className="w-full" size="lg">
                  Send Inquiry
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-800">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">School Address</div>
                      <div className="text-muted-foreground">
                        Lyamutundwe, Mpala-Entebbe<br />
                        Wakiso District, Uganda
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-muted-foreground">+256 702997656</div>
                      <div className="text-muted-foreground">+256 772327842</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">stjamesnkumba@gmail.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Admission Timeline</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-orange-800">Term 1 Intake</div>
                      <div className="text-sm text-muted-foreground">Applications: October - December</div>
                      <div className="text-sm text-muted-foreground">Start Date: January</div>
                    </div>
                    <div>
                      <div className="font-semibold text-orange-800">Term 2 Intake</div>
                      <div className="text-sm text-muted-foreground">Applications: March - April</div>
                      <div className="text-sm text-muted-foreground">Start Date: May</div>
                    </div>
                    <div>
                      <div className="font-semibold text-orange-800">Term 3 Intake</div>
                      <div className="text-sm text-muted-foreground">Limited spaces available</div>
                      <div className="text-sm text-muted-foreground">Start Date: September</div>
                    </div>
                  </div>
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
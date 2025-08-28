import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import directorImage from "@/assets/director.jpg";

export function DirectorMessage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200); // Slight delay difference for staggered animation

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-16 bg-peaceful">
            <div className="container mx-auto px-4">
                <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    <Card className="shadow-card border-0 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                        <CardContent className="p-0">
                            <div className="grid md:grid-cols-3 gap-0">
                                {/* Image */}
                                <div className="relative">
                                    <img
                                        src={directorImage}
                                        alt="Director of St. James Nkumba Primary School"
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-2 p-8 md:p-12">
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-3">
                                            <Quote className="h-8 w-8 text-secondary hover:shadow-xl hover:scale-[1.5] transition-all duration-300 ease-in-out cursor-pointer" />
                                            <h2 className="text-2xl md:text-3xl font-bold text-red-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                                                Director's Message
                                            </h2>
                                        </div>

                                        <blockquote className="text-gray-700 leading-relaxed space-y-4">
                                            <p>
                                                As Director of St. James Nkumba Primary School, I am proud to lead
                                                an institution that has been a beacon of educational excellence in our
                                                community for years.
                                            </p>

                                            <p>
                                                Our vision extends beyond academic achievement to encompass holistic
                                                development that prepares our students to be responsible global citizens.
                                                We invest in modern teaching methodologies and infrastructure to ensure
                                                our children receive world-class education.
                                            </p>

                                            <p>
                                                I invite you to join our school family, where every child's potential
                                                is recognized, nurtured, and developed to its fullest. Together, we
                                                build tomorrow's leaders with wisdom, knowledge, and Christian values.
                                            </p>
                                        </blockquote>

                                        <div className="pt-4 border-t">
                                            <div className="font-semibold text-lg text-red-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                                                Ms. Namirembe Imelda
                                            </div>
                                            <div className="text-muted-foreground">Director</div>
                                            <div className="text-sm text-muted-foreground mt-1">
                                                St. James Nkumba Primary School
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
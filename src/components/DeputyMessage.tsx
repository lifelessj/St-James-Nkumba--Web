import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import deputyImage from "@/assets/deputy.jpg";

export function DeputyMessage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Different delay for staggered animation

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
                                        src={deputyImage}
                                        alt="Deputy Headteacher of St. James Nkumba Primary School"
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
                                                Deputy's Message
                                            </h2>
                                        </div>

                                        <blockquote className="text-gray-700 leading-relaxed space-y-4">
                                            <p>
                                                As Deputy Headteacher, I work closely with our dedicated staff to ensure
                                                that every aspect of your child's educational journey is carefully planned
                                                and executed with excellence.
                                            </p>

                                            <p>
                                                Our commitment to maintaining high academic standards while fostering
                                                creativity, critical thinking, and moral development sets us apart.
                                                We believe in creating an environment where children feel safe, valued,
                                                and motivated to achieve their best.
                                            </p>

                                            <p>
                                                I look forward to working with you as partners in your child's education,
                                                ensuring they develop into confident, capable, and compassionate individuals
                                                ready to make a positive impact in the world.
                                            </p>
                                        </blockquote>

                                        <div className="pt-4 border-t">
                                            <div className="font-semibold text-lg text-red-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
                                                Mr. Ssemujju Moses
                                            </div>
                                            <div className="text-muted-foreground">Deputy Headteacher</div>
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
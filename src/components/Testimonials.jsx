import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Assuming shadcn/ui carousel is available
import { Card, CardContent } from "@/components/ui/card"; // For styling individual testimonials

// Placeholder data - Replace with actual image paths
const testimonialsData = [
  {
    id: 1,
    name: "Kwame B.",
    title: "Digital Marketing Lead",
    quote: "Working with Francis Dugbe transformed the way we connect with our audience. Their copy didn’t just sound good—it converted. Our email open rates jumped, and our landing pages finally started performing.",
    imageUrl: "/avatars/avatar2.jpg", // Placeholder path - Put actual images in /public/avatars/
  },
  {
    id: 2,
    name: "Sandra K.",
    title: "CEO of Elevate Gear",
    quote: "Our conversions doubled after Francis restructured our email campaigns. They know how to speak to your audience in a way that feels authentic and drives action.",
    imageUrl: "/avatars/avatar3.jpg", // Placeholder path
  },

  {
    id: 2,
    name: "Linda Osei",
    title: "Marketing Director at NovaBrands",
    quote: "Working with Francis was a game-changer. His sales strategy helped us tap into new markets we had struggled to reach for years.",
    imageUrl: "/avatars/avatar 1.jpg", // Placeholder path
  },

  
  // Add more testimonials if needed
];

const Testimonials = () => {
  return (
    <section id="testimonial" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">What People Think About Me?</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">Testimonials</h2>

        <Carousel 
          opts={{ align: "start", loop: true }} 
          className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2 md:p-4">
                <Card className="h-full flex flex-col bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center flex-grow">
                    <img 
                      src={testimonial.imageUrl} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full mb-4 border-2 border-blue-500 dark:border-blue-400 object-cover"
                      onError={(e) => { e.target.src = '/placeholder-avatar.png'; /* Fallback avatar */ }}
                    />
                    <p className="text-gray-600 dark:text-gray-300 italic mb-4 text-sm md:text-base flex-grow">
                      “{testimonial.quote}”
                    </p>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex absolute left-[-50px] top-1/2 -translate-y-1/2" />
          <CarouselNext className="hidden sm:flex absolute right-[-50px] top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;


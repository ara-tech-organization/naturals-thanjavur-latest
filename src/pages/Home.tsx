import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scissors, Heart, Sparkles, Users, Star, Award, Clock, MapPin, Phone, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import HeroCarousel from '@/components/HeroCarousel';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Helmet } from "react-helmet";
import { useState, useRef } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100
    });
    AOS.refresh();
  }, []);

const services = [
  {
    name: "Hair Styling",
    desc: "Professional cuts and styling",
    image: "./images/hairstyle.jpg",
  },
  {
    name: "Bridal Services",
    desc: "Complete bridal makeover",
    image: "./images/makeup.jpeg",
  },
  {
    name: "Skin Care",
    desc: "Advanced facial services",
    image: "./images/skincare.jpeg",
  }
];

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const isAtStart = activeIndex === 0;
  const isAtEnd = swiperRef.current
    ? activeIndex === swiperRef.current.slides.length - swiperRef.current.params.slidesPerView
    : false;


  // Main testimonials
  const testimonials = [
    {
      name: "Diya",
      service: "Eyebrow Threading",
      rating: 5,
      text: "I have visited this branch and taken the service of hair setting and eyebrow from Abitha. Her hospitality and professionalism was too good.. I was pregnant too and the way she helped was too good. I would highly recommend anyone to take any service From Abitha from this branch for a professional touch. Thanks again for your service."
    },
    {
      name: "Gaja Lakshmi",
      service: "Nail Art & Manicure",
      rating: 5,
      text: "Great experience at Naturals Salon! Keerthana did an amazing job with my gel polish. My nails look perfect—highly recommend her!.Thank you so much♥️"
    },
    {
      name: "Dharani Devi.J",
      service: "Hospitality & Service",
      rating: 5,
      text: "I'm really overwhelmed with my experience at Naturals,Thanjavur. The place was clean and had good ambience. The staffs were polite and quick in their work. Didn't allow the customers to wait. Service was good."
    }
  ];

  // Additional testimonials
  const extraTestimonials = [
    {
      name: "Bhuvani mahi",
      service: "Haircut Service",
      rating: 5,
      text: "I recently got a haircut, and I’m really happy with how it turned out! The stylist (Priya) was attentive and listened to what I wanted. They did a great job with the cut, and I love the way it frames my face. The atmosphere in the salon was also nice and relaxing. Overall, I had a great experience and would definitely recommend this place to others!"
    },
    {
      name: "MURALIHARAN K",
      service: "Hair & Facial Service",
      rating: 4,
      text: "I visited the Naturals branch at Arulananthar on November 18 and 19, 2024, for a haircut and facial by Naveen. His work was absolutely fantastic! The haircut was perfect, and the facial left my skin feeling fresh and rejuvenated. Naveen's professionalism, attention to detail, and friendly attitude made the experience even better. Highly recommend his services at this branch!"
    }
  ];

  // Combine all
  const allTestimonials = [...testimonials, ...extraTestimonials];

  const stats = [
    { number: 10000, label: "Happy Customers", suffix: "+" },
    { number: 15, label: "Years Experience", suffix: "+" },
    { number: 100, label: "Bridal Works", suffix: "+" },
    { number: 25, label: "Expert Stylists", suffix: "+" }
  ];

  return (

    <div className="min-h-screen">
      <Helmet>
        <title>Naturals Salon Arulanthar Nagar | Best Beauty & Bridal Services in Thanjavur</title>
        <meta
          name="description"
          content="Naturals Arulanthar Nagar is Thanjavur’s trusted salon for premium hair, skin, spa, and bridal services. Book appointments for luxury beauty treatments today!"
        />
        <meta
          name="keywords"
          content="Naturals Arulanthar Nagar, Beauty Salon Thanjavur, Bridal Makeup Thanjavur, Hair Spa Thanjavur, Skin Care Services, Best Salon in Thanjavur"
        />
        <meta name="author" content="Naturals Arulanthar Nagar" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Naturals Salon Arulanthar Nagar – Thanjavur's Premium Beauty Destination" />
        <meta
          property="og:description"
          content="Discover luxurious beauty and bridal services at Naturals Arulanthar Nagar. Trusted by 10,000+ happy clients in Thanjavur."
        />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://naturals-thanjavur.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Naturals Salon Arulanthar Nagar – Best in Thanjavur" />
        <meta
          name="twitter:description"
          content="Premium salon in Thanjavur offering hair, skin, spa & bridal packages. Visit Naturals Arulanthar Nagar today!"
        />
        <meta name="twitter:image" content="https://example.com/og-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://naturals-thanjavur.in/" />
      </Helmet>
      {/* Hero Carousel Section */}
      <HeroCarousel />
      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-forum text-5xl font-bold text-gray-900 mb-6">Welcome to Naturals Thanjavur</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the finest in hair care, skincare, and bridal beauty at Thanjavur’s premier salon.
              With over 15 years of expertise, we're your trusted partner
              in looking and feeling your absolute best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer h-[320px] group bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Spotlight Overlay on hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-all duration-500" />

                {/* Centered Text */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className="font-forum text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-white text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#7f4899] to-[#b388c1] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">

            {/* Left Image - No bottom gap */}
            <div className="flex items-stretch" data-aos="fade-right">
              <img
                src="./images/stats.png"
                alt="Our Success"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-12 text-center md:text-left" data-aos="fade-up">
                <h2 className="font-forum text-4xl font-bold mb-4">
                  Our Success in Numbers
                </h2>
                <p className="text-xl text-purple-100 max-w-md">
                  Trusted by thousands of customers across Thanjavur
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => {
                  const { ref, inView } = useInView({
                    triggerOnce: true,
                    threshold: 0.5,
                  });

                  return (
                    <div
                      key={index}
                      ref={ref}
                      className="text-center md:text-left"
                      data-aos="fade-up"
                      data-aos-delay={index * 200}
                    >
                      <div className="text-4xl md:text-5xl font-bold mb-2">
                        {inView && (
                          <CountUp
                            start={0}
                            end={stat.number}
                            duration={2}
                            suffix={stat.suffix || ''}
                          />
                        )}
                      </div>
                      <div className="text-lg text-purple-100">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-forum text-4xl font-bold text-gray-900 mb-6">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty and bridal services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Women's Beauty Services",
                image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                services: ["Hair Care & Styling", "Bridal Packages", "Facial Services"],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Men's Grooming Services",
                image: "./images/mens_grooming.jpeg",
                services: ["Haircut & Styling", "Beard Grooming", "Facial Care"],
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "Special Packages",
                image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                services: ["Bridal Bliss", "Glow Up Package", "Family Care"],
                color: "from-green-500 to-teal-500"
              }
            ].map((category, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                data-aos="slide-up"
                data-aos-delay={index * 200}
              >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <h3 className="font-forum text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-gray-600">
                        <ChevronRight className="h-4 w-4 text-primary mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="w-full"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <Button
                      className="w-full gradient-bg text-white hover:bg-gradient-to-br hover:from-[#6d3d88] hover:to-[#5c2e70] transition-colors duration-300"
                    >
                      View Services
                    </Button>

                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Flip Card Section */}
      <section
        className="py-16 bg-fixed bg-center bg-cover text-white relative"
        style={{
          backgroundImage: "url('./images/testimonial.png')",
        }}
      >
        <div className="py-16 px-4 md:px-8 relative z-10">
          <div className="container mx-auto text-center mb-12" data-aos="fade-up">
            <h2 className="font-forum text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Real experiences from our valued customers
            </p>
          </div>

          <div className="relative">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="px-8"
            >
              {allTestimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="bg-white/70 backdrop-blur-lg text-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl h-full flex flex-col justify-between"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex justify-center mb-4 text-[#7f4899]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="italic text-lg mb-4">"{testimonial.text}"</p>
                    <div className="mt-auto">
                      <h3 className="font-forum text-xl text-[#7f4899] font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-purple-700">{testimonial.service}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Conditional Arrows */}
            <button
              className={`custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[#7f4899] hover:bg-[#6d3a85] text-white p-3 rounded-full shadow-lg transition-opacity ${isAtStart ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className={`custom-next absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-[#7f4899] hover:bg-[#6d3a85] text-white p-3 rounded-full shadow-lg transition-opacity ${isAtEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-forum text-4xl font-bold text-gray-900 mb-6">Visit Our Main Branch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conveniently located at Arulanthar Nagar, Thanjavur.
            </p>
          </div>

          {/* Branch Info Card */}
          <div
            className="max-w-2xl mx-auto p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group mb-12"
            data-aos="zoom-in"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-forum text-xl font-bold text-gray-900">Naturals</h3>
                <p className="text-gray-600">Arulanthar Nagar</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">1st Floor, Philomena Shop, 2851/14, No 2, opposite Vinodhagan Hospital, Arulanthar Nagar, Thanjavur, Tamil Nadu 613007</p>
            {/* <Button size="sm" className="gradient-bg text-white hover:opacity-90">
              Get Directions
            </Button> */}
          </div>

          {/* Full Width Map */}
          <div className="w-full">
            <iframe
              className="w-full h-[400px] rounded-xl shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4931029823315!2d79.13116237596353!3d10.773494531878411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab9b069029cff%3A0x58f9279539ef68c4!2sNaturals%20unisex%20salon%20-%20Arulanthar%20nagar!5e0!3m2!1sen!2sin!4v1751542614741!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-[#7f4899] to-[#b388c1] text-white overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 " />

        <div className="relative container mx-auto px-6 md:px-12 z-10">
          <div className="grid md:grid-cols-2 items-center gap-12" data-aos="fade-up">

            {/* Left Content */}
            <div className="text-center md:text-left space-y-6">
              <h2 className="font-forum text-5xl font-bold leading-tight">
                Ready to Transform Your Look?
              </h2>
              <p className="text-xl text-[#f4e3ff] max-w-xl">
                Discover the best in hair, skin, and bridal beauty at Naturals Thanjavur. Book your appointment and experience the most loved salon in the city.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-white text-[#7f4899] hover:bg-[#f4e3ff] font-semibold px-8 py-4 text-lg shadow-lg"
                >
                  Book Appointment Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-[#7f4899] hover:bg-white hover:text-[#7f4899] font-semibold px-8 py-4 text-lg flex items-center gap-2 shadow-lg"
                >
                  <Phone className="h-5 w-5" />
                  Call: +91 90870 00049
                </Button>
              </div> */}
            </div>

            {/* Right Decorative Image */}
            <div className="md:block">
              <img
                src="./images/services_women_v2.png"
                alt="CTA Model"
                className="w-full max-w-md mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

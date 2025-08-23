import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Star,
  Users,
  Award,
  Scissors,
  Sparkles,
  Heart,
  Zap,
  Phone,
} from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const womenServices = [
    {
      name: "Hair Care & Styling",
      description:
        "Professional hair treatments, cuts, coloring, and styling for all hair types",
      // price: "₹500 - ₹3000",
      // duration: "1-3 hours",
      icon: Scissors,
      popular: true,
      backgroundImage:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Bridal Packages",
      description:
        "Complete bridal makeover including hair, makeup, and pre-bridal services",
      // price: "₹8000 - ₹25000",
      // duration: "4-6 hours",
      icon: Heart,
      popular: true,
      backgroundImage:
        "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Facial & Skin Care",
      description:
        "Deep cleansing facials, anti-aging services, De-Tan and skin rejuvenation",
      // price: "₹800 - ₹2500",
      // duration: "45-90 minutes",
      icon: Sparkles,
      popular: false,
      backgroundImage:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Reflexology",
      description:
        "Targeted reflexology therapy for neck, shoulder, hand, and feet to relieve stress, improve circulation, and restore balance.",
      // price: "₹1200 - ₹4000",
      // duration: "1-2 hours",
      icon: Zap,
      popular: false,
      backgroundImage: "./images/reflexology.webp",
    },

    {
      name: "Nail Art & Manicure",
      description:
        "Creative nail designs, manicure, pedicure, and nail extensions",
      // price: "₹300 - ₹1500",
      // duration: "30-60 minutes",
      icon: Star,
      popular: false,
      backgroundImage:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Makeup & Beauty",
      description:
        "Professional makeup for parties, events, and special occasions",
      // price: "₹1000 - ₹5000",
      // duration: "1-2 hours",
      icon: Award,
      popular: true,
      backgroundImage:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Hair Treatments",
      description:
        "Keratin treatment, anti-hair fall therapy, and hair strengthening solutions",
      // price: "₹600 - ₹2000",
      // duration: "60-90 minutes",
      icon: Zap,
      popular: false,
      backgroundImage:
        "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Body Grooming",
      description:
        "Full body grooming, waxing,threading, and personal care services",
      // price: "₹800 - ₹2500",
      // duration: "1-2 hours",
      icon: Award,
      popular: false,
      backgroundImage: "./images/mens_grooming.jpeg",
    },
    // {
    //   name: "Spa Services",
    //   description: "Relaxing massage, stress relief, and wellness treatments",
    //   price: "₹1000 - ₹3000",
    //   duration: "1-1.5 hours",
    //   icon: Star,
    //   popular: true,
    //   backgroundImage: "./images/saloon.jpeg"
    // }
  ];

  const menServices = [
    {
      name: "Haircut & Styling",
      description: "Modern haircuts, beard trimming, and professional styling",
      // price: "₹200 - ₹800",
      // duration: "30-45 minutes",
      icon: Scissors,
      popular: true,
      backgroundImage:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Beard & Mustache",
      description:
        "Professional beard shaping, mustache grooming, and maintenance",
      // price: "₹150 - ₹500",
      // duration: "20-30 minutes",
      icon: Users,
      popular: true,
      backgroundImage:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Facial Services",
      description: "Deep cleansing facials, blackhead removal, and skin care",
      // price: "₹400 - ₹1200",
      // duration: "45-60 minutes",
      icon: Sparkles,
      popular: false,
      backgroundImage: "./images/wellness.jpeg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Salon Services – Naturals Arulanthar Nagar | Hair, Skin, Spa & Bridal
          in Thanjavur
        </title>
        <meta
          name="description"
          content="Explore our premium salon services at Naturals Arulanthar Nagar, Thanjavur. From hair styling and facials to luxurious skincare and bridal makeovers."
        />
        <meta
          name="keywords"
          content="Salon Services Thanjavur, Naturals Arulanthar Nagar, Hair Care, Skin services, Bridal Packages, Spa Services Thanjavur"
        />
        <meta name="author" content="Naturals Arulanthar Nagar" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Salon Services – Naturals Arulanthar Nagar"
        />
        <meta
          property="og:description"
          content="Haircuts, facials, spa therapies, and bridal services – all under one roof at Naturals Arulanthar Nagar, Thanjavur."
        />
        <meta
          property="og:image"
          content="https://naturalsthanjavur.com/images/bridal.jpeg"
        />
        <meta
          property="og:url"
          content="https://naturals-thanjavur.in/services"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Naturals Arulanthar Nagar – Beauty & Wellness Services"
        />
        <meta
          name="twitter:description"
          content="Get the best in beauty – hair styling, facials, body spa, and bridal packages at Naturals Thanjavur."
        />
        <meta
          name="twitter:image"
          content="https://naturalsthanjavur.com/images/bridal.jpeg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://naturals-thanjavur.in/services" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
            <h1 className="font-forum text-6xl md:text-7xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-purple-100">
              Luxury Hair, Skin & Bridal Services Tailored for You
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Women Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-forum text-5xl font-bold text-gray-900 mb-6">
              Women's Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our full range of expert hair styling, skin care, and
              bridal beauty services — exclusively for women.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {womenServices.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-80 items-center justify-center text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${service.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-white text-center">
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  )}

                  <div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="font-forum text-2xl font-bold mb-3 group-hover:text-purple-200 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {/* <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-semibold">{service.price}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-purple-300" />
                        <span className="text-sm text-gray-200">{service.duration}</span>
                      </div>
                    </div> */}

                    {/* <Button className="w-full bg-white bg-opacity-20 backdrop-blur-sm text-white border border-white border-opacity-30 hover:bg-white hover:text-gray-900 group-hover:scale-105 transition-all">
                      Book Now
                    </Button> */}
                  </div>
                </div>
                {/* Hover overlay for brightness effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Men Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-forum text-5xl font-bold text-gray-900 mb-6">
              Men's Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional grooming and styling services tailored for the modern
              man
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menServices.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-80"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${service.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center text-white">
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  )}
                  <div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="font-forum text-2xl font-bold mb-3 group-hover:text-blue-200 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {/* <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-semibold">
                          {service.price}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-blue-300" />
                        <span className="text-sm text-gray-200">
                          {service.duration}
                        </span>
                      </div>
                    </div> */}

                    {/* <Button className="w-full bg-white bg-opacity-20 backdrop-blur-sm text-white border border-white border-opacity-30 hover:bg-white hover:text-gray-900 group-hover:scale-105 transition-all">
                      Book Now
                    </Button> */}
                  </div>
                </div>
                {/* Hover overlay for brightness effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages Section */}
      <section className="relative bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
          {/* Left Side - Full Height Image */}
          <div className="relative">
            <img
              src="./images/bridal_makeup.jpeg"
              alt="Special Packages"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#7f4899]/90 to-[#7f4899]/30"></div>
          </div>

          {/* Right Side - Package Details */}
          <div className="py-20 px-8 lg:px-16 flex flex-col justify-center">
            <div className="mb-12" data-aos="fade-right">
              <h2 className="font-forum text-4xl font-bold text-[#7f4899] font-forum mb-4">
                Special Packages
              </h2>
              <p className="text-gray-600 text-lg max-w-md">
                Exclusive combo packages designed to give you the complete
                makeover experience
              </p>
              <div className="w-16 h-1 bg-[#7f4899] mt-4 rounded-full"></div>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: <Heart className="h-6 w-6 text-white" />,
                  title: "Bridal Bliss",
                  desc: "Complete bridal package with pre-bridal services, makeup, and styling",
                  price: "₹15,000",
                },
                {
                  icon: <Sparkles className="h-6 w-6 text-white" />,
                  title: "Glow Up",
                  desc: "Hair treatment, facial, manicure, and pedicure combo package",
                  price: "₹3,500",
                },
                {
                  icon: <Users className="h-6 w-6 text-white" />,
                  title: "Gentlemen's Club",
                  desc: "Complete men's grooming with haircut, beard styling, and facial",
                  price: "₹1,200",
                },
              ].map((pkg, index) => (
                <div
                  key={index}
                  className="flex items-start bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-[#7f4899] to-[#b88dd5] flex items-center justify-center mr-5">
                    {pkg.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="font-forum text-xl font-semibold text-gray-900">
                        {pkg.title}
                      </h3>
                      {/* <span className="text-lg font-bold text-[#7f4899]">
                        {pkg.price}
                      </span> */}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{pkg.desc}</p>
                    {/* <Button className="mt-4 text-sm bg-[#7f4899] text-white hover:bg-[#6c3c85] px-6 py-2">
                      Book Package
                    </Button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="font-forum text-5xl font-bold text-[#7f4899] font-forum mb-4">
              Why Choose Naturals?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the reasons our clients keep coming back — it's more than
              beauty, it's care.
            </p>
            <div className="w-20 h-1 bg-[#7f4899] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Stacked Feature List */}
          <div className="space-y-12 max-w-3xl mx-auto">
            {[
              {
                icon: Award,
                title: "Expert Professionals",
                desc: "Certified and experienced stylists committed to delivering quality service every time.",
              },
              {
                icon: Star,
                title: "Premium Products",
                desc: "Top-tier international products chosen for safety, quality, and outstanding results.",
              },
              {
                icon: Clock,
                title: "Flexible Timings",
                desc: "We're open all 7 days, offering services that fit your schedule effortlessly.",
              },
              {
                icon: Users,
                title: "Personalized Care",
                desc: "Tailored services and one-on-one attention to suit your unique beauty needs.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#7f4899] to-[#b88dd5] rounded-full flex items-center justify-center shadow-md">
                  <item.icon className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-forum text-xl font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-[#7f4899] to-[#b388c1] text-white overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 -skew-y-3 bg-white/10 backdrop-blur-md" />

        <div className="relative container mx-auto px-6 md:px-12 z-10">
          <div
            className="grid md:grid-cols-2 items-center gap-12"
            data-aos="fade-up"
          >
            {/* Left Content */}
            <div className="text-center md:text-left space-y-6">
              <h2 className="font-forum font-forum text-5xl font-bold leading-tight">
                Ready to Transform Your Look?
              </h2>
              <p className="text-xl text-[#f4e3ff] max-w-xl">
                Discover the best in hair, skin, and bridal beauty at Naturals
                Thanjavur. Book your appointment and experience the most loved
                salon in the city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                {/* <Button
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
                </Button> */}
              </div>
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

export default Services;

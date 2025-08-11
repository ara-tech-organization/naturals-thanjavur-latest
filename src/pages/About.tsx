import { Card } from "@/components/ui/card";
import {
  Users,
  Award,
  Heart,
  Target,
  Sparkles,
  Shield,
  Zap,
  Star,
} from "lucide-react";
import { Helmet } from "react-helmet";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Customer Care",
      description:
        "We prioritize our customers' satisfaction and well-being above everything else.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description:
        "We strive for excellence in every service we provide, maintaining the highest standards.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description:
        "We embrace the latest techniques and technologies in beauty.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description:
        "We operate with complete transparency and honesty in all our dealings.",
    },
  ];

  const team = [
    {
      name: "Anita R.",
      role: "Bridal Makeup Specialist",
      experience: "10+ Years Experience",
      specialty: "HD Bridal & Traditional South Indian Looks",
      image: "./images/icons/women.png",
    },
    {
      name: "Divya M.",
      role: "Hair Stylist",
      experience: "7+ Years Experience",
      specialty: "Creative Hair Coloring, Keratin, and Smoothening",
      image: "/images/team/divya.jpg",
    },
    {
      name: "Suresh K.",
      role: "Men’s Grooming Expert",
      experience: "8+ Years Experience",
      specialty: "Fades, Beard Sculpting, and Classic Cuts",
      image: "/images/team/suresh.jpg",
    },
  ];

  const StatItem = ({ value, label, icon }) => (
    <div className="bg-white p-5 rounded-2xl shadow-lg w-48 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 border border-purple-100">
      <div className="w-12 h-12 bg-[#7f4899] rounded-full flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h4 className="text-2xl font-bold text-[#7f4899]">{value}</h4>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          About Us – Naturals Salon Arulanthar Nagar, Thanjavur | Trusted Since
          2009
        </title>
        <meta
          name="description"
          content="Learn about Naturals Arulanthar Nagar – Thanjavur's most trusted beauty salon. Offering premium hair, skin, spa, and bridal services since 2009."
        />
        <meta
          name="keywords"
          content="Naturals Arulanthar Nagar, About Naturals Salon Thanjavur, Bridal Makeup Experts, Top Salon in Thanjavur, Beauty Experts Since 2009"
        />
        <meta name="author" content="Naturals Arulanthar Nagar" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Naturals Salon – Arulanthar Nagar, Thanjavur"
        />
        <meta
          property="og:description"
          content="Discover the journey of Naturals Arulanthar Nagar, a premium beauty and bridal salon in Thanjavur with over a decade of excellence."
        />
        <meta property="og:image" content="https://example.com/about-og.jpg" />
        <meta property="og:url" content="https://naturals-thanjavur.in/about" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Naturals Arulanthar Nagar – Best Salon in Thanjavur"
        />
        <meta
          name="twitter:description"
          content="Naturals Arulanthar Nagar is Thanjavur’s leading salon for bridal, hair, skin and bridal services. Trusted since 2009."
        />
        <meta name="twitter:image" content="https://example.com/about-og.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://naturals-thanjavur.in/about" />
      </Helmet>
      {/* Hero Section with Background Image */}
      <section
        className="relative py-32 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(126, 71, 152, 0.8), rgba(126, 71, 152, 0.8)), url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="font-forum text-6xl font-bold mb-8">
              Welcome to Naturals Arulanandha Nagar – Where Beauty Meets Expertise
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Luxury Hair, Skin & Bridal Services – Thanjavur’s Trusted Salon Destination
            </p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-24 bg-gradient-to-br from-white to-purple-50 overflow-hidden">
        {/* Background Accent Shape */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full opacity-30 -z-10 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div data-aos="fade-right" className="relative">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="./images/Story.jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Badge */}
              <div className="absolute -top-8 -left-8 bg-white border-4 border-purple-300 text-purple-700 font-bold text-sm px-4 py-2 rounded-full shadow">
                Naturals Salon
              </div>
            </div>

            {/* Right Side - Content */}
            <div data-aos="fade-left">
              <h2 className="font-forum text-4xl font-bold text-[#7f4899] mb-6 font-forum">
                Redefine Your Beauty at Naturals Unisex Salon, Thanjavur
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>Naturals</strong> started as a small salon in 2009
                and has now grown into the city's trusted beauty 
                brand.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Looking for the best salon in Thanjavur? Welcome to Naturals
                Arulanthar Nagar, your go-to unisex salon offering premium haircare, skincare, and bridal makeup services. Since
                2009, we’ve been redefining beauty experiences with expert care,
                top-tier products, and personalized service — right in the heart
                of Arulanthar Nagar, Thanjavur.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Whether it’s a bridal makeover, a rejuvenating facial services,
                or a precision haircut and styling, we bring international
                standards to your doorstep. As a proud part of the Naturals
                family, India’s most trusted salon chain, we combine innovation
                and indulgence to help you feel your best.
              </p>
              {/* <p className="text-lg text-gray-700 leading-relaxed">
                Whether it’s a makeover, a relaxing spa treatment, or your dream bridal look, we make every visit special. Step in and redefine beauty with Naturals!
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Gradient Accent */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-200 rounded-full blur-3xl opacity-30 -z-10" />

        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-forum text-5xl font-bold text-[#7f4899] mb-4 font-forum">
              Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-[#7f4899] mx-auto rounded-full"></div>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div
              className="bg-gradient-to-tr from-white to-purple-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              data-aos="fade-right"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="./images/icons/target.png" // Replace with your Flaticon path
                  alt="Mission Icon"
                  className="w-16 h-16 mb-6"
                />
                <h3 className="font-forum text-3xl font-bold text-[#7f4899] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To provide top-quality beauty services in Thanjavur that enhance natural beauty, boost confidence, and promote self-care. At Naturals Arulanthar Nagar, we offer a
                  hygienic, luxurious environment and cutting-edge services
                  tailored to every customer’s needs.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div
              className="bg-gradient-to-tr from-white to-purple-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              data-aos="fade-left"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="./images/icons/vision.png" // Replace with your Flaticon path
                  alt="Vision Icon"
                  className="w-16 h-16 mb-6"
                />
                <h3 className="font-forum text-3xl font-bold text-[#7f4899] mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be recognized as Thanjavur’s most preferred beauty
                  destination, known for creative styling, bridal excellence,
                  and holistic wellness. We aim to expand our reach while
                  staying rooted in trust, quality, and personalized care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      {/* <section className="py-20 bg-white relative">
        <div className="absolute inset-0 opacity-5">
         
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Naturals Thanjavur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div key={index} className="text-center group" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-white rounded-full shadow-lg group-hover:animate-bounce">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: "url('./images/saloon.jpg')",
        }}
      >
        {/* Softer overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-[#7e4799]/60 backdrop-blur-sm z-0" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-down">
            <h2 className="font-forum text-5xl font-bold mb-4 text-black/80 drop-shadow-lg">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Our handpicked professionals specialize in bridal makeup,
              hairstyling, men's grooming, and skin care services. With years
              of experience and a passion for transformation, they ensure you
              walk out glowing.
            </p>
            <div className="w-24 h-1 bg-yellow-300 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/80 text-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="font-forum text-2xl font-semibold mb-2 text-[#7f4899]">
                  {member.name}
                </h3>
                <p className="text-[#4b2e69] font-medium mb-2 text-lg">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  {member.experience}
                </p>
                <p className="text-gray-700 text-sm">{member.specialty}</p>
                <div className="mt-6 h-1 w-12 bg-yellow-300 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why to Choose Us */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background blur decoration */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-100 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-forum">
              Why Choose{" "}
              <span className="text-[#7f4899]">Naturals Arulanthar Nagar</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what sets us apart in Thanjavur’s beauty scene
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Prime Location",
                text: "Centrally located in Arulanthar Nagar, near key landmarks in Thanjavur.",
              },
              {
                title: "10,000+ Happy Clients",
                text: "Over 10,000+ satisfied customers and 100+ successful bridal makeovers.",
              },
              {
                title: "Trained Professionals",
                text: "Experts in hair care, skin care, bridal and party makeup.",
              },
              {
                title: "Premium Products",
                text: "Only trusted brands used — L’Oréal, MAC, Schwarzkopf and more.",
              },
              {
                title: "Hygienic & Safe",
                text: "We follow strict hygiene protocols and offer a customer-first approach.",
              },
              {
                title: "Affordable Packages", // ✅ ADDED POINT TO BALANCE
                text: "Special deals for weddings, facials, hair care & combo services.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="min-w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#b67cd1] to-[#ec8bd7] shadow-md animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-6 sm:px-12 bg-gradient-to-br from-[#f9f4ff] via-[#fef7ff] to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-forum font-bold text-[#7f4899] mb-4">
              Milestones That Moved Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every number reflects a story of trust, transformation, and
              timeless beauty.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#7f4899] to-[#d9a8f2] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Modern Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "15+",
                label: "Years of Excellence",
                icon: <Award className="h-7 w-7 text-white" />,
                color: "from-purple-500 to-pink-400",
              },
              {
                title: "10,000+",
                label: "Satisfied Clients in Thanjavur",
                icon: <Users className="h-7 w-7 text-white" />,
                color: "from-pink-500 to-red-400",
              },
              {
                title: "100+",
                label: "Bridal Makeovers",
                icon: <Sparkles className="h-7 w-7 text-white" />,
                color: "from-yellow-400 to-orange-400",
              },
              {
                title: "10+",
                label: "Skilled Beauty Experts",
                icon: <Heart className="h-7 w-7 text-white" />,
                color: "from-indigo-500 to-blue-400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative rounded-3xl bg-white/30 backdrop-blur-lg p-8 border border-white/20 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* Floating Icon */}
                <div
                  className={`absolute -top-6 left-6 w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                >
                  {item.icon}
                </div>

                <div className="pt-12 text-left">
                  <h3 className="text-5xl font-extrabold text-[#7f4899]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-700 text-base font-medium">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

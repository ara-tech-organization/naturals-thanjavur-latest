import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Crown, Heart, Sparkles, Star, Gift } from "lucide-react";
import { Helmet } from "react-helmet";

const BridalPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState("");

  const packages = [
    {
      id: "classic",
      title: "Classic Bridal Package",
      price: "₹25,000",
      duration: "6 hours",
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      services: [
        "Bridal Makeup (HD)",
        "Hair Styling & Draping",
        "Manicure & Pedicure",
        "Facial & Cleanup",
        "Mehendi Design",
        "Pre-wedding Consultation",
      ],
      features: ["Professional Team", "Quality Products", "Touch-up Kit"],
      plans:
        " Ideal for intimate weddings & traditional South Indian ceremonies.",
      popular: false,
    },
    {
      id: "premium",
      title: "Premium Bridal Package",
      price: "₹45,000",
      duration: "8 hours",
      icon: <Crown className="h-8 w-8 text-purple-500" />,
      services: [
        "Bridal Makeup (HD + Airbrush)",
        "Hair Styling & Advanced Draping",
        "Manicure & Pedicure",
        "Luxury Facial Services",
        "Intricate Mehendi Design",
        "Pre-wedding Trial Session",
        "Jewelry Styling",
        "Saree/Lehenga Draping",
      ],
      features: [
        "Premium Products",
        "Senior Stylist",
        "Touch-up Kit",
        "Photography Support",
      ],
      plans:
        "Perfect for brides who want flawless makeup, radiant skin, and high-end service.",
      popular: true,
    },
    {
      id: "royal",
      title: "Royal Bridal Package",
      price: "₹65,000",
      duration: "12 hours",
      icon: <Sparkles className="h-8 w-8 text-gold-500" />,
      services: [
        "Complete Bridal Makeover",
        "Designer Hair Styling",
        "Luxury Facial and Hair Treatment",
        "Designer Mehendi",
        "Multiple Trial Sessions",
        "Wedding Day Coordination",
        "Groom Styling Included",
        "Family Makeup (2 people)",
      ],
      features: [
        "Luxury Brand Products",
        "Celebrity Stylist",
        "Complete Kit",
        "Photoshoot Ready",
        "Doorstep Service",
      ],
      plans:
        "Ideal for grand weddings & destination events in Thanjavur and beyond.",
      popular: false,
    },
  ];

  const preWeddingServices = [
    { name: "Engagement Makeup", price: "₹8,000", duration: "3 hours" },
    { name: "Mehendi Ceremony", price: "₹6,000", duration: "2 hours" },
    { name: "Sangeet Night Look", price: "₹10,000", duration: "4 hours" },
    { name: "Reception Look", price: "₹12,000", duration: "4 hours" },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Bridal Packages – Naturals Arulanthar Nagar | Bridal Makeup in
          Thanjavur
        </title>
        <meta
          name="description"
          content="Look stunning on your big day with Naturals Arulanthar Nagar's bridal packages in Thanjavur. Airbrush makeup, mehendi, facials, saree draping & more."
        />
        <meta
          name="keywords"
          content="Bridal Makeup Thanjavur, Naturals Bridal Packages, Wedding Salon Thanjavur, Airbrush Makeup, Saree Draping, Bridal Facial, Mehendi Artists Thanjavur"
        />
        <meta name="author" content="Naturals Arulanthar Nagar" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="Bridal Packages – Naturals Arulanthar Nagar"
        />
        <meta
          property="og:description"
          content="Explore premium bridal makeup packages at Naturals Thanjavur. We specialize in airbrush makeup, saree draping, mehendi, and pre-bridal care."
        />
        <meta property="og:image" content="https://example.com/bridal-og.jpg" />
        <meta
          property="og:url"
          content="https://naturals-thanjavur.in/bridal-packages"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Naturals Bridal Packages – Best Wedding Makeup in Thanjavur"
        />
        <meta
          name="twitter:description"
          content="Thanjavur’s trusted salon for bridal beauty. Choose from our classic, airbrush, and premium bridal packages at Naturals Arulanthar Nagar."
        />
        <meta
          name="twitter:image"
          content="https://example.com/bridal-og.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://naturals-thanjavur.in/bridal-packages"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[35rem] bg-gradient-to-r from-pink-200 via-purple-600 to-pink-400 flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("./images/download.jpeg")',
          }}
        />
        <div className="relative z-10 text-center" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <Crown className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="font-forum text-5xl font-bold mb-4">
            Bridal Packages in Thanjavur – Naturals Arulanthar Nagar
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Make your wedding day unforgettable with our premium bridal makeup
            and makeover services in Thanjavur.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Main Packages Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-forum text-4xl font-bold text-gray-800 mb-4">
            Choose the Perfect Bridal Makeup Package
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From timeless elegance to extravagant royalty, Naturals Arulanthar
            Nagar offers customized bridal packages in Thanjavur designed to
            match your style, budget, and dream wedding vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const bgColor =
              pkg.id === "classic"
                ? "from-pink-50 to-rose-100"
                : pkg.id === "premium"
                ? "from-purple-50 to-violet-100"
                : "from-yellow-50 to-amber-100";

            const textColor =
              pkg.id === "classic"
                ? "text-rose-600"
                : pkg.id === "premium"
                ? "text-violet-700"
                : "text-yellow-700";

            const iconColor =
              pkg.id === "classic"
                ? "text-rose-500"
                : pkg.id === "premium"
                ? "text-violet-600"
                : "text-yellow-600";

            return (
              <Card
                key={pkg.id}
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2
        bg-gradient-to-br ${bgColor} p-6 rounded-3xl shadow-md ${
                  pkg.popular ? "ring-4 ring-purple-300 scale-105" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-purple-500 text-white font-semibold shadow">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className={`flex justify-center mb-4 ${iconColor}`}>
                    {pkg.icon}
                  </div>
                  <CardTitle
                    className={`font-forum text-2xl font-bold ${textColor}`}
                  >
                    {pkg.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    <span className={`text-3xl font-bold ${iconColor}`}>
                      {pkg.price}
                    </span>
                    <span className="text-gray-500 ml-2">({pkg.duration})</span>
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-forum font-semibold text-gray-800 mb-2">
                        Services Included:
                      </h4>
                      <ul className="space-y-1">
                        {pkg.services.map((service, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <Gift
                              className={`h-3 w-3 ${iconColor} mr-2 flex-shrink-0`}
                            />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-forum font-semibold text-gray-800 mb-2">
                        Features:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {pkg.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* <Button
                      className="w-full gradient-bg text-white hover:brightness-90"
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      Book Now
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Pre-Wedding Services */}
        <section className="mb-16" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="font-forum text-3xl font-bold text-gray-800 mb-4">
              Pre-Wedding Services
            </h3>
            <p className="text-lg text-gray-600">
             From Engagement to Reception – Look Stunning for Every Pre-Wedding Moment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preWeddingServices.map((service, index) => (
              <Card
                key={service.name}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader className="text-center">
                  <CardTitle className="font-forum text-lg">
                    {service.name}
                  </CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold text-purple-600">
                      {service.price}
                    </span>
                    <br />
                    <span className="text-sm text-gray-500">
                      {service.duration}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <Button variant="outline" className="w-full">
                    Book Service
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bride expects */}
        <section className="relative py-24 bg-gradient-to-br from-pink-50 via-purple-100 to-white overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-100 rounded-full blur-3xl opacity-40"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-forum">
                Why Thanjavur Brides Trust  <br />
                <span className="text-[#7f4899]">
                  Naturals Arulanandha Nagar
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our team ensures you look breathtaking from haldi to reception
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  icon: "💄",
                  title: "Expert Bridal Artists",
                  desc: "Trained in HD & Airbrush Makeup for flawless results.",
                },
                {
                  icon: "🌿",
                  title: "Luxury Skincare",
                  desc: "Using only premium brands for glowing skin.",
                },
                {
                  icon: "🎀",
                  title: "Customized Bridal Looks",
                  desc: "Traditional, modern, or fusion – your look, your way.",
                },
                {
                  icon: "📍",
                  title: "Central Location",
                  desc: "Easy to access salon in Arulanthar Nagar, Thanjavur.",
                },
                {
                  icon: "📷",
                  title: "Bridal Trials & Styling",
                  desc: "Photography-ready finish, trial sessions & jewelry setting.",
                },
                {
                  icon: "💎",
                  title: "Premium Brands Used",
                  desc: "MAC, L’Oréal, Schwarzkopf – only the best for your big day.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image Left */}
              <div className="rounded-xl overflow-hidden" data-aos="fade-right">
                <img
                  src="./images/bridal.jpeg"
                  alt="Bridal Look"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Right */}
              <div className="text-center md:text-left" data-aos="fade-left">
                <h3 className="font-forum text-4xl font-bold text-gray-900 mb-4">
                  Ready to Book Your Dream Bridal Look in Thanjavur?
                </h3>
                <p className="text-lg text-gray-700 mb-6 max-w-xl">
                  Let us help you shine like royalty. Contact us for a free
                  bridal consultation in Thanjavur and get one step closer to
                  your perfect wedding look.
                </p>
                <p className="text-lg text-gray-700 mb-6 max-w-xl">
                  📍Visit Naturals Arulanthar Nagar – Thanjavur’s trusted bridal
                  salon.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  {/* <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90"
          >
            Schedule Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-600 hover:bg-purple-100"
          >
            Call +91 90870 00049
          </Button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BridalPackages;

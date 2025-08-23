import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Crown,
  Star,
  Gift,
  Shield,
  Clock,
  Users,
  Check,
  X,
} from "lucide-react";
import { Helmet } from "react-helmet";

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isFlipped, setIsFlipped] = useState({});

  const membershipPlans = [
    {
      id: "silver",
      name: "Silver Membership",
      price: "₹2,999",
      validity: "6 Months",
      icon: <Shield className="h-12 w-12 text-gray-400" />,
      color: "from-gray-300 to-gray-500",
      benefits: [
        "10% discount on all services",
        "Priority booking",
        "Free birthday surprise",
        "Monthly newsletter with beauty tips",
        "Basic consultation included",
      ],
      services: ["Hair Services", "Basic Facial", "Cleanup"],
      popular: false,
    },
    {
      id: "gold",
      name: "Gold Membership",
      price: "₹4,999",
      validity: "12 Months",
      icon: <Star className="h-12 w-12 text-yellow-500" />,
      color: "from-yellow-300 to-yellow-600",
      benefits: [
        "15% discount on all services",
        "Priority booking & express service",
        "Free birthday makeover",
        "Quarterly complimentary facial",
        "Advanced consultation & skin analysis",
        "Exclusive member-only offers",
        "Free touch-up sessions",
      ],
      services: [
        "All Hair Services",
        "Premium Facials",
        "Body Services",
        "Basic Makeup",
      ],
      popular: true,
    },
    {
      id: "platinum",
      name: "Platinum Membership",
      price: "₹7,999",
      validity: "12 Months",
      icon: <Crown className="h-12 w-12 text-purple-500" />,
      color: "from-purple-400 to-purple-700",
      benefits: [
        "25% discount on all services",
        "VIP priority booking",
        "Free monthly spa session",
        "Complimentary bridal trial",
        "Personal beauty consultant",
        "Exclusive access to new services",
        "Free home service (once a month)",
        "Guest discounts (10% for family)",
        "Annual beauty package worth ₹3000",
      ],
      services: [
        "All Services",
        "Bridal Packages",
        "Luxury Services",
        "Home Services",
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "How do I join a membership plan?",
      answer:
        "You can join any membership plan by visiting our salon, calling us, or booking online. Our team will guide you through the process and activate your membership immediately.",
    },
    {
      question: "Can I upgrade my membership plan?",
      answer:
        "Yes, you can upgrade your membership at any time. The price difference will be adjusted, and you'll immediately get the benefits of the higher tier.",
    },
    {
      question: "What happens if I miss appointments?",
      answer:
        "Your membership benefits remain valid throughout the membership period. However, we recommend regular visits to maintain your beauty routine and get maximum value.",
    },
    {
      question: "Can I transfer my membership to someone else?",
      answer:
        "Memberships are non-transferable and are tied to the individual who purchased them. However, Platinum members get guest discounts for family members.",
    },
    {
      question: "Is there a refund policy for memberships?",
      answer:
        "Memberships are non-refundable, but they can be paused for up to 2 months in case of medical emergencies or extended travel.",
    },
  ];

  const toggleFlip = (planId: string) => {
    setIsFlipped((prev) => ({
      ...prev,
      [planId]: !prev[planId],
    }));
  };

  const flipCardStyles = {
    perspective: "1000px",
  };

  const flipCardFrontStyles = (isFlipped: boolean) => ({
    position: "absolute" as const,
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden" as const,
    transition: "transform 0.6s",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  });

  const flipCardBackStyles = (isFlipped: boolean) => ({
    position: "absolute" as const,
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden" as const,
    transition: "transform 0.6s",
    transform: isFlipped ? "rotateY(0deg)" : "rotateY(180deg)",
  });

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Membership Plans – Naturals Arulanthar Nagar | Beauty Memberships in
          Thanjavur
        </title>
        <meta
          name="description"
          content="Join Naturals Arulanthar Nagar membership and unlock premium discounts, birthday makeovers, and express bookings. Silver, Gold, and Platinum plans available."
        />
        <meta
          name="keywords"
          content="Salon Membership Thanjavur, Beauty Plans, Naturals Membership Discounts, Hair Spa Offers, Thanjavur Beauty Deals"
        />
        <meta
          property="og:title"
          content="Membership at Naturals Arulanthar Nagar"
        />
        <meta
          property="og:description"
          content="Save more with exclusive membership benefits, including priority booking and personalized offers."
        />
        <meta
          property="og:image"
          content="https://naturalsthanjavur.com/images/bridal.jpeg"
        />
        <meta
          property="og:url"
          content="https://naturals-thanjavur.in/membership"
        />
        <meta
          name="twitter:title"
          content="Naturals Membership Plans – Thanjavur Beauty Offers"
        />
        <meta
          name="twitter:description"
          content="Enjoy discounts, free touch-ups, and more with a Naturals salon membership."
        />
        <link rel="canonical" href="https://naturals-thanjavur.in/membership" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[35rem] bg-gradient-to-r from-indigo-300 via-purple-600 to-pink-500 flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("./images/membership.jpg")',
          }}
        />
        <div className="relative z-10 text-center" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <Users className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="font-forum text-5xl font-bold mb-4">
            Membership Plans
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join our premium membership program and enjoy exclusive beauty
            discounts, priority bookings, and monthly salon perks.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Membership Plans */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-forum text-4xl font-bold text-gray-800 mb-4">
            Choose Your Perfect Membership Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to unlock a world of luxury beauty services at member-only
            prices? Explore our salon membership packages in Thanjavur, designed
            for regular clients who love self-care and savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {membershipPlans.map((plan, index) => (
            <div
              key={plan.id}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`h-[28rem] cursor-pointer transition-transform duration-300 ${
                  plan.popular ? "ring-4 ring-purple-400 scale-105" : ""
                } ${
                  plan.id === "silver"
                    ? "bg-gradient-to-br from-gray-100 to-gray-300"
                    : ""
                } 
     ${
       plan.id === "gold"
         ? "bg-gradient-to-br from-yellow-100 to-yellow-300"
         : ""
     } 
     ${
       plan.id === "platinum"
         ? "bg-gradient-to-br from-purple-100 to-purple-300"
         : ""
     }`}
                style={flipCardStyles}
                onClick={() => toggleFlip(plan.id)}
              >
                {/* Front Side */}
                <div style={flipCardFrontStyles(isFlipped[plan.id])}>
                  <Card className="h-full relative overflow-hidden">
                    {plan.popular && (
                      <Badge className="absolute top-4 right-4 bg-purple-500 text-white z-10">
                        <Crown className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    )}

                    <CardHeader className="text-center relative z-10">
                      <div className="flex justify-center mb-4">
                        {plan.id === "silver" && (
                          <Shield className="h-12 w-12 text-gray-500" />
                        )}
                        {plan.id === "gold" && (
                          <Star className="h-12 w-12 text-yellow-500" />
                        )}
                        {plan.id === "platinum" && (
                          <Crown className="h-12 w-12 text-purple-500" />
                        )}
                      </div>
                      <CardTitle
                        className={`font-forum text-2xl font-bold ${
                          plan.id === "silver"
                            ? "text-gray-700"
                            : plan.id === "gold"
                            ? "text-yellow-700"
                            : "text-purple-700"
                        }`}
                      >
                        {plan.name}
                      </CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-purple-700">
                          {plan.price}
                        </span>
                        <p className="text-gray-600 mt-1">
                          Valid for {plan.validity}
                        </p>
                      </div>
                    </CardHeader>

                    <CardContent className="text-center relative z-10">
                      <div className="space-y-3">
                        {plan.benefits.slice(0, 3).map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-center text-sm text-gray-700"
                          >
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                        <p className="text-purple-700 font-medium mt-4 cursor-pointer hover:underline">
                          Click to see all benefits →
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Back Side */}
                <div style={flipCardBackStyles(isFlipped[plan.id])}>
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      <CardTitle className="font-forum text-xl font-bold text-gray-800">
                        {plan.name} Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-forum font-semibold text-gray-800 text-sm">
                          All Benefits:
                        </h4>
                        {plan.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start text-xs">
                            <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{benefit}</span>
                          </div>
                        ))}
                        <h4 className="font-forum font-semibold text-gray-800 text-sm mt-4">
                          Services Included:
                        </h4>
                        {plan.services.map((service, idx) => (
                          <div key={idx} className="flex items-center text-xs">
                            <Gift className="h-3 w-3 text-purple-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{service}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button
                  className="w-full gradient-bg text-white hover:opacity-90"
                  size="lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan(plan.id);
                  }}
                >
                  Choose {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* How to Join Section */}
        <section className="mb-16" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="font-forum text-3xl font-bold text-gray-800 mb-4">
              How to Join
            </h3>
            <p className="text-lg text-gray-600">
              Becoming a member is easy! Here’s how:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Plan",
                desc: "Pick the salon membership package that suits your lifestyle.",
              },
              {
                step: "2",
                title: "Visit/Call",
                desc: "Reach us online or visit Naturals Arulanthar Nagar.",
              },
              {
                step: "3",
                title: "Payment",
                desc: "Pay securely and get your digital membership card.",
              },
              {
                step: "4",
                title: "Enjoy Benefits",
                desc: "Start saving with discounts, freebies, and more!",
              },
            ].map((item, index) => (
              <Card
                key={item.step}
                className="text-center hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="font-forum text-2xl">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="font-forum text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-gray-600">
              Everything you need to know about our membership program
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-br from-purple-100 via-pink-100 to-white rounded-3xl mt-16 overflow-hidden relative">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div data-aos="fade-right">
                <h3 className="font-forum text-4xl md:text-5xl font-bold text-purple-800 mb-6">
                  Join Our Exclusive Membership
                </h3>
                <p className="text-lg text-gray-700 mb-8 max-w-lg">
                  Unlock premium services, member-only discounts, and
                  personalized beauty experiences. Start saving and pamper
                  yourself with the best.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90"
          >
            Visit Our Salon
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-700 hover:bg-purple-100"
          >
            Call +91 90870 00049
          </Button> */}
                </div>
              </div>

              {/* Right Visual Box */}
              <div className="relative" data-aos="fade-left">
                <div className="bg-gradient-to-tr from-pink-300 via-purple-400 to-purple-600 rounded-3xl p-12 text-white shadow-lg">
                  <h4 className="font-forum text-3xl font-bold mb-2">
                    Membership Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>Priority Booking</li>
                    <li>Exclusive Discounts</li>
                    <li>Free Monthly Touch-ups</li>
                    <li>Personal Beauty Consultant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Membership;

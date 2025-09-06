import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Users,
  Calendar,
  Star,
} from "lucide-react";
import AOS from "aos";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const payload = {
  //     FullName: formData.name.trim(),
  //     Email: formData.email.trim(),
  //     PhoneNumber: formData.phone.trim(),
  //     Service: formData.service.trim(),
  //     Message: formData.message.trim(),
  //   };

  //   if (!payload.FullName || !payload.Email || !payload.PhoneNumber || !payload.Service || !payload.Message) {
  //     toast.error("Please fill in all fields!", { position: "top-center" });
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/NaturalsEnquiry02",
  //       payload,
  //       {
  //         headers: {
  //           Authorization: "Bearer 123",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (response.data && !response.data.error) {
  //       toast.success("Email sent Successfully!", {
  //   position: "top-center",
  //   style: {
  //     fontFamily: "Poppins, sans-serif",
  //     fontSize: "1rem",
  //     fontWeight: 500,
  //   },
  // });

  // // ✅ Log the full response or your custom message
  //   console.log("✅ Success:", response.data);

  //       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  //     } else {
  //       toast.error(response.data.message || "Submission failed", { position: "top-center" });
  //     }
  //   } catch (error) {
  //     toast.error("An error occurred. Please try again.", { position: "top-center",style:{fontFamily: "Poppins, sans-serif"} });
  //     console.error("Submission error:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      FullName: formData.name.trim(),
      Email: formData.email.trim(),
      PhoneNumber: formData.phone.trim(),
      Service: formData.service.trim(),
      Message: formData.message.trim(),
    };

    if (
      !payload.FullName ||
      !payload.Email ||
      !payload.PhoneNumber ||
      !payload.Service ||
      !payload.Message
    ) {
      toast.error("Please fill in all fields!", { position: "top-center" });
      return;
    }

    try {
      const response = await axios.post(
        "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/NaturalsEnquiry02",
        payload,
        {
          headers: {
            Authorization: "Bearer 123",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && !response.data.error) {
        toast.success("Email sent Successfully!", {
          position: "top-center",
          style: {
            fontFamily: "Poppins, sans-serif",
            fontSize: "1rem",
            fontWeight: 500,
          },
        });

        console.log("✅ Success:", response.data);

        // ✅ Trigger Google Ads conversion tracking
        if (typeof gtag !== "undefined") {
          gtag_report_conversion("https://naturalsthanjavur.com/contact");
          console.log("✅ Google Ads conversion tracking triggered.");
        } else {
          console.warn("⚠️ gtag is not defined. Conversion tracking skipped.");
        }

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast.error(response.data.message || "Submission failed", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
        style: { fontFamily: "Poppins, sans-serif" },
      });
      console.error("Submission error:", error);
    }
  };

  // Google Ads conversion tracking function
  function gtag_report_conversion(url) {
    const callback = function () {
      if (url && typeof url !== "undefined") {
        window.location = url;
      }
    };

    gtag("event", "conversion", {
      send_to: "AW-11437201054/sZp1CIvG4pQbEJ6t180q",
      value: 1.0,
      currency: "INR",
      event_callback: callback,
    });

    return false;
  }
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 90870 00049",
      desc: "Available 9 AM - 8 PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "naturals.tj2@gmail.com",
      desc: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Arulananda Nagar",
      desc: "No 2851/14, No 2, 1st Floor, Philomena Shop,Arulananda Nagar,Thanjavur - 613007",
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Mon - Sat: 9 AM - 8 PM",
      desc: "Sunday: 10 AM - 6 PM",
    },
  ];

  const faqData = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by calling us, using the online form, or visiting our salon in Arulanandha Nagar directly.",
    },
    {
      question: "Do you accept walk-ins?",
      answer:
        "Yes, we accept walk-ins based on availability. However, we recommend booking in advance.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, UPI, credit/debit cards, and digital wallets like Google Pay and PhonePe.",
    },
    {
      question: "Do you offer bridal packages?",
      answer:
        "Yes, we offer exclusive bridal packages that include HD makeup, hair styling, saree draping, and more.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Contact Us – Naturals Arulanthar Nagar | Book Your Appointment in
          Thanjavur
        </title>
        <meta
          name="description"
          content="Get in touch with Naturals Arulanthar Nagar. Call, email, or visit our Thanjavur salon to book hair, skin, spa, or bridal appointments today."
        />
        <meta
          name="keywords"
          content="Naturals Thanjavur Contact, Salon Appointment Thanjavur, Beauty Salon Near Me, Call Naturals Arulanthar Nagar"
        />
        <meta property="og:title" content="Contact Naturals Arulanthar Nagar" />
        <meta
          property="og:description"
          content="Visit our Arulanthar Nagar location or reach out by phone/email for bookings and queries."
        />
        <meta
          property="og:image"
          content="https://naturalsthanjavur.com/images/bridal.jpeg"
        />
        <meta
          property="og:url"
          content="https://naturals-thanjavur.in/contact"
        />
        <meta
          name="twitter:title"
          content="Book with Naturals Arulanthar Nagar – Thanjavur"
        />
        <meta
          name="twitter:description"
          content="Fast booking and salon support. Find directions, contact details, and appointment form here."
        />
        <link rel="canonical" href="https://naturals-thanjavur.in/contact" />
      </Helmet>
      <ToastContainer />
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
            <h1 className="font-forum text-6xl md:text-7xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              We’re here to help you look and feel your absolute best. Whether
              you have questions about appointments, bridal consultations, or
              salon services—our team is just a message away.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3"
            >
              <a href="#contact-form">Contact Us Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-forum text-5xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We’re always happy to hear from you. Choose your preferred way to
              connect:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="group p-8 text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-forum text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold text-primary mb-2">
                  {item.info}
                </p>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div data-aos="slide-right">
              <h2 className="font-forum text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Have a query, feedback, or wish to book a service? Drop your
                details below and our team will get back to you shortly
              </p>

              <Card className="p-8 border-0 shadow-lg">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="hair">Hair Care & Styling</option>
                        <option value="bridal">Bridal Package</option>
                        <option value="facial">Facial & Skin Care</option>
                        <option value="men">Men's Grooming</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className="border-gray-300 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-bg text-white hover:opacity-90 py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Info Cards */}
            <div className="space-y-8" data-aos="slide-left">
              <h2 className="font-forum text-4xl font-bold text-gray-900">
                Why Choose Us?
              </h2>

              <div className="space-y-6">
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-forum text-xl font-bold text-gray-900 mb-2">
                        Expert Professionals
                      </h3>
                      <p className="text-gray-600">
                        Our skilled hair and skin experts bring over 10 years of
                        salon experience.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-forum text-xl font-bold text-gray-900 mb-2">
                        Personalized Service
                      </h3>
                      <p className="text-gray-600">
                        Every client is unique—our services are customized to
                        your specific needs.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-forum text-xl font-bold text-gray-900 mb-2">
                        Flexible Scheduling
                      </h3>
                      <p className="text-gray-600">
                        Book at your convenience with extended service hours and
                        weekend availability.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-forum text-4xl font-bold text-gray-900 mb-6">
              Visit Our Main Branch
            </h2>
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
                <h3 className="font-forum text-xl font-bold text-gray-900">
                  Naturals
                </h3>
                <p className="text-gray-600">Arulanthar Nagar</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              1st Floor, Philomena Shop, 2851/14, No 2, opposite Vinodhagan
              Hospital, Arulanthar Nagar, Thanjavur, Tamil Nadu 613007
            </p>
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

      {/* FAQ Section with Flip Cards */}
      <section className="py-24 bg-gradient-to-br from-[#fdf7ff] via-[#faf5ff] to-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-forum text-5xl font-bold text-[#7f4899] mb-4 font-forum tracking-tight">
              Got Questions?
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Let’s chat. Literally. Our answers are just a bubble away.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#7f4899] to-[#d9a8f2] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Chat Style FAQ */}
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="flex flex-col items-start space-y-2">
                {/* Question Bubble */}
                <div className="self-end bg-gradient-to-br from-[#7f4899] to-[#d9a8f2] text-white px-6 py-4 rounded-3xl rounded-tr-sm max-w-[80%] shadow-md animate-fade-in-up">
                  <p className="text-md font-semibold">{faq.question}</p>
                </div>

                {/* Answer Bubble */}
                <div className="bg-white border border-[#f1defc] text-gray-800 px-6 py-4 rounded-3xl rounded-tl-sm max-w-[80%] shadow-sm animate-fade-in-up">
                  <p className="text-sm leading-relaxed">{faq.answer}</p>
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
                Your Transformation Starts Here
              </h2>
              <p className="text-xl text-[#f4e3ff] max-w-xl">
                Book your salon or bridal appointment today and discover why
                we’re Thanjavur’s most-loved salon.
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

export default Contact;

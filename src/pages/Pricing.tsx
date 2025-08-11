import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Crown, Sparkles, Star } from "lucide-react";
import { Helmet } from "react-helmet";

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState("women");

  const womenServices = [
    {
      category: "Hair Styling",
      services: [
        {
          name: "Classic Cut - Basic Cut | U-Cut | Straight Cut",
          price: { regular: "₹450", member: "₹400" },
          duration: "30 min",
          popular: false,
        },
        {
          name: "Fringe | Bangs",
          price: { regular: "₹200", member: "NA" },
          duration: "15 min",
          popular: false,
        },
        {
          name: "Change of Styling by a Senior Stylist",
          price: { regular: "₹1000", member: "₹900" },
          duration: "45 min",
          popular: false,
        },
        {
          name: "Layer Cut",
          price: { regular: "₹700", member: "₹650" },
          duration: "45 min",
          popular: false,
        },
        {
          name: "Kids Cut (Below 10)",
          price: { regular: "₹350", member: "₹300" },
          duration: "20 min",
          popular: false,
        },
        {
          name: "Hair Wash & Deep Conditioning",
          price: { regular: "₹400", member: "NA" },
          duration: "25 min",
          popular: false,
        },
        {
          name: "Blow Dry (Medium)",
          price: { regular: "₹700", member: "₹600" },
          duration: "30 min",
          popular: false,
        },
        {
          name: "Blow Dry (Long)",
          price: { regular: "₹850", member: "₹750" },
          duration: "40 min",
          popular: false,
        },
      ],
    },

    {
  category: "Colouring & Highlights",
  services: [
    {
      name: "Root Touch Up (Ammonia | Ammonia Free)",
      price: { regular: "₹1000 | ₹1400", member: "₹900 | ₹1300" },
      duration: "45 min",
      popular: false
    },
    {
      name: "Global (Short | Medium | Long)",
      price: { regular: "₹3000 | ₹3500 | ₹4000", member: "₹2700 | ₹3000 | ₹3800" },
      duration: "1.5 – 2.5 hours",
      popular: true
    },
    {
      name: "Global Ammonia Free (Short | Medium | Long)",
      price: { regular: "₹3200 | ₹3700 | ₹4200", member: "₹3000 | ₹3500 | ₹4000" },
      duration: "1.5 – 2.5 hours",
      popular: false
    },
    {
      name: "Global Fashion Colour (Short | Medium | Long)",
      price: { regular: "₹3200 | ₹3700 | ₹4200", member: "₹3000 | ₹3500 | ₹4000" },
      duration: "1.5 – 2.5 hours",
      popular: true
    },
    {
      name: "Global with Highlights | Balayage Technique",
      price: { regular: "₹5000", member: "₹4500" },
      duration: "2.5 – 3 hours",
      popular: false
    },
    {
      name: "Highlights - Partial | Full",
      price: { regular: "₹2500 | ₹3500", member: "₹2200 | ₹3200" },
      duration: "1.5 – 2 hours",
      popular: false
    },
    {
      name: "Highlights (Per Streak)",
      price: { regular: "₹400", member: "₹350" },
      duration: "15 min",
      popular: false
    },
    {
      name: "Add-On: Bond Strengthener (With Hair Colour)",
      price: { regular: "₹500", member: "NA" },
      duration: "15 min",
      popular: false
    }
  ]
},

   {
  category: "Texture Matters",
  services: [
    {
      name: "Smoothening | Keratin | Straightening (Short | Medium | Long)",
      price: { regular: "₹5000 | ₹7000 | ₹9000", member: "NA" },
      duration: "2.5 – 3.5 hours",
      popular: true
    },
    {
      name: "Re-Growth | Partial Straightening",
      price: { regular: "₹5500", member: "NA" },
      duration: "2 hours",
      popular: false
    },
    {
      name: "Perming (Short | Medium | Long)",
      price: { regular: "₹3500 | ₹4500 | ₹6000", member: "NA" },
      duration: "2.5 – 3 hours",
      popular: false
    },
    {
      name: "Add-On: Bond Strengthener (With Smoothening / Keratin)",
      price: { regular: "₹750", member: "NA" },
      duration: "15 min",
      popular: false
    }
  ]
},
{
  category: "Style It Right",
  services: [
    {
      name: "Ironing (Medium | Long)",
      price: { regular: "₹950 | ₹1100", member: "₹850 | ₹1000" },
      duration: "45 – 60 min",
      popular: false
    },
    {
      name: "Tongs (Medium | Long)",
      price: { regular: "₹1100 | ₹1300", member: "₹1000 | ₹1200" },
      duration: "45 – 60 min",
      popular: false
    },
    {
      name: "Updo (Medium | Long)",
      price: { regular: "₹900 | ₹1000", member: "₹800 | ₹900" },
      duration: "45 – 60 min",
      popular: false
    }
  ]
},
{
  category: "Hair Treatments",
  services: [
    {
      name: "Head Massage (Includes Hair Wash)",
      price: { regular: "₹600", member: "NA" },
      duration: "30 min",
      popular: false
    },
    {
      name: "Moisturizing Hair Spa (Medium | Long)",
      price: { regular: "₹800 | ₹900", member: "₹700 | ₹800" },
      duration: "45 – 60 min",
      popular: false
    },
    {
      name: "Colour Save (Medium | Long)",
      price: { regular: "₹1100 | ₹1200", member: "₹1000 | ₹1100" },
      duration: "1 hour",
      popular: false
    },
    {
      name: "Frizz Ease (Medium | Long)",
      price: { regular: "₹1100 | ₹1200", member: "₹1000 | ₹1100" },
      duration: "1 hour",
      popular: false
    },
    {
      name: "Repair & Rejuvenate (Medium | Long)",
      price: { regular: "₹1100 | ₹1200", member: "₹1000 | ₹1100" },
      duration: "1 hour",
      popular: false
    },
    {
      name: "Dandruff Control (Scalp Treatment)",
      price: { regular: "₹1200", member: "NA" },
      duration: "45 min",
      popular: false
    }
  ]
},
{
  category: "Indulgent Facials",
  services: [
    {
      name: "Clean Up",
      price: { regular: "₹700", member: "₹600" },
      duration: "30 min",
      popular: false
    },
    {
      name: "Fruit Blaster",
      description: "A revitalizing facial that charges your dull, tired skin instantly and leaves it glowing with the real goodness of fruit.",
      price: { regular: "₹900", member: "₹800" },
      duration: "45 min",
      popular: true
    },
    {
      name: "Chocoholic",
      description: "A replenishing and hydrating skin treatment with the luxury of chocolate that reduces dark spots and rejuvenates the skin.",
      price: { regular: "₹1200", member: "₹1050" },
      duration: "1 hour",
      popular: false
    },
    {
      name: "Detan 100",
      description: "A crafted facial that restores the skin's balance, removes tan, and exfoliates gently, leaving it glowing with freshness.",
      price: { regular: "₹1500", member: "₹1300" },
      duration: "1 hour",
      popular: true
    },
     {
      name: "OMG Charcoal",
      description: "This activated charcoal facial promises to clear impurities and dirt from your skin, controls acne and regulates secretion from sebaceous glands that often clog your pores.",
      price: { regular: "₹1600", member: "₹1400" },
      duration: "1 hour",
      popular: false
    },
    {
      name: "Gold & Glow",
      description: "An exclusive facial that uses the goodness of gold to reveal an unstoppable glow.",
      price: { regular: "₹1800", member: "₹1600" },
      duration: "1 hour",
      popular: true
    },
    {
      name: "Naturals Brightening",
      description: "A specially constructed facial regime for de-pigmentation and skin brightening to make your skin feel soft, supple and light.",
      price: { regular: "₹2000", member: "₹1800" },
      duration: "1 hour",
      popular: true
    },
    {
      name: "Dead Sea Hydration",
      description: "Dead Sea Mud masks work to remove impurities and dead skin with an added benefit of special minerals to improve skin tone and elasticity.",
      price: { regular: "₹2400", member: "₹2200" },
      duration: "1.5 hours",
      popular: false
    }
  ]
},

{
  category: "Skin Goals",
  services: [
    {
      name: "SensiGlow",
      description: "A facial which calms and harmonizes sensitive skin and gives nourishing glow.",
      price: { regular: "₹2600", member: "₹2400" },
      duration: "1 hour",
      popular: false
    },
    {
      name: "Naturals Age Reversal",
      description: "A luxurious slow-paced facial with products rich in vitamins that soothe and brighten the skin. Suitable for all skin types.",
      price: { regular: "₹2600", member: "₹2400" },
      duration: "1 hour",
      popular: true
    },
    {
      name: "Skin Brightening",
      description: "This facial restores the balance of the skin while gently exfoliating it and leaving it with a glow.",
      price: { regular: "₹2800", member: "₹2600" },
      duration: "1 hour",
      popular: true
    },
    {
      name: "Fruity Marmalade",
      description: "An exclusive facial that uses extracts of fruits like Bearberry, Grape, Pineapple, Kiwi & Papaya to formulate a process involving nutrients, enzymes & vitamins that ensure an optimum skin glow.",
      price: { regular: "₹3000", member: "₹2800" },
      duration: "1 hour",
      popular: false
    },
    {
      name: "7 Step Derma Ice",
      description: "A new age cool facial that combines exotic fruits like Noni, Glutathione & Plum giving an instant glow & clear skin.",
      price: { regular: "₹3500", member: "₹3200" },
      duration: "1 hour",
      popular: false
    },
  ]
},
{
  category: "Luxury Facials",
  services: [
    {
      name: "Ultimo Gold",
      description: "This revolutionary skin transformation treatment penetrates 24 karat gold into the skin’s deepest layer, accelerating cell renewal and promoting the clearance of stagnant melanin to brighten the skin.",
      price: { regular: "₹4000", member: "₹3600" },
      duration: "1 hour",
      popular: true
    },
    {
      name: "Beauty & Glow",
      description: "This facial uses Glutathione to decrease melanin (pigmentation) in your skin & helps decrease wrinkles and increase skin elasticity.",
      price: { regular: "₹5000", member: "₹4000" },
      duration: "1 hour",
      popular: true
    },
    {
      name: "Illuminating Facial with GojiBerry (*Available at selected salons)",
      description: "This facial with the extract of gojiberry, a fruit of longevity, helps in balancing the natural condition of the skin and protects it from external agents. The algae peel-off Goji Mask has high antioxidant power aiding in skin replenishment.",
      price: { regular: "₹6000", member: "₹5500" },
      duration: "1 hour",
      popular: false
    }
  ]
},
 {
    "category": "Body Care",
    "services": [
      {
        "name": "Back Facial",
        "price": { "regular": 1700, "member": 1500 }
      }
    ]
  },
  {
    "category": "Reflexology",
    "services": [
      {
        "name": "Neck & Shoulder (30 min)",
        "price": { "regular": 500, "member": 450 }
      },
      {
        "name": "Hand (30 min)",
        "price": { "regular": 300, "member": 250 }
      },
      {
        "name": "Feet (30 min)",
        "price": { "regular": 600, "member": 550 }
      }
    ]
  },
  {
    "category": "Manicure / Pedicure",
    "services": [
      {
        "name": "Cocoa Butter - Mani | Pedi",
        "price": { "regular": "450 | 650", "member": "400 | 600" }
      },
      {
        "name": "Coffee & Creme - Mani | Pedi",
        "price": { "regular": "650 | 800", "member": "600 | 750" }
      },
      {
        "name": "Dead Sea - Mani | Pedi",
        "price": { "regular": "700 | 900", "member": "600 | 800" }
      },
      {
        "name": "Crystal Spa - Mani | Pedi",
        "price": { "regular": "1100 | 1300", "member": "1000 | 1200" }
      },
      {
        "name": "Ice Cream - Mani + Pedi (Combo)",
        "price": { "regular": 1800, "member": "NA" }
      },
      {
        "name": "Organic Spa - Mani + Pedi (Combo)",
        "price": { "regular": 2000, "member": "NA" }
      }
    ]
  },
  {
    "category": "Heel Peel Treatment",
    "services": [
      {
        "name": "Heel Peel",
        "price": { "regular": 2000, "member": "NA" }
      }
    ]
  },
  {
    "category": "Nail Polish",
    "services": [
      {
        "name": "Change of Nail Colour",
        "price": { "regular": 150, "member": 120 }
      },
      {
        "name": "Cut, File & Polish",
        "price": { "regular": 200, "member": 180 }
      },
      {
        "name": "French Polish (Fingers | Toes)",
        "price": { "regular": 300, "member": "NA" }
      }
    ]
  },
  {
    "category": "Flavored / Cartridge Waxing",
    "services": [
      {
        "name": "Half Arms | Legs",
        "price": { "regular": "350 | 470", "member": "300 | 420" }
      },
      {
        "name": "Full Arms | Legs",
        "price": { "regular": "470 | 650", "member": "420 | 550" }
      },
      {
        "name": "Full Waxing (FA+FL+UA)",
        "price": { "regular": 1100, "member": "NA" }
      },
      {
        "name": "Full Back | Midriff",
        "price": { "regular": 600, "member": 550 }
      },
      {
        "name": "Full Body (Doesn’t include bikini line)",
        "price": { "regular": 2200, "member": "NA" }
      }
    ]
  },
  {
    "category": "Peel Off",
    "note": "We recommend peel off for sensitive areas",
    "services": [
      {
        "name": "Upper Lip",
        "price": { "regular": 100, "member": 80 }
      },
      {
        "name": "Chin",
        "price": { "regular": 80, "member": 70 }
      },
      {
        "name": "Face",
        "price": { "regular": 350, "member": 300 }
      },
      {
        "name": "Underarms",
        "price": { "regular": 200, "member": 150 }
      },
      {
        "name": "Bikini Line",
        "price": { "regular": 700, "member": 600 }
      },
      {
        "name": "Full Bikini",
        "price": { "regular": 2000, "member": "NA" }
      }
    ]
  },
  {
    "category": "Detan / Bleach",
    "services": [
      {
        "name": "Upper Lip",
        "price": { "regular": 80, "member": 70 }
      },
      {
        "name": "Underarms",
        "price": { "regular": 150, "member": 130 }
      },
      {
        "name": "Feet",
        "price": { "regular": 270, "member": 220 }
      },
      {
        "name": "Face & Neck",
        "price": { "regular": 450, "member": 400 }
      },
      {
        "name": "Face, Neck, & Blouseline",
        "price": { "regular": 600, "member": 550 }
      },
      {
        "name": "Half Arms | Legs",
        "price": { "regular": "470 | 750", "member": "420 | 680" }
      },
     {
      "name":"Full Arms | Legs",
      "price": { "regular": "600 | 900", "member": "550 | 800"}
     },
     {
      "name":"Midriff | Back",
      "price":{"regular":"450 | 650", "member": "400 | 550"}
     },
     {
      "name":"Full Body",
      "price":{"regular":"2200","member":"NA"}
     }
    ]
  },
   {
    "category": "Add On Mask",
    "services": [
      {
        "name": "Rejuvenate",
        "price": { "regular": 500, "member": "NA" }
      },
      {
        "name": "Bright",
        "price": { "regular": 600, "member": "NA" }
      },
      {
        "name": "Gold",
        "price": { "regular": 1000, "member": 900 }
      }
    ]
  },
  {
    "category": "Add On Skin Care",
    "services": [
      {
        "name": "Underarm",
        "description": "Brightening",
        "price": { "regular": 500, "member": "NA" }
      },
      {
        "name": "Neck | Elbow",
        "description": "Brightening",
        "price": { "regular": 500, "member": "NA" }
      },
      {
        "name": "Under Eye",
        "description": "Brightening",
        "price": { "regular": 600, "member": "NA" }
      }
    ]
  },
  {
    "category": "Threading",
    "services": [
      {
        "name": "Eyebrow",
        "price": { "regular": 40, "member": "NA" }
      },
      {
        "name": "Upper Lip | Lower Lip",
        "price": { "regular": 40, "member": "NA" }
      },
      {
        "name": "Chin | Forehead",
        "price": { "regular": 40, "member": "NA" }
      },
      {
        "name": "Face Sides",
        "price": { "regular": 60, "member": "NA" }
      },
      {
        "name": "Full Face",
        "price": { "regular": 120, "member": "NA" }
      },

    ]
  }
  ];

  const menServices = [
    {
  "category": "Hair Styling",
  "services": [
    {
      "name": "Hair Cut",
      "price": { "regular": 300, "member": 225 },
      "popular": true
    },
    {
      "name": "Shave",
      "price": { "regular": 120, "member": 100 },
      "popular": true
    },
    {
      "name": "Executive Shave (Shave & Express Clean-Up)",
      "price": { "regular": 450, "member": 400 }
    },
    {
      "name": "Hair Cut + Executive Shave",
      "price": { "regular": 600, "member": "NA" }
    },
    {
      "name": "Head Shave",
      "price": { "regular": 350, "member": "NA" }
    },
    {
      "name": "Kids Cut (Below 10)",
      "price": { "regular": 250, "member": 200 }
    },
    {
      "name": "Beard Styling",
      "price": { "regular": 300, "member": 250 },
      "popular": true
    },
    {
      "name": "Beard Trim",
      "price": { "regular": 180, "member": 150 }
    },
    {
      "name": "Hair Wash",
      "price": { "regular": 150, "member": 130 }
    }
  ]
},
{
  "category": "World of Colours",
  "services": [
    {
      "name": "Express Colour",
      "price": { "regular": 500, "member": 450 }
    },
    {
      "name": "Classic Colour (Ammonia Free)",
      "price": { "regular": 850, "member": 750 },
      "popular": true
    },
    {
      "name": "Premium Colour (Ammonia Free)",
      "price": { "regular": 1000, "member": 900 }
    },
    {
      "name": "Fashion Colour",
      "price": { "regular": 1500, "member": 1300 }
    },
    {
      "name": "Streak (Per Streak)",
      "price": { "regular": 250, "member": "NA" }
    },
    {
      "name": "Moustache Colour",
      "price": { "regular": 150, "member": 120 }
    },
    {
      "name": "Beard Colouring",
      "price": { "regular": 400, "member": 350 }
    },
    {
      "name": "Beard + Moustache Colouring",
      "price": { "regular": 500, "member": 450 }
    }
  ]
},
{
  "category": "Indulgent Facials",
  "services": [
    {
      "name": "Clean Up",
      "description": "",
      "price": {
        "regular": 700,
        "member": 600
      }
    },
    {
      "name": "Fruit Blaster",
      "description": "A revitalizing facial with the real goodness of fruit",
      "price": {
        "regular": 900,
        "member": 800
      },
      "popular": true
    },
    {
      "name": "Chocoholic",
      "description": "A replenishing and hydrating facial with the luxury of chocolate",
      "price": {
        "regular": 1200,
        "member": 1050
      }
    },
    {
      "name": "Detan 100",
      "description": "A facial that restores the skin’s balance & removes tan",
      "price": {
        "regular": 1500,
        "member": 1300
      },
      "popular": true
    },
    {
      "name": "OMG Charcoal",
      "description": "An activated charcoal facial that clears impurities and controls acne",
      "price": {
        "regular": 1600,
        "member": 1400
      }
    },
    {
      "name": "H.I.M",
      "description": "A facial which calms and harmonizes sensitive skin and gives nourishing glow",
      "price": {
        "regular": 1700,
        "member": 1500
      }
    },
    {
      "name": "Naturals Brightening",
      "description": "A specially constructed facial regime for de-pigmenting and skin brightening",
      "price": {
        "regular": 2000,
        "member": 1800
      },"popular": true
    },
    {
      "name": "Dead Sea Hydration",
      "description": "Dead Sea Mud masks work to remove impurities and dead skin with an added benefit of special minerals to improve skin",
      "price": {
        "regular": 2400,
        "member": 2200
      }
    },
    {
      "name": "Sensiglow",
      "description": "A facial which calms and harmonizes sensitive skin and gives nourishing glow",
      "price": {
        "regular": 2600,
        "member": 2400
      }
    },
    {
      "name": "Naturals Age Reversal",
      "description": "A luxurious slow-paced facial with products rich in vitamins that soothe and brighten the skin, Suitable for all skin types",
      "price": {
        "regular": 2600,
        "member": 2400
      }
    },
    {
      "name": "Skin Brightening",
      "description": "This facial restores the balance of the skin while gently exfoliating it & leaving it with a glow",
      "price": {
        "regular": 2800,
        "member": 2600
      },
      "popular": true
    },
    {
      "name": "Ultimo Gold",
      "description": "The revolutionary skin transformation treatment penetrates 24karat gold into the skin’s deepest layer accelerating cell renewal, promoting the clearance of stagnant melanin to brighten the skin",
      "price": {
        "regular": 4000,
        "member": 3600
      },
    },
    {
      "name":"Illumunating Facial with Gojiberry",
      "price":{"regular": 6000,
        "member": 5500
      }
    },
    
  ],
  "notes": [
    "Price of service may vary between salons.",
    "Certain services are available only in select salons.",
    "Taxes are applicable."
  ]
},
{
  "category": "Facial Add-ons & Special Care",
  "services": [
    {
      "name": "Rejuvenate (Add On Mask)",
      "price": {
        "regular": 500,
        "member": "NA"
      }
    },
    {
      "name": "Bright (Add On Mask)",
      "price": {
        "regular": 600,
        "member": "NA"
      }
    },
    {
      "name": "Neck | Elbow (Add On Skin Care)",
      "price": {
        "regular": 500,
        "member": "NA"
      }
    },
    {
      "name": "Under Eye (Add On Skin Care)",
      "price": {
        "regular": 600,
        "member": "NA"
      }
    },
    {
      "name": "Face & Neck (De-Tan)",
      "price": {
        "regular": 450,
        "member": 400
      }
    }
  ],
  "notes": [
    "Price of service may vary between salons.",
    "Certain services are available only in select salons.",
    "Taxes are applicable."
  ]
},
{
  "category": "Body Care & Nail Services",
  "services": [
    {
      "name": "Back Facial",
      "price": { "regular": 1700, "member": 1500 },
      "duration": null,
      "popular": false
    },
    {
      "name": "Neck & Shoulder (30 MIN)",
      "price": { "regular": 500, "member": 450 },
      "duration": "30 min",
      "popular": false
    },
    {
      "name": "Hand (30 MIN)",
      "price": { "regular": 300, "member": 250 },
      "duration": "30 min",
      "popular": false
    },
    {
      "name": "Feet (30 MIN)",
      "price": { "regular": 600, "member": 550 },
      "duration": "30 min",
      "popular": false
    },
    {
      "name": "Cocoa Butter - Mani | Pedi",
      "price": { "regular": "450 | 650", "member": "400 | 600" },
      "duration": null,
      "popular": false
    },
    {
      "name": "Coffee & Creme - Mani | Pedi",
      "price": { "regular": "650 | 800", "member": "600 | 750" },
      "duration": null,
      "popular": false
    },
    {
      "name": "Dead Sea - Mani | Pedi",
      "price": { "regular": "700 | 900", "member": "600 | 800" },
      "duration": null,
      "popular": false
    },
    {
      "name": "Crystal Spa - Mani | Pedi",
      "price": { "regular": "1100 | 1300", "member": "1000 | 1200" },
      "duration": null,
      "popular": false
    },
    {
      "name": "Ice Cream - Mani + Pedi (Combo)",
      "price": { "regular": 1800, "member": "NA" },
      "duration": null,
      "popular": false
    },
    {
      "name": "Organic Spa - Mani + Pedi (Combo)",
      "price": { "regular": 2000, "member": "NA" },
      "duration": null,
      "popular": false
    },
    {
      "name": "Heel Peel Treatment",
      "price": { "regular": 2000, "member": "NA" },
      "duration": null,
      "popular": false
    }
  ]
}   
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Service Pricing – Naturals Arulanthar Nagar | Affordable Beauty 
          in Thanjavur
        </title>
        <meta
          name="description"
          content="Explore transparent pricing for hair care, facials, and bridal services at Naturals Arulanthar Nagar, Thanjavur. Premium beauty, affordable rates."
        />
        <meta
          name="keywords"
          content="Salon Pricing Thanjavur, Naturals Arulanthar Nagar Prices, Haircut Price, Facial Cost, Spa Packages Thanjavur"
        />
        <meta
          property="og:title"
          content="Service Pricing – Naturals Arulanthar Nagar"
        />
        <meta
          property="og:description"
          content="Best value salon in Thanjavur. Discover our rates for professional hair, beauty, and wellness services."
        />
        <meta
          property="og:image"
          content="https://example.com/pricing-og.jpg"
        />
        <meta
          property="og:url"
          content="https://naturals-thanjavur.in/pricing"
        />
        <meta
          name="twitter:title"
          content="Affordable Salon Services in Thanjavur – Naturals Pricing"
        />
        <meta
          name="twitter:description"
          content="Get the best rates on haircuts, spa, skin, and bridal care at Naturals Arulanthar Nagar."
        />
        <link rel="canonical" href="https://naturals-thanjavur.in/pricing" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[35rem] bg-gradient-to-r from-blue-300 via-purple-500 to-pink-300 flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("./images/pricing.jpg")',
          }}
        />
        <div className="relative z-10 text-center" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="font-forum text-5xl font-bold mb-4">
            Service Pricing
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get clear, competitive prices for premium salon, bodycare, and beauty
            services in Thanjavur.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Service Categories */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-forum text-4xl font-bold text-gray-800 mb-4">
            Our Salon & Beauty Services in Thanjavur
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you need a quick glow-up or a full-blown transformation,
            explore our complete range of services for men's and women’s beauty
            care, hair styling, facials, bodycare, and makeup at Naturals
            Arulanthar Nagar.
          </p>
        </div>

        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <div className="flex justify-center mb-8" data-aos="fade-up">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
              <TabsTrigger
                value="women"
                className="font-forum text-lg font-semibold"
              >
                Women's Services
              </TabsTrigger>
              <TabsTrigger
                value="men"
                className="font-forum text-lg font-semibold"
              >
                Men's Services
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="women" className="space-y-8">
            {womenServices.map((category, categoryIndex) => (
              <Card
                key={category.category}
                className="overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={categoryIndex * 100}
              >
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="font-forum text-2xl font-bold text-gray-800 flex items-center">
                    <Crown className="h-6 w-6 text-purple-500 mr-2" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Service</TableHead>
                        {/* <TableHead className="font-semibold">
                          Duration
                        </TableHead> */}
                        <TableHead className="font-semibold">Regular</TableHead>
                        <TableHead className="font-semibold">Member</TableHead>

                        {/* <TableHead className="font-semibold">Action</TableHead> */}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.services.map((service, serviceIndex) => (
                        <TableRow
                          key={service.name}
                          className="hover:bg-gray-50"
                        >
                          <TableCell>
                            <div className="flex items-center">
                              {service.name}
                              {service.popular && (
                                <Badge className="ml-2 bg-purple-500 text-white text-xs">
                                  <Star className="h-3 w-3 mr-1" />
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          {/* <TableCell className="text-gray-600">
                            {service.duration}
                          </TableCell> */}
                          <TableCell className="text-purple-600 font-semibold text-base">
                            {typeof service.price === "object"
                              ? service.price.regular
                              : service.price}
                          </TableCell>
                          <TableCell className="text-green-600 font-semibold text-base">
                            {typeof service.price === "object"
                              ? service.price.member
                              : "—"}
                          </TableCell>

                          {/* <TableCell>
                            <Button size="sm" variant="outline" className="hover:bg-purple-500 hover:text-white">
                              Book Now
                            </Button>
                          </TableCell> */}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="men" className="space-y-8">
            {menServices.map((category, categoryIndex) => (
              <Card
                key={category.category}
                className="overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={categoryIndex * 100}
              >
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                    <Crown className="h-6 w-6 text-blue-500 mr-2" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Service</TableHead>
                        {/* <TableHead className="font-semibold">
                          Duration
                        </TableHead> */}
                        <TableHead className="font-semibold">Regular</TableHead>
                        <TableHead className="font-semibold">Member</TableHead>

                        {/* <TableHead className="font-semibold">Action</TableHead> */}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.services.map((service, serviceIndex) => (
                        <TableRow
                          key={service.name}
                          className="hover:bg-gray-50"
                        >
                          <TableCell>
                            <div className="flex items-center">
                              {service.name}
                              {service.popular && (
                                <Badge className="ml-2 bg-blue-500 text-white text-xs">
                                  <Star className="h-3 w-3 mr-1" />
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                         {/* <TableCell className="text-gray-600">
                            {service.duration}
                          </TableCell> */}
                          <TableCell className="text-purple-600 font-semibold text-base">
                            {typeof service.price === "object"
                              ? service.price.regular
                              : service.price}
                          </TableCell>
                          <TableCell className="text-green-600 font-semibold text-base">
                            {typeof service.price === "object"
                              ? service.price.member
                              : "—"}
                          </TableCell>
                          {/* <TableCell>
                            <Button size="sm" variant="outline" className="hover:bg-blue-500 hover:text-white">
                              Book Now
                            </Button>
                          </TableCell> */}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Special Offers Section */}
        <section className="mt-16" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="font-forum text-3xl font-bold text-gray-800 mb-4">
              Special Offers
            </h3>
            <p className="text-lg text-gray-600">
              Maximize your beauty experience with our salon combo deals and new
              client discounts:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-2 bg-purple-500">
                  20% OFF
                </Badge>
                <CardTitle className="font-forum text-xl">
                  First Visit Special
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Get 20% off on your first service booking
                </p>
                <Button className="w-full gradient-bg text-white">
                  Claim Offer
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-2 bg-green-500">
                  COMBO DEAL
                </Badge>
                <CardTitle className="font-forum text-xl">
                  Hair + Facial Combo
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Save ₹500 on Hair + Facial combo
                </p>
                <Button className="w-full bg-green-500 text-white hover:bg-green-600">
                  Book Combo
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-2 bg-pink-500">
                  LOYALTY
                </Badge>
                <CardTitle className="font-forum text-xl">
                  Refer & Earn
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Refer friends and earn ₹200 credits
                </p>
                <Button className="w-full bg-pink-500 text-white hover:bg-pink-600">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;

export interface ProductSize {
  id: string;
  sizeLabel: string;
  price: number;
  priceLabel: string;
}

export interface ProductDetail {
  slug: string;
  name: string;
  image: string;
  accentColor: string;
  badge: string;
  badgeGradient: string;
  badgeTextColor: string;
  bgGradient: string;
  shortDesc: string;
  longDesc: string;
  highlights: string[];
  features: string[];
  nutritionFacts: { label: string; val: string }[];
  purityTimeline: { time: string; label: string; desc: string }[];
  faqs: { q: string; a: string }[];
  sizes: Record<string, ProductSize>;
  defaultSize: string;
  isSubscription: boolean;
}

export const productsData: Record<string, ProductDetail> = {
  "a2-cow-milk": {
    slug: "a2-cow-milk",
    name: "A2 Desi Cow Milk",
    image: "/cow-bottle.png",
    accentColor: "#D4A017",
    badge: "Gir Cow Premium",
    badgeGradient: "linear-gradient(135deg, #D4A017, #F5CC55)",
    badgeTextColor: "#0A0A0A",
    bgGradient: "linear-gradient(135deg, rgba(212,160,23,0.08), rgba(212,160,23,0.02))",
    shortDesc: "Pure, raw, farm-fresh milk from purebred Gir cows, delivered in eco-friendly glass bottles within hours of milking.",
    longDesc: "Our A2 Desi Cow Milk is obtained exclusively from purebred Gir cows, renowned for producing the highly digestible A2 beta-casein protein. The cows are raised in a stress-free environment on our Mathura farm, grazing freely on organic pastures and fed a nutritious diet of natural fodder, medicinal herbs, and grains. Our milking process is strictly hygienic and untouched by human hands. The milk is chilled instantly to 4°C to lock in freshness and vital nutrients without pasteurization or homogenization, retaining all its natural goodness. Packaged in sterilized glass bottles, it is delivered straight to your door by 7 AM.",
    highlights: ["100% Raw Gir Cow Milk", "Hygienic Milking Process", "Delivered in Glass Bottles", "No Antibiotics or Hormones"],
    features: [
      "Pure A2 protein, extremely gentle on digestion",
      "Rich in natural calcium, protein, and Vitamin B12",
      "Golden hue from beta-carotene content",
      "Sourced daily from our private farm"
    ],
    nutritionFacts: [
      { label: "Protein", val: "8.2g" },
      { label: "Calcium", val: "290mg" },
      { label: "Fat", val: "4.1g" },
      { label: "Vitamin D3", val: "2.5µg" },
    ],
    purityTimeline: [
      { time: "04:00 AM", label: "Hygienic Milking", desc: "Our purebred Gir cows are milked in clean, automated systems untouched by hand." },
      { time: "05:00 AM", label: "Rapid Chilling", desc: "Milk is chilled instantly to 4°C in bulk coolers to keep nutrients alive and prevent bacteria." },
      { time: "05:30 AM", label: "Glass Bottling", desc: "Poured into sterilized, eco-friendly glass bottles to preserve taste and temperature." },
      { time: "07:00 AM", label: "Doorstep Delivery", desc: "Delivered cold to your house in Mathura, Vrindavan, or Agra before you wake up." }
    ],
    faqs: [
      { q: "What makes A2 milk different from regular milk?", a: "Regular milk contains both A1 and A2 beta-casein proteins. A1 protein releases a peptide called BCM-7 during digestion, which is known to cause bloating, gas, and stomach inflammation. A2 milk from native Indian breeds like Gir cows only contains the A2 protein, making it naturally easy to digest and highly gut-friendly." },
      { q: "Do you add any preservatives or water?", a: "Never. We guarantee 100% pure, unadulterated milk. We do not add water, thickeners, or preservatives, and we do not perform homogenization. It is exactly as nature intended." },
      { q: "How do I return the glass bottles?", a: "We believe in zero-plastic, eco-friendly packaging. Simply rinse the empty bottle from your previous delivery and leave it at your doorstep. Our delivery agent will collect it and replace it with a fresh bottle." },
      { q: "Can I customize or pause my delivery?", a: "Yes, you have full control. You can pause, change quantities, or adjust your delivery schedule anytime. Simply message us on WhatsApp." }
    ],
    sizes: {
      "500ml": { id: "a2-500", sizeLabel: "500 ml Bottle", price: 40, priceLabel: "₹40 / day" },
      "1l": { id: "a2-1l", sizeLabel: "1 Litre Bottle", price: 79, priceLabel: "₹79 / day" }
    },
    defaultSize: "500ml",
    isSubscription: true
  },
  "buffalo-milk": {
    slug: "buffalo-milk",
    name: "Fresh Buffalo Milk",
    image: "/buffalo-bottle.jpg",
    accentColor: "#52B788",
    badge: "High Cream",
    badgeGradient: "linear-gradient(135deg, #2D6A4F, #52B788)",
    badgeTextColor: "#F0ECD8",
    bgGradient: "linear-gradient(135deg, rgba(82,183,136,0.08), rgba(82,183,136,0.02))",
    shortDesc: "Rich, thick, and highly nutritious buffalo milk. Higher in fat and calcium, ideal for setting curd, tea, and homemade sweets.",
    longDesc: "Our Fresh Buffalo Milk is sourced daily from healthy Murrah buffaloes raised with care on our farm. It is naturally thick, high in fat, and rich in calcium, phosphorus, and essential proteins. Perfect for health-conscious families who prefer a creamy texture for their tea, coffee, and home preparations like curd, paneer, and khoya. We deliver it fresh and chilled directly to your home every morning under strict sanitary conditions.",
    highlights: ["High Cream & Fat Content", "Thick Rich Texture", "Excellent for Curd & Tea", "Untouched by Human Hands"],
    features: [
      "Naturally high in calcium and minerals",
      "Ideal fat content for traditional ghee and curd",
      "Pure, raw, and fresh daily delivery",
      "Chilled instantly post-milking"
    ],
    nutritionFacts: [
      { label: "Protein", val: "9.1g" },
      { label: "Calcium", val: "340mg" },
      { label: "Fat", val: "7.2g" },
      { label: "Energy", val: "180 kcal" },
    ],
    purityTimeline: [
      { time: "04:15 AM", label: "Milking at Farm", desc: "Healthy buffaloes are milked in pristine conditions." },
      { time: "05:00 AM", label: "Instant Cooling", desc: "Rapidly cooled down to 4°C to preserve nutritional density." },
      { time: "05:45 AM", label: "Sanitized Packaging", desc: "Packed safely in glass containers and kept at low temperatures." },
      { time: "07:00 AM", label: "Morning Drop-off", desc: "Reaches your doorstep cold and fresh, ready for breakfast." }
    ],
    faqs: [
      { q: "Is buffalo milk better than cow milk?", a: "Buffalo milk is richer in fats, calcium, and proteins, making it thicker and creamier. It is excellent for children, athletes, or anyone seeking weight gain and rich curd. A2 Cow milk is lighter and easier to digest." },
      { q: "What is the fat percentage of this milk?", a: "Our buffalo milk has a natural fat percentage of 7.0% to 7.8% depending on the season, without any artificial standardization." }
    ],
    sizes: {
      "500ml": { id: "buffalo-500", sizeLabel: "500 ml Bottle", price: 50, priceLabel: "₹50 / day" },
      "1l": { id: "buffalo-1l", sizeLabel: "1 Litre Bottle", price: 89, priceLabel: "₹89 / day" }
    },
    defaultSize: "500ml",
    isSubscription: true
  },
  "a2-ghee": {
    slug: "a2-ghee",
    name: "A2 Desi Cow Ghee",
    image: "/ghee.png",
    accentColor: "#D4A017",
    badge: "Vedic Bilona Method",
    badgeGradient: "linear-gradient(135deg, #7A5C10, #D4A017)",
    badgeTextColor: "#F0ECD8",
    bgGradient: "linear-gradient(135deg, rgba(212,160,23,0.08), rgba(212,160,23,0.02))",
    shortDesc: "Golden, granular Ghee churned from pure A2 curd using the traditional Vedic Bilona method. Incredibly aromatic and nutritious.",
    longDesc: "Our A2 Desi Cow Ghee is crafted using the ancient Bilona method. First, the fresh A2 Gir cow milk is boiled and set into curd. The curd is then hand-churned clockwise and counter-clockwise to separate the butter (makhan). This butter is slowly melted over low flame to produce aromatic, golden, granular Ghee. This meticulous process ensures all gut-friendly properties, vitamins (A, D, E, K), and healthy fats (CLA) are fully retained.",
    highlights: ["Hand-churned Vedic Bilona Ghee", "Granular Golden Texture", "Extremely Aromatic & Rich", "High Smoke Point"],
    features: [
      "Made from A2 curd, not direct milk cream",
      "Improves digestion and boosts immunity",
      "Free from additives, colors, and preservatives",
      "Packed in premium glass jars"
    ],
    nutritionFacts: [
      { label: "Healthy Fats", val: "99.8%" },
      { label: "Butyric Acid", val: "Rich" },
      { label: "Vitamins A, D", val: "Active" },
      { label: "Omega-3 & 9", val: "High" },
    ],
    purityTimeline: [
      { time: "Day 1", label: "Milk to Curd", desc: "Fresh A2 milk is boiled, cooled, and cultured to set into rich curd." },
      { time: "Day 2", label: "Curd Churning", desc: "Curd is churned using wooden bilona to collect butter (makhan)." },
      { time: "Day 2", label: "Slow Clarification", desc: "Butter is melted slowly on low heat until perfect golden granules form." },
      { time: "Day 3", label: "Jar Packaging", desc: "Packed in sterilized glass jars and delivered to you." }
    ],
    faqs: [
      { q: "What is Bilona Ghee?", a: "Bilona Ghee is made by churning curd, not milk cream. It takes about 30 liters of A2 milk to make just 1 liter of Bilona Ghee, which explains its premium quality and superior health benefits." }
    ],
    sizes: {
      "500ml": { id: "ghee-500", sizeLabel: "500 ml Jar", price: 999, priceLabel: "₹999 / jar" },
      "1l": { id: "ghee-1l", sizeLabel: "1 Litre Jar", price: 1849, priceLabel: "₹1849 / jar" }
    },
    defaultSize: "500ml",
    isSubscription: false
  },
  "a2-paneer": {
    slug: "a2-paneer",
    name: "A2 Fresh Paneer",
    image: "/paneer.png",
    accentColor: "#E8B835",
    badge: "Made Fresh Daily",
    badgeGradient: "linear-gradient(135deg, #F0ECD8, #F5CC55)",
    badgeTextColor: "#0A0A0A",
    bgGradient: "linear-gradient(135deg, rgba(232,184,53,0.08), rgba(232,184,53,0.02))",
    shortDesc: "Super soft, melt-in-the-mouth cottage cheese made fresh daily from pure A2 milk using organic lemon extract.",
    longDesc: "Our A2 Fresh Paneer is crafted daily at our dairy using pure, unadulterated A2 milk. We curdle the milk naturally using lemon juice and organic curd extracts rather than chemical acids, resulting in a paneer that is exceptionally soft, high in protein, and sweet to taste. It contains zero starch, water retention agents, or chemical preservatives.",
    highlights: ["100% Pure A2 Milk", "No Chemical Souring Agents", "Melt-in-the-mouth Softness", "Rich Source of Protein"],
    features: [
      "Freshly prepared every single morning",
      "No starch or added water weight",
      "Naturally sweet, soft, and moist",
      "Rich in premium whey protein"
    ],
    nutritionFacts: [
      { label: "Protein", val: "18.3g" },
      { label: "Calcium", val: "480mg" },
      { label: "Fat", val: "20.1g" },
      { label: "Energy", val: "265 kcal" },
    ],
    purityTimeline: [
      { time: "05:00 AM", label: "Milk Curdling", desc: "Freshly boiled A2 milk is curdled using organic agents." },
      { time: "05:45 AM", label: "Whey Pressing", desc: "Pressed gently in muslin cloth to drain whey naturally." },
      { time: "06:15 AM", label: "Block Cutting", desc: "Cut into precise blocks and packed immediately." },
      { time: "07:30 AM", label: "Fresh Delivery", desc: "Reaches your kitchen within hours of preparation." }
    ],
    faqs: [
      { q: "Why is your paneer so soft?", a: "We do not extract fat from the milk before making paneer, and we use organic curd/lemon extracts instead of industrial citric acid. This keeps the protein bonds soft and hydrated." }
    ],
    sizes: {
      "500g": { id: "paneer-500", sizeLabel: "500 g Pack", price: 225, priceLabel: "₹225 / pack" },
      "1kg": { id: "paneer-1kg", sizeLabel: "1 kg Pack", price: 449, priceLabel: "₹449 / pack" }
    },
    defaultSize: "500g",
    isSubscription: false
  },
  "a2-curd": {
    slug: "a2-curd",
    name: "A2 Traditional Curd",
    image: "/curd.png",
    accentColor: "#40916C",
    badge: "Clay Pot Style",
    badgeGradient: "linear-gradient(135deg, #1B4332, #40916C)",
    badgeTextColor: "#F0ECD8",
    bgGradient: "linear-gradient(135deg, rgba(64,145,108,0.08), rgba(64,145,108,0.02))",
    shortDesc: "Thick, creamy curd set in traditional style using pure A2 milk. Rich in natural probiotics and gut-friendly cultures.",
    longDesc: "Our A2 Traditional Curd is prepared by culturing pure, fresh A2 milk with slow-acting traditional strains. It is set at optimum temperatures to achieve a thick, custard-like consistency without adding any milk powder, gelatin, or stabilizers. It is naturally sweet, full of good bacteria, and very light on the stomach.",
    highlights: ["Pure A2 Gir Cow Milk", "Active Probiotics", "Zero Thickening Starch", "Naturally Sweet & Light"],
    features: [
      "Helps improve gut health and digestion",
      "Prepared fresh every day under cold chain",
      "No sour aftertaste",
      "No artificial thickening agents"
    ],
    nutritionFacts: [
      { label: "Protein", val: "4.5g" },
      { label: "Calcium", val: "150mg" },
      { label: "Fat", val: "4.3g" },
      { label: "Probiotics", val: "Active" },
    ],
    purityTimeline: [
      { time: "06:00 PM", label: "Milk Pasteurization", desc: "A2 milk is pasteurized gently to set curd safely." },
      { time: "07:00 PM", label: "Starter Culture", desc: "Inoculated with traditional culture strain." },
      { time: "04:00 AM", label: "Curd Setting", desc: "Curd sets perfectly in controlled temperature overnight." },
      { time: "07:00 AM", label: "Cold Delivery", desc: "Delivered chilled directly to your doorstep." }
    ],
    faqs: [
      { q: "Is it sour?", a: "No, our curd is set fresh and delivered immediately under cold storage, so it remains sweet and delicious." }
    ],
    sizes: {
      "500g": { id: "curd-500", sizeLabel: "500 g Pack", price: 80, priceLabel: "₹80 / pack" }
    },
    defaultSize: "500g",
    isSubscription: true
  },
  "a2-butter": {
    slug: "a2-butter",
    name: "A2 White Butter (Makhan)",
    image: "/butter.png",
    accentColor: "#D4A017",
    badge: "Hand Churned",
    badgeGradient: "linear-gradient(135deg, #D4A017, #F5CC55)",
    badgeTextColor: "#0A0A0A",
    bgGradient: "linear-gradient(135deg, rgba(212,160,23,0.08), rgba(212,160,23,0.02))",
    shortDesc: "Unsalted, pure white butter hand-churned from cultured A2 cow curd. Extremely rich in vitamins and nostalgic flavor.",
    longDesc: "Our A2 White Butter (Makhan) is hand-churned directly from fresh A2 cow curd, not from direct milk cream. It is unsalted, natural, and carries the traditional taste of homemade makhan. Packed with fat-soluble vitamins (A, D, E) and essential lecithin, it is a healthy addition to your morning parathas or rotis.",
    highlights: ["Hand-churned from curd", "100% Unsalted Purity", "Nostalgic Homemade Taste", "Rich in Vitamin A"],
    features: [
      "Cultured butter with beneficial properties",
      "No artificial yellow colors or preservatives",
      "Zero added salt or chemicals",
      "Prepared fresh in small batches"
    ],
    nutritionFacts: [
      { label: "Fat", val: "81.0%" },
      { label: "Protein", val: "0.8g" },
      { label: "Vitamin A", val: "Rich" },
      { label: "Moisture", val: "17%" },
    ],
    purityTimeline: [
      { time: "Day 1", label: "Curd Setup", desc: "A2 Cow Milk is cultured into curd." },
      { time: "Day 2", label: "Traditional Churning", desc: "Hand-churned in wooden vats to isolate butter fat." },
      { time: "Day 2", label: "Butter Washing", desc: "Washed with ice-cold water to clear buttermilk residues." },
      { time: "Day 3", label: "Fresh Delivery", desc: "Packed in hygienic tubs and delivered fresh." }
    ],
    faqs: [
      { q: "Is this salted like yellow butter?", a: "No, this is completely unsalted, raw white butter (makhan), carrying a fresh, milky, slightly tangy flavor." }
    ],
    sizes: {
      "250g": { id: "butter-250", sizeLabel: "250 g Tub", price: 250, priceLabel: "₹250 / pack" }
    },
    defaultSize: "250g",
    isSubscription: false
  },
  "a2-buttermilk": {
    slug: "a2-buttermilk",
    name: "A2 Spiced Buttermilk",
    image: "/buffalo-milk.png",
    accentColor: "#52B788",
    badge: "Refreshing Chaas",
    badgeGradient: "linear-gradient(135deg, #2D6A4F, #52B788)",
    badgeTextColor: "#F0ECD8",
    bgGradient: "linear-gradient(135deg, rgba(82,183,136,0.08), rgba(82,183,136,0.02))",
    shortDesc: "Traditional cooling Chaas made from slow-churned A2 curd, spiced with roasted cumin, rock salt, ginger, and mint.",
    longDesc: "Our A2 Spiced Buttermilk is the ultimate cooling drink for the gut. Prepared by blending water with butter-extracted A2 curd, it is infused with roasted cumin powder, Himalayan pink rock salt, ginger juice, coriander, and mint. Extremely hydrating and low in fat, it is a perfect digestive drink after meals.",
    highlights: ["Natural Digestive Drink", "Probiotic Rich", "Infused with Cumin & Mint", "Zero Artificial Flavor"],
    features: [
      "Extremely light and refreshing",
      "Helps calm acidity and digestion",
      "Made fresh every morning",
      "Perfect post-lunch beverage"
    ],
    nutritionFacts: [
      { label: "Energy", val: "35 kcal" },
      { label: "Calcium", val: "80mg" },
      { label: "Fat", val: "1.2g" },
      { label: "Protein", val: "1.8g" },
    ],
    purityTimeline: [
      { time: "05:00 AM", label: "Curd Churning", desc: "Curd is churned to separate butter fat, yielding light buttermilk." },
      { time: "05:30 AM", label: "Herb Blending", desc: "Fresh mint, roasted spices, and ginger juice are blended in." },
      { time: "06:00 AM", label: "Chilled Bottling", desc: "Bottled and kept chilled at 4°C." },
      { time: "07:00 AM", label: "Door Delivery", desc: "Delivered chilled directly to your home." }
    ],
    faqs: [
      { q: "Is it spicy?", a: "It has a mild, savory heat from black pepper, ginger, and cumin, which aids digestion without causing irritation." }
    ],
    sizes: {
      "500ml": { id: "buttermilk-500", sizeLabel: "500 ml Bottle", price: 50, priceLabel: "₹50 / day" }
    },
    defaultSize: "500ml",
    isSubscription: true
  }
};

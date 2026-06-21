// ============================================================
//  EVER-DETAIL — SITE CONTENT (Edit anything here!)
//  This file is your CMS. Change text, prices, add services,
//  upload photo URLs — then save. All pages update instantly.
// ============================================================

const SITE = {

  // ── GLOBAL ───────────────────────────────────────────────
  phone:     "403-465-3230",
  email:     "Everdetailcalgary@gmail.com",
  address:   "Peigan Trail SE, Calgary, AB, Canada",
  promoText: "First-time customers get <strong>$10 OFF</strong> — mention this when booking!",

  hours: [
    { day: "Mon – Fri",  time: "8:00 AM – 6:00 PM", open: true  },
    { day: "Saturday",   time: "8:00 AM – 3:00 PM",  open: true  },
    { day: "Sunday",     time: "Closed",              open: false },
  ],

  // ── HERO ─────────────────────────────────────────────────
  hero: {
    eyebrow:  "Calgary's Mobile Auto Detailing Experts",
    title:    "Elevate Your <span>Ride.</span>",
    subtitle: "We come to you — at home, at work, wherever. Your time is valuable; let us handle the dirty work.",
    bgImage:  "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1600&q=80",
  },

  // ── STATS ────────────────────────────────────────────────
  stats: [
    { num: "6+",   label: "Years in Business" },
    { num: "5★",   label: "Google Rating"     },
    { num: "100%", label: "Mobile Service"    },
    { num: "$10",  label: "First-Time Discount"},
  ],

  // ── PACKAGES ─────────────────────────────────────────────
  packages: [
    {
      name:       "Bronze",
      emoji:      "🥉",
      price:      149,
      surcharges: ["SUV & Truck +$40", "3-Row & Minivan +$60"],
      tag:        null,
      sections: [
        {
          label: "Interior Only",
          items: [
            "Full interior vacuum & dusting",
            "Vinyl and leather cleaning",
            "Rubber mats wash and dressing",
            "Cleaning interior glasses",
            "Wipe down all compartments",
          ],
        },
      ],
      note: null,
    },
    {
      name:       "Silver",
      emoji:      "🥈",
      price:      199,
      surcharges: ["SUV & Truck +$40", "3-Row & Minivan +$70"],
      tag:        null,
      sections: [
        {
          label: "Interior Only",
          items: [
            "Car seats & carpet shampoo",
            "Full interior vacuum & dusting",
            "High-pressure air cleaning",
            "Leather & vinyl conditioning",
            "Cleaning interior glass surfaces",
            "Odorization & refreshing",
            "Fabric mats shampoo",
            "Rubber mats wash and dressing",
            "Trunk cleaning",
          ],
        },
      ],
      note: "* Rates may vary based on car condition",
    },
    {
      name:       "Gold",
      emoji:      "🥇",
      price:      269,
      surcharges: ["SUV & Truck +$40", "3-Row & Minivan +$60"],
      tag:        "Most Popular",
      sections: [
        {
          label: "Interior",
          items: [
            "Car seats & carpet shampoo",
            "Full interior vacuum & dusting",
            "High-pressure air cleaning",
            "Leather & vinyl conditioning",
            "Cleaning interior glass surfaces",
            "Odorization & refreshing",
            "Fabric mats shampoo",
            "Rubber mats wash and dressing",
            "Trunk cleaning",
          ],
        },
        {
          label: "Exterior",
          items: [
            "Hand wash & dry (two-bucket method)",
            "Tire dressing & shine",
            "Chrome cleaning & bug removal",
          ],
        },
      ],
      note: null,
    },
    {
      name:       "Platinum",
      emoji:      "💎",
      price:      349,
      surcharges: ["SUV & Truck +$50", "7-Seater & Minivan +$100"],
      tag:        "Premium",
      sections: [
        {
          label: "Interior",
          items: [
            "Car seats & carpet shampoo",
            "Full interior vacuum & dusting",
            "High-pressure air cleaning",
            "Leather & vinyl conditioning",
            "Cleaning interior glass surfaces",
            "Odorization & refreshing",
            "Fabric mats shampoo",
            "Rubber mats wash and dressing",
            "Trunk cleaning",
            "Salt stain treatment & removal",
            "OZONE odor treatment",
          ],
        },
        {
          label: "Exterior",
          items: [
            "Hand wash & dry",
            "Tire dressing & shine",
            "Chrome cleaning",
            "Exterior clay bar",
            "Waxing",
          ],
        },
      ],
      note: null,
    },
  ],

  // ── SERVICES ─────────────────────────────────────────────
  servicesIntro: "Elevate your car's appearance and hygiene with our comprehensive mobile detailing services in Calgary. We use premium products and techniques to deliver exceptional results — wherever you are.",

  services: [
    {
      icon:  "🚿",
      title: "Car Wash",
      desc:  "Professional two-bucket hand wash and dry for a streak-free, spotless finish.",
    },
    {
      icon:  "🔧",
      title: "Engine Bay Clean Up",
      desc:  "Careful degreasing and detailing of your engine bay to keep things looking factory-fresh.",
    },
    {
      icon:  "✨",
      title: "Car Waxing & Paint Correction",
      desc:  "Restore your paint's depth and gloss with our professional waxing and correction services.",
    },
    {
      icon:  "🪄",
      title: "Clay Bar Treatment",
      desc:  "Remove embedded contaminants from your paint surface for a glass-smooth feel.",
    },
    {
      icon:  "💨",
      title: "Ozone Odor Removal",
      desc:  "Eliminate stubborn odors at the molecular level with professional ozone treatment.",
    },
    {
      icon:  "🛡️",
      title: "Interior Deep Clean",
      desc:  "Full shampoo, conditioning, and protection for every interior surface.",
    },
  ],

  // ── PHOTOS ───────────────────────────────────────────────
  // Replace these URLs with your own photos anytime
  photos: [
    { url: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80", caption: "Interior Detail" },
    { url: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80", caption: "Exterior Wash"   },
    { url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80", caption: "Wheel Detail"    },
    { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", caption: "Full Detail"      },
    { url: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80", caption: "Leather Care"    },
    { url: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80", caption: "Paint Shine"     },
  ],

  // ── REVIEWS ──────────────────────────────────────────────
  reviews: [
    {
      name:   "Samantha Trimble",
      stars:  5,
      text:   "They were so professional and kind and did a truly amazing job. The inside of my car looks brand new. For reference, the interior had close to twenty years of spills, stains, dust, and dirt. The pricing was so reasonable and the service was wonderful. Thank you!",
    },
    {
      name:   "Mina Duhra",
      stars:  5,
      text:   "Ever-Detail was awesome! They came to our house right on time with all their equipment. Our car had milk spilled on the seats and they did an amazing job shampooing the interior. Compared to other companies, they were very fairly priced. I would 100% recommend them!",
    },
    {
      name:   "Stephen Ma",
      stars:  5,
      text:   "Had my old 2009 Corolla in need of cleaning and Ever-Detail came by on time, doing an excellent job bringing it back to showcase condition. Service was prompt, answered swiftly over text and calls. Highly recommend Ever-Detail Mobile Detailing!",
    },
  ],

  // ── BOOKING ──────────────────────────────────────────────
  // Replace this with your actual Square booking link
  squareBookingLink: "https://squareup.com/appointments/book",

  // ── DISCLAIMER ───────────────────────────────────────────
  disclaimer: "Customers are liable for their own belongings, and Ever-Detail is not responsible for any personal property losses. We require all customers to have a functioning water outlet and power outlet available at the time of service.",
};

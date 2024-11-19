db.category.insertMany([
    {
      name: "Electronics & Gadgets",
      is_active: true,
      rank: 1,
      tags:[],
      subcategory: [
        { name: "Smartphones & Accessories", is_active: true },
        { name: "Computers & Laptops", is_active: true },
        { name: "Wearable Tech", is_active: true },
        { name: "Cameras & Drones", is_active: true },
        { name: "Audio Devices", is_active: true }
      ]
    },
    {
      name: "Fashion & Apparel",
      is_active: true,
      rank: 2,
      subcategory: [
        { name: "Men's Clothing", is_active: true },
        { name: "Women's Clothing", is_active: true },
        { name: "Children's Clothing", is_active: true },
        { name: "Footwear", is_active: true },
        { name: "Accessories (Bags, Jewelry, Sunglasses, etc.)", is_active: true },
        { name: "Watches", is_active: true }
      ]
    },
    {
      name: "Groceries & Essentials",
      is_active: true,
      rank: 3,
      subcategory: [
        { name: "Fresh Produce", is_active: true },
        { name: "Beverages", is_active: true },
        { name: "Snacks", is_active: true },
        { name: "Household Supplies", is_active: true }
      ]
    },
    {
      name: "Health & Wellness",
      is_active: true,
      rank: 4,
      subcategory: [
        { name: "Doctors", is_active: true },
        { name: "Senior Care", is_active: true },
        { name: "Physiotherapy", is_active: true },
        { name: "Clinics & Hospitals", is_active: true },
        { name: "Pharmacy", is_active: true },
        { name: "Fitness Equipments", is_active: true },
        { name: "Gym & Yoga", is_active: true }
      ]
    },
    {
      name: "Beauty & Personal Care",
      is_active: true,
      rank: 5,
      subcategory: [
        { name: "Beauty Parlour", is_active: true },
        { name: "Hair Salon & Spa", is_active: true },
        { name: "Makeup Products", is_active: true },
        { name: "Grooming Tools", is_active: true }
      ]
    },
    {
      name: "Home & Living",
      is_active: true,
      rank: 6,
      subcategory: [
        { name: "Furniture", is_active: true },
        { name: "Kitchen Appliances", is_active: true },
        { name: "Home Décor", is_active: true },
        { name: "Bedding & Bath", is_active: true },
        { name: "Lighting", is_active: true }
      ]
    },
    {
      name: "Sports & Outdoor",
      is_active: true,
      rank: 7,
      subcategory: [
        { name: "Sports Equipment", is_active: true },
        { name: "Outdoor Gear", is_active: true },
        { name: "Fitness Apparel", is_active: true },
        { name: "Bicycles & Accessories", is_active: true }
      ]
    },
    {
      name: "Digital Services",
      is_active: true,
      rank: 8,
      subcategory: [
        { name: "Streaming Services", is_active: true },
        { name: "Software & Applications", is_active: true },
        { name: "Web Design & Development", is_active: true },
        { name: "IT Support", is_active: true },
        { name: "Digital Marketing", is_active: true }
      ]
    },
    {
      name: "Automotive",
      is_active: true,
      rank: 9,
      subcategory: [
        { name: "Vehicle", is_active: true },
        { name: "Car Accessories", is_active: true },
        { name: "Motorbike Parts", is_active: true },
        { name: "Tools & Equipment", is_active: true },
        { name: "Vehicle Maintenance", is_active: true }
      ]
    },
    {
      name: "Toys & Kids",
      is_active: true,
      rank: 10,
      subcategory: [
        { name: "Toys & Games", is_active: true },
        { name: "Baby Gear & Essentials", is_active: true },
        { name: "Educational Toys", is_active: true }
      ]
    },
    {
      name: "Hospitality",
      is_active: true,
      rank: 11,
      subcategory: [
        { name: "Hotels", is_active: true },
        { name: "Cafe", is_active: true },
        { name: "Bars & Restaurants", is_active: true },
        { name: "Resorts", is_active: true },
        { name: "Lodge & Guest House", is_active: true },
        { name: "Event Management", is_active: true }
      ]
    },
    {
      name: "Gifts & Events",
      is_active: true,
      rank: 12,
      subcategory: [
        { name: "Flowers & Gift Baskets", is_active: true },
        { name: "Personalized Gifts", is_active: true },
        { name: "Party Supplies", is_active: true },
        { name: "Event Services", is_active: true }
      ]
    },
    {
      name: "Real Estate & Property",
      is_active: true,
      rank: 13,
      subcategory: [
        { name: "Rental Listings", is_active: true },
        { name: "Paying Guests (PG)", is_active: true },
        { name: "Buy/Sell Properties (Land & Houses)", is_active: true },
        { name: "Realestate (Apartments)", is_active: true },
        { name: "Property Management Services", is_active: true }
      ]
    },
    {
      name: "Education",
      is_active: true,
      rank: 14,
      subcategory: [
        { name: "Schools", is_active: true },
        { name: "Universities/Colleges", is_active: true },
        { name: "Tuition Academy", is_active: true },
        { name: "Other Activities", is_active: true }
      ]
    },
    {
      name: "Jobs and Services",
      is_active: true,
      rank: 15,
      subcategory: [
        { name: "Cleaning & Maintenance", is_active: true },
        { name: "Handyman Services", is_active: true },
        { name: "Legal & Financial Services", is_active: true },
        { name: "Tutoring Services", is_active: true }
      ]
    },
    {
      name: "Pet Care",
      is_active: true,
      rank: 16,
      subcategory: [
        { name: "Veterinary", is_active: true },
        { name: "Pet Grooming", is_active: true },
        { name: "Pet Training", is_active: true },
        { name: "Pet Boarding", is_active: true },
        { name: "Pet Store", is_active: true }
      ]
    },
    {
      name: "Books & Stationery",
      is_active: true,
      rank: 17,
      subcategory: [
        { name: "Textbooks & Academic", is_active: true },
        { name: "Notebooks & Writing Tools", is_active: true },
        { name: "Art Supplies", is_active: true }
      ]
    },
    {
      name: "Arts & Crafts",
      is_active: true,
      rank: 18,
      subcategory: [
        { name: "Handcrafted Items", is_active: true },
        { name: "DIY Kits", is_active: true },
        { name: "Art Supplies", is_active: true },
        { name: "Custom Orders", is_active: true }
      ]
    },
    {
      name: "Tourism",
      is_active: true,
      rank: 19,
      subcategory: []
    }
  ]);
  
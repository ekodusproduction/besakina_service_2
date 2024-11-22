export const categories = [{
  "_id": {
    "$oid": "672c8a2a61fab108d84226a6"
  },
  "name": "Electronics & Gadgets",
  "is_active": true,
  "rank": 1,
  "tags": [
    "technology",
    "gadgets",
    "latest tech",
    "electronic devices",
    "smart devices",
    "innovative tech",
    "digital gadgets",
    "consumer electronics",
    "smart technology",
    "must-have tech"
  ],
  "subcategory": [
    {
      "name": "Smartphones & Accessories",
      "is_active": true,
      "tags": [
        "smartphones",
        "mobile accessories",
        "phone cases",
        "screen protectors",
        "chargers",
        "headphones",
        "smartphone cameras",
        "mobile devices",
        "wireless chargers",
        "Android",
        "iOS"
      ]
    },
    {
      "name": "Computers & Laptops",
      "is_active": true,
      "tags": [
        "laptops",
        "desktop computers",
        "PC accessories",
        "computer hardware",
        "keyboards",
        "monitors",
        "laptop accessories",
        "Windows",
        "macOS",
        "notebooks",
        "processors"
      ]
    },
    {
      "name": "Wearable Tech",
      "is_active": true,
      "tags": [
        "smartwatches",
        "fitness trackers",
        "wearable technology",
        "VR headsets",
        "wearable gadgets",
        "smart glasses",
        "health tracking",
        "activity monitors",
        "sleep tracking",
        "Bluetooth wearables",
        "wearable accessories"
      ]
    },
    {
      "name": "Cameras & Drones",
      "is_active": true,
      "tags": [
        "digital cameras",
        "drones",
        "action cameras",
        "camera accessories",
        "photography",
        "videography",
        "camera lenses",
        "aerial photography",
        "drone accessories",
        "DSLR",
        "mirrorless cameras"
      ]
    },
    {
      "name": "Audio Devices",
      "is_active": true,
      "tags": [
        "headphones",
        "earbuds",
        "speakers",
        "sound systems",
        "Bluetooth audio",
        "wireless speakers",
        "audio accessories",
        "home audio",
        "soundbars",
        "microphones",
        "audio equipment"
      ]
    }
  ],
  "sellsSchema": {
    "brand": {
      "type": "String",
      "required": true
    },
    "modelName": {
      "type": "String",
      "required": true
    },
    "price": {
      "type": "Number",
      "required": true
    }
  },
  "marketingSchema": {},
  "schema": {
    "bsonType": "object",
    "required": [
      "brand",
      "modelName",
      "price"
    ],
    "properties": {
      "brand": {
        "bsonType": "string"
      },
      "modelName": {
        "bsonType": "string"
      },
      "price": {
        "bsonType": "double"
      }
    }
  },
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226a7"
  },
  "name": "Fashion & Apparel",
  "is_active": true,
  "rank": 2,
  "tags": [
    "clothing",
    "apparel",
    "fashion trends",
    "style",
    "outfits",
    "wardrobe",
    "seasonal fashion",
    "trendy clothes",
    "fashion accessories",
    "fashion essentials"
  ],
  "subcategory": [
    {
      "name": "Men's Clothing",
      "is_active": true,
      "tags": [
        "menswear",
        "men's fashion",
        "casual wear",
        "formal wear",
        "t-shirts",
        "jeans",
        "jackets",
        "shirts",
        "suits",
        "outerwear",
        "activewear"
      ]
    },
    {
      "name": "Women's Clothing",
      "is_active": true,
      "tags": [
        "womenswear",
        "women's fashion",
        "dresses",
        "skirts",
        "blouses",
        "tops",
        "women's jeans",
        "evening wear",
        "casual wear",
        "workwear",
        "trendy styles"
      ]
    },
    {
      "name": "Children's Clothing",
      "is_active": true,
      "tags": [
        "kids fashion",
        "children's wear",
        "baby clothes",
        "toddler clothing",
        "school uniforms",
        "play clothes",
        "kids dresses",
        "boys clothing",
        "girls clothing",
        "kids activewear",
        "infant wear"
      ]
    },
    {
      "name": "Footwear",
      "is_active": true,
      "tags": [
        "shoes",
        "sneakers",
        "boots",
        "heels",
        "sandals",
        "casual shoes",
        "formal shoes",
        "athletic shoes",
        "men's shoes",
        "women's shoes",
        "kids shoes"
      ]
    },
    {
      "name": "Accessories (Bags, Jewelry, Sunglasses, etc.)",
      "is_active": true,
      "tags": [
        "fashion accessories",
        "handbags",
        "jewelry",
        "sunglasses",
        "wallets",
        "belts",
        "scarves",
        "fashion jewelry",
        "earrings",
        "necklaces",
        "accessory essentials"
      ]
    },
    {
      "name": "Watches",
      "is_active": true,
      "tags": [
        "watches",
        "men's watches",
        "women's watches",
        "smartwatches",
        "luxury watches",
        "sports watches",
        "fashion watches",
        "digital watches",
        "analog watches",
        "classic watches",
        "trendy watches"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226a8"
  },
  "name": "Groceries & Essentials",
  "is_active": true,
  "rank": 3,
  "tags": [
    "grocery shopping",
    "daily essentials",
    "pantry items",
    "food supplies",
    "household essentials",
    "home needs",
    "basic groceries",
    "weekly groceries",
    "online grocery",
    "kitchen essentials"
  ],
  "subcategory": [
    {
      "name": "Fresh Produce",
      "is_active": true,
      "tags": [
        "fresh fruits",
        "fresh vegetables",
        "organic produce",
        "farm produce",
        "seasonal fruits",
        "local vegetables",
        "herbs",
        "greens",
        "fresh food",
        "organic vegetables",
        "healthy food"
      ]
    },
    {
      "name": "Beverages",
      "is_active": true,
      "tags": [
        "drinks",
        "juices",
        "soft drinks",
        "tea",
        "coffee",
        "energy drinks",
        "health drinks",
        "cold beverages",
        "hot beverages",
        "refreshments",
        "hydration"
      ]
    },
    {
      "name": "Snacks",
      "is_active": true,
      "tags": [
        "chips",
        "cookies",
        "biscuits",
        "snack food",
        "healthy snacks",
        "crisps",
        "sweets",
        "savory snacks",
        "on-the-go snacks",
        "packaged snacks",
        "quick bites"
      ]
    },
    {
      "name": "Household Supplies",
      "is_active": true,
      "tags": [
        "cleaning supplies",
        "laundry essentials",
        "kitchen cleaners",
        "detergents",
        "dish soap",
        "disinfectants",
        "garbage bags",
        "toilet paper",
        "hand soap",
        "household items",
        "home cleaning"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226a9"
  },
  "name": "Health & Wellness",
  "is_active": true,
  "rank": 4,
  "tags": [
    "healthcare",
    "wellness",
    "mental health",
    "physical health",
    "healthy lifestyle",
    "medical services",
    "self-care",
    "health essentials",
    "fitness",
    "wellness products"
  ],
  "subcategory": [
    {
      "name": "Doctors",
      "is_active": true,
      "tags": [
        "medical consultation",
        "general physician",
        "specialists",
        "doctor appointments",
        "health checkup",
        "medical advice",
        "telemedicine",
        "online consultation",
        "family doctor",
        "health professionals",
        "primary care"
      ]
    },
    {
      "name": "Senior Care",
      "is_active": true,
      "tags": [
        "elderly care",
        "senior living",
        "assisted living",
        "nursing care",
        "home healthcare",
        "caregivers",
        "mobility aids",
        "senior wellness",
        "age-friendly services",
        "elder care essentials",
        "retirement care"
      ]
    },
    {
      "name": "Physiotherapy",
      "is_active": true,
      "tags": [
        "physical therapy",
        "rehabilitation",
        "pain relief",
        "exercise therapy",
        "mobility recovery",
        "injury treatment",
        "muscle therapy",
        "sports injury",
        "therapists",
        "orthopedic therapy",
        "recovery exercises"
      ]
    },
    {
      "name": "Clinics & Hospitals",
      "is_active": true,
      "tags": [
        "medical clinics",
        "hospitals",
        "emergency services",
        "healthcare facilities",
        "medical centers",
        "surgery centers",
        "urgent care",
        "outpatient care",
        "inpatient services",
        "specialty clinics",
        "healthcare providers"
      ]
    },
    {
      "name": "Pharmacy",
      "is_active": true,
      "tags": [
        "medications",
        "prescriptions",
        "over-the-counter drugs",
        "pharmacy services",
        "health supplements",
        "medical supplies",
        "drugstore",
        "online pharmacy",
        "healthcare products",
        "pharmacy essentials",
        "medicine delivery"
      ]
    },
    {
      "name": "Fitness Equipments",
      "is_active": true,
      "tags": [
        "exercise equipment",
        "home gym",
        "workout gear",
        "treadmills",
        "dumbbells",
        "fitness machines",
        "strength training",
        "cardio equipment",
        "yoga mats",
        "resistance bands",
        "home workouts"
      ]
    },
    {
      "name": "Gym & Yoga",
      "is_active": true,
      "tags": [
        "yoga classes",
        "fitness classes",
        "gym memberships",
        "meditation",
        "yoga studios",
        "workout programs",
        "group fitness",
        "mindfulness",
        "Pilates",
        "personal trainers",
        "holistic health"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226aa"
  },
  "name": "Beauty & Personal Care",
  "is_active": true,
  "rank": 5,
  "tags": [
    "beauty products",
    "personal care",
    "skincare",
    "cosmetics",
    "self-care",
    "haircare",
    "beauty essentials",
    "makeup",
    "fragrance",
    "spa treatments",
    "grooming",
    "beauty tips",
    "natural beauty",
    "body care",
    "beauty trends"
  ],
  "subcategory": [
    {
      "name": "Beauty Parlour",
      "is_active": true,
      "tags": [
        "beauty services",
        "facials",
        "waxing",
        "manicure",
        "pedicure",
        "skin treatments",
        "salon services",
        "bridal makeup",
        "makeover",
        "eyebrow shaping",
        "beauty therapy",
        "glamour services",
        "party makeup",
        "beauty packages",
        "hair spa"
      ]
    },
    {
      "name": "Hair Salon & Spa",
      "is_active": true,
      "tags": [
        "haircuts",
        "hair coloring",
        "hair styling",
        "blowouts",
        "hair treatments",
        "scalp treatments",
        "hair care",
        "men's grooming",
        "women's hair salon",
        "bridal hair",
        "hair spa",
        "hair repair",
        "straightening",
        "curly hair care",
        "hair extensions"
      ]
    },
    {
      "name": "Makeup Products",
      "is_active": true,
      "tags": [
        "foundation",
        "lipstick",
        "eyeshadow",
        "blush",
        "concealer",
        "mascara",
        "highlighter",
        "makeup brushes",
        "compact powder",
        "primer",
        "beauty blender",
        "makeup palettes",
        "face powder",
        "eyeliner",
        "makeup essentials"
      ]
    },
    {
      "name": "Grooming Tools",
      "is_active": true,
      "tags": [
        "shaving kits",
        "trimmers",
        "electric shavers",
        "razors",
        "nail clippers",
        "hair dryers",
        "hair straighteners",
        "curling irons",
        "tweezers",
        "face rollers",
        "pedicure kits",
        "grooming sets",
        "men's grooming tools",
        "women's grooming tools",
        "personal hygiene tools"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226ab"
  },
  "name": "Home & Living",
  "is_active": true,
  "rank": 6,
  "tags": [
    "home essentials",
    "living space",
    "interior design",
    "home improvement",
    "furniture",
    "home decor",
    "appliances",
    "bedding",
    "bathroom essentials",
    "lighting",
    "kitchen tools",
    "cozy home",
    "modern home",
    "organization",
    "home accessories"
  ],
  "subcategory": [
    {
      "name": "Furniture",
      "is_active": true,
      "tags": [
        "sofas",
        "beds",
        "dining tables",
        "chairs",
        "wardrobes",
        "office furniture",
        "outdoor furniture",
        "bookshelves",
        "coffee tables",
        "TV stands",
        "storage units",
        "home office",
        "recliners",
        "study tables",
        "furniture sets"
      ]
    },
    {
      "name": "Kitchen Appliances",
      "is_active": true,
      "tags": [
        "microwave",
        "blenders",
        "coffee maker",
        "toaster",
        "refrigerator",
        "oven",
        "stove",
        "dishwasher",
        "kitchen gadgets",
        "food processors",
        "cookware",
        "kitchen tools",
        "juicer",
        "electric kettle",
        "kitchen essentials"
      ]
    },
    {
      "name": "Home Décor",
      "is_active": true,
      "tags": [
        "wall art",
        "vases",
        "rugs",
        "curtains",
        "photo frames",
        "mirrors",
        "candle holders",
        "clocks",
        "planters",
        "table decor",
        "artificial plants",
        "throw pillows",
        "decorative accents",
        "centerpieces",
        "sculptures"
      ]
    },
    {
      "name": "Bedding & Bath",
      "is_active": true,
      "tags": [
        "bed sheets",
        "duvets",
        "pillow covers",
        "bath towels",
        "comforters",
        "mattress protectors",
        "shower curtains",
        "bath mats",
        "bedding sets",
        "bath accessories",
        "blankets",
        "pillows",
        "bed linens",
        "bath robes",
        "bathroom essentials"
      ]
    },
    {
      "name": "Lighting",
      "is_active": true,
      "tags": [
        "table lamps",
        "ceiling lights",
        "wall sconces",
        "floor lamps",
        "chandeliers",
        "LED lights",
        "outdoor lighting",
        "night lights",
        "pendant lights",
        "decorative lights",
        "task lighting",
        "smart lighting",
        "ambient lighting",
        "energy-efficient lights",
        "reading lamps"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226ac"
  },
  "name": "Sports & Outdoor",
  "is_active": true,
  "rank": 7,
  "tags": [
    "sports gear",
    "outdoor activities",
    "fitness",
    "recreation",
    "exercise equipment",
    "active lifestyle",
    "adventure sports",
    "sportswear",
    "cycling",
    "hiking gear",
    "outdoor sports",
    "fitness accessories",
    "camping gear",
    "sporting goods",
    "workout essentials"
  ],
  "subcategory": [
    {
      "name": "Sports Equipment",
      "is_active": true,
      "tags": [
        "cricket equipment",
        "basketballs",
        "football",
        "tennis rackets",
        "golf clubs",
        "badminton",
        "swimming gear",
        "volleyball",
        "sports balls",
        "table tennis",
        "boxing gloves",
        "sports nets",
        "dumbbells",
        "yoga mats",
        "resistance bands"
      ]
    },
    {
      "name": "Outdoor Gear",
      "is_active": true,
      "tags": [
        "camping tents",
        "sleeping bags",
        "backpacks",
        "hiking boots",
        "water bottles",
        "survival kits",
        "flashlights",
        "binoculars",
        "compasses",
        "trekking poles",
        "portable stoves",
        "camping chairs",
        "outdoor tools",
        "campfire equipment",
        "travel accessories"
      ]
    },
    {
      "name": "Fitness Apparel",
      "is_active": true,
      "tags": [
        "gym clothes",
        "running shoes",
        "sports bras",
        "leggings",
        "athletic shorts",
        "sweat-wicking shirts",
        "hoodies",
        "compression wear",
        "yoga pants",
        "tank tops",
        "workout gear",
        "fitness wear",
        "performance wear",
        "training shoes",
        "activewear"
      ]
    },
    {
      "name": "Bicycles & Accessories",
      "is_active": true,
      "tags": [
        "mountain bikes",
        "road bikes",
        "bike helmets",
        "cycling gloves",
        "bike lights",
        "bicycle pumps",
        "bike locks",
        "cycling jerseys",
        "saddles",
        "bike tools",
        "bicycle tires",
        "water bottle holders",
        "electric bikes",
        "cycling shoes",
        "bike racks"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226ad"
  },
  "name": "Digital Services",
  "is_active": true,
  "rank": 8,
  "subcategory": [
    {
      "name": "Streaming Services",
      "is_active": true
    },
    {
      "name": "Software & Applications",
      "is_active": true
    },
    {
      "name": "Web Design & Development",
      "is_active": true
    },
    {
      "name": "IT Support",
      "is_active": true
    },
    {
      "name": "Digital Marketing",
      "is_active": true
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226ae"
  },
  "name": "Automotive",
  "is_active": true,
  "rank": 9,
  "tags": [
    "vehicles",
    "cars",
    "motorbikes",
    "automobile accessories",
    "car care",
    "vehicle parts",
    "auto repair",
    "car customization",
    "automotive tools",
    "vehicle maintenance",
    "road safety",
    "auto essentials",
    "car interiors",
    "vehicle upgrades",
    "garage equipment"
  ],
  "subcategory": [
    {
      "name": "Vehicle",
      "is_active": true,
      "tags": [
        "new cars",
        "used cars",
        "electric vehicles",
        "scooters",
        "motorcycles",
        "SUVs",
        "sedans",
        "vans",
        "bicycles",
        "off-road vehicles",
        "commercial vehicles",
        "luxury cars",
        "family cars",
        "convertibles",
        "auto market"
      ]
    },
    {
      "name": "Car Accessories",
      "is_active": true,
      "tags": [
        "seat covers",
        "car mats",
        "steering wheel covers",
        "air fresheners",
        "phone mounts",
        "dash cams",
        "car organizers",
        "car chargers",
        "audio systems",
        "GPS devices",
        "car lights",
        "exterior styling",
        "interior styling",
        "window tints",
        "car decals"
      ]
    },
    {
      "name": "Motorbike Parts",
      "is_active": true,
      "tags": [
        "helmets",
        "bike exhausts",
        "handlebars",
        "bike mirrors",
        "bike covers",
        "engine parts",
        "brakes",
        "tyres",
        "bike lights",
        "saddlebags",
        "motorbike maintenance",
        "bike accessories",
        "shock absorbers",
        "air filters",
        "bike security"
      ]
    },
    {
      "name": "Tools & Equipment",
      "is_active": true,
      "tags": [
        "wrenches",
        "jacks",
        "tire pressure gauges",
        "tool kits",
        "oil cans",
        "socket sets",
        "car lifts",
        "battery chargers",
        "screwdrivers",
        "multimeters",
        "diagnostic tools",
        "torque wrenches",
        "air compressors",
        "jump starters",
        "garage tools"
      ]
    },
    {
      "name": "Vehicle Maintenance",
      "is_active": true,
      "tags": [
        "oil changes",
        "tire rotation",
        "car wash supplies",
        "battery replacement",
        "engine tuning",
        "brake repair",
        "vehicle inspection",
        "fluid top-up",
        "windshield repair",
        "detailing",
        "exterior cleaning",
        "paint protection",
        "rust prevention",
        "car waxing",
        "auto services"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226af"
  },
  "name": "Toys & Kids",
  "is_active": true,
  "rank": 10,
  "tags": [
    "kids toys",
    "baby products",
    "playtime",
    "children's toys",
    "fun for kids",
    "learning toys",
    "toys for toddlers",
    "baby essentials",
    "kids games",
    "child development",
    "educational toys",
    "toys for boys",
    "toys for girls",
    "playsets",
    "gift ideas for kids"
  ],
  "subcategory": [
    {
      "name": "Toys & Games",
      "is_active": true,
      "tags": [
        "action figures",
        "board games",
        "puzzles",
        "plush toys",
        "dolls",
        "cars & trucks",
        "lego sets",
        "building blocks",
        "musical toys",
        "remote control toys",
        "art & crafts",
        "toy animals",
        "tricycles",
        "pretend play",
        "video games for kids"
      ]
    },
    {
      "name": "Baby Gear & Essentials",
      "is_active": true,
      "tags": [
        "baby strollers",
        "baby carriers",
        "diaper bags",
        "baby cribs",
        "high chairs",
        "baby monitors",
        "baby swings",
        "car seats",
        "baby bottles",
        "breastfeeding accessories",
        "changing tables",
        "baby toys",
        "diapers",
        "baby clothing",
        "baby blankets"
      ]
    },
    {
      "name": "Educational Toys",
      "is_active": true,
      "tags": [
        "learning toys",
        "STEM toys",
        "building toys",
        "math games",
        "science kits",
        "puzzle games",
        "language development",
        "interactive books",
        "creative play",
        "cognitive toys",
        "brain development",
        "motor skill toys",
        "early learning toys",
        "sensory toys",
        "educational games"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226b0"
  },
  "name": "Hospitality",
  "is_active": true,
  "rank": 11,
  "tags": [
    "hotels",
    "restaurants",
    "cafes",
    "resorts",
    "event venues",
    "guest houses",
    "hospitality services",
    "event management",
    "luxury hotels",
    "budget hotels",
    "catering services",
    "bars",
    "tourism",
    "vacation rentals",
    "holiday accommodations"
  ],
  "subcategory": [
    {
      "name": "Hotels",
      "is_active": true,
      "tags": [
        "luxury hotels",
        "budget hotels",
        "5-star hotels",
        "business hotels",
        "family hotels",
        "resort hotels",
        "boutique hotels",
        "hotel booking",
        "hotel deals",
        "hotels near me",
        "spa hotels",
        "pet-friendly hotels",
        "all-inclusive hotels",
        "eco-friendly hotels",
        "hotel amenities"
      ]
    },
    {
      "name": "Cafe",
      "is_active": true,
      "tags": [
        "coffee shops",
        "cafes near me",
        "espresso",
        "lattes",
        "cold brew",
        "vegan cafes",
        "breakfast cafes",
        "bakery cafes",
        "coffee beans",
        "tea cafes",
        "cafe menus",
        "pastries",
        "brunch spots",
        "local cafes",
        "cafe culture"
      ]
    },
    {
      "name": "Bars & Restaurants",
      "is_active": true,
      "tags": [
        "fine dining",
        "casual dining",
        "bars",
        "pubs",
        "happy hour",
        "seafood restaurants",
        "vegetarian restaurants",
        "cuisine",
        "sushi bars",
        "food delivery",
        "alcoholic drinks",
        "cocktail bars",
        "wine bars",
        "international cuisine",
        "family-friendly restaurants"
      ]
    },
    {
      "name": "Resorts",
      "is_active": true,
      "tags": [
        "luxury resorts",
        "beach resorts",
        "spa resorts",
        "mountain resorts",
        "eco resorts",
        "all-inclusive resorts",
        "resort amenities",
        "destination resorts",
        "resort booking",
        "vacation resorts",
        "honeymoon resorts",
        "resort activities",
        "family resorts",
        "golf resorts",
        "wellness resorts"
      ]
    },
    {
      "name": "Lodge & Guest House",
      "is_active": true,
      "tags": [
        "bed and breakfast",
        "guest houses",
        "lodge booking",
        "budget accommodations",
        "holiday lodge",
        "rural guest houses",
        "private lodges",
        "hostel accommodations",
        "short stay lodgings",
        "family guest house",
        "eco-friendly guest houses",
        "pet-friendly lodges",
        "holiday cottages",
        "lodge amenities",
        "vacation rentals"
      ]
    },
    {
      "name": "Event Management",
      "is_active": true,
      "tags": [
        "event planning",
        "wedding planning",
        "corporate events",
        "event venues",
        "party planning",
        "event coordination",
        "event decorations",
        "catering services",
        "event photography",
        "event rentals",
        "conference planning",
        "team building events",
        "event services",
        "event organizers",
        "event logistics"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226b1"
  },
  "name": "Gifts & Events",
  "is_active": true,
  "rank": 12,
  "tags": [
    "gifts",
    "party supplies",
    "event planning",
    "personalized gifts",
    "gift baskets",
    "flowers",
    "special occasion gifts",
    "event services",
    "birthday gifts",
    "anniversary gifts",
    "holiday gifts",
    "wedding gifts",
    "custom gifts",
    "gifting ideas",
    "event decorations"
  ],
  "subcategory": [
    {
      "name": "Flowers & Gift Baskets",
      "is_active": true,
      "tags": [
        "flower delivery",
        "gift baskets",
        "floral arrangements",
        "fresh flowers",
        "roses",
        "gift hampers",
        "wedding flowers",
        "birthday flowers",
        "sympathy flowers",
        "occasion flowers",
        "luxury gift baskets",
        "seasonal flowers",
        "customized gift baskets",
        "gourmet gift baskets",
        "flower bouquets"
      ]
    },
    {
      "name": "Personalized Gifts",
      "is_active": true,
      "tags": [
        "custom gifts",
        "personalized items",
        "engraved gifts",
        "name gifts",
        "custom mugs",
        "personalized jewelry",
        "photo gifts",
        "custom t-shirts",
        "birthday personalized gifts",
        "engraved watches",
        "personalized home decor",
        "personalized gifts for him",
        "personalized gifts for her",
        "customized gifts for kids",
        "gift customization"
      ]
    },
    {
      "name": "Party Supplies",
      "is_active": true,
      "tags": [
        "party decorations",
        "birthday party supplies",
        "wedding party supplies",
        "themed party supplies",
        "balloons",
        "party favors",
        "tableware",
        "party hats",
        "streamers",
        "confetti",
        "party kits",
        "gift bags",
        "party invitations",
        "party planning",
        "party balloons"
      ]
    },
    {
      "name": "Event Services",
      "is_active": true,
      "tags": [
        "event planning",
        "event coordination",
        "wedding services",
        "event catering",
        "event photographers",
        "event venues",
        "corporate event services",
        "event decorations",
        "event rentals",
        "event entertainment",
        "party planning",
        "event organizers",
        "birthday event services",
        "conference services",
        "event logistics"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226b2"
  },
  "name": "Real Estate & Property",
  "is_active": true,
  "rank": 13,
  "tags": [
    "real estate",
    "property listings",
    "buy property",
    "sell property",
    "rental property",
    "real estate agents",
    "property management",
    "apartments for rent",
    "land for sale",
    "buy house",
    "property for rent",
    "commercial property",
    "investment property",
    "real estate services",
    "property market"
  ],
  "subcategory": [
    {
      "name": "Rental Listings",
      "is_active": true,
      "tags": [
        "rental properties",
        "apartments for rent",
        "houses for rent",
        "short-term rentals",
        "long-term rentals",
        "vacation rentals",
        "student accommodation",
        "rental listings near me",
        "furnished rentals",
        "unfurnished rentals",
        "rental homes",
        "commercial rentals",
        "office space rentals",
        "rental houses",
        "room rentals"
      ]
    },
    {
      "name": "Paying Guests (PG)",
      "is_active": true,
      "tags": [
        "paying guest accommodation",
        "PG for men",
        "PG for women",
        "hostel for rent",
        "paying guest services",
        "single room PG",
        "shared accommodation",
        "budget PG",
        "furnished PG",
        "PG in city center",
        "PG for working professionals",
        "PG near universities",
        "student PG",
        "affordable PG",
        "PG with meals"
      ]
    },
    {
      "name": "Buy/Sell Properties (Land & Houses)",
      "is_active": true,
      "tags": [
        "buy land",
        "sell land",
        "buy house",
        "sell house",
        "property for sale",
        "real estate investment",
        "buy property online",
        "sell property fast",
        "land for sale",
        "residential properties",
        "commercial land",
        "buy farm land",
        "property deals",
        "real estate broker",
        "property market trends"
      ]
    },
    {
      "name": "Realestate (Apartments)",
      "is_active": true,
      "tags": [
        "apartments for sale",
        "buy apartments",
        "real estate apartments",
        "luxury apartments",
        "affordable apartments",
        "apartments near me",
        "flats for sale",
        "studio apartments",
        "2BHK apartments",
        "3BHK apartments",
        "apartment listings",
        "new apartments",
        "investment apartments",
        "apartment for sale near city center",
        "apartment brokers"
      ]
    },
    {
      "name": "Property Management Services",
      "is_active": true,
      "tags": [
        "property management",
        "property managers",
        "landlord services",
        "real estate management",
        "property maintenance",
        "tenant management",
        "real estate services",
        "property leasing",
        "property inspections",
        "maintenance services",
        "rent collection",
        "property valuation",
        "property repairs",
        "tenant screening",
        "property portfolio management"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226b3"
  },
  "name": "Education",
  "is_active": true,
  "rank": 14,
  "tags": [
    "education",
    "learning",
    "schools",
    "universities",
    "colleges",
    "tuition",
    "online education",
    "distance learning",
    "extracurricular activities",
    "academic programs",
    "certification courses",
    "student resources",
    "academic support",
    "education services",
    "e-learning",
    "education industry"
  ],
  "subcategory": [
    {
      "name": "Schools",
      "is_active": true,
      "tags": [
        "primary school",
        "secondary school",
        "high school",
        "best schools",
        "affordable schools",
        "boarding schools",
        "private schools",
        "public schools",
        "international schools",
        "school admissions",
        "school curriculum",
        "school programs",
        "online school",
        "school near me",
        "school for kids"
      ]
    },
    {
      "name": "Universities/Colleges",
      "is_active": true,
      "tags": [
        "universities",
        "colleges",
        "higher education",
        "top universities",
        "college admissions",
        "degree programs",
        "graduate schools",
        "postgraduate courses",
        "undergraduate courses",
        "online university",
        "university degrees",
        "scholarships",
        "international colleges",
        "best universities",
        "distance learning colleges"
      ]
    },
    {
      "name": "Tuition Academy",
      "is_active": true,
      "tags": [
        "tuition classes",
        "private tutoring",
        "math tutoring",
        "science tuition",
        "language academy",
        "online tuition",
        "home tuition",
        "academic coaching",
        "exam preparation",
        "tuition center",
        "tutoring for students",
        "tutoring near me",
        "tutoring services",
        "individual tutoring",
        "group tutoring"
      ]
    },
    {
      "name": "Other Activities",
      "is_active": true,
      "tags": [
        "extracurricular activities",
        "online courses",
        "vocational training",
        "workshops",
        "education events",
        "art classes",
        "music lessons",
        "sports activities",
        "coding bootcamps",
        "leadership programs",
        "language learning",
        "public speaking",
        "debate club",
        "volunteering opportunities",
        "career development"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226b4"
  },
  "name": "Jobs and Services",
  "is_active": true,
  "rank": 15,
  "tags": [
    "job services",
    "professional services",
    "employment",
    "hiring",
    "contract work",
    "freelance jobs",
    "service providers",
    "local services",
    "job listings",
    "workforce solutions",
    "staffing services",
    "employment agencies",
    "business services",
    "work opportunities",
    "service marketplace"
  ],
  "subcategory": [
    {
      "name": "Cleaning & Maintenance",
      "is_active": true,
      "tags": [
        "house cleaning",
        "office cleaning",
        "deep cleaning",
        "apartment cleaning",
        "end of lease cleaning",
        "window cleaning",
        "carpet cleaning",
        "professional cleaning",
        "maintenance services",
        "janitorial services",
        "commercial cleaning",
        "maintenance repair",
        "property maintenance",
        "cleaning company",
        "disinfection services"
      ]
    },
    {
      "name": "Handyman Services",
      "is_active": true,
      "tags": [
        "handyman",
        "home repair",
        "furniture assembly",
        "plumbing",
        "electrical work",
        "painter",
        "carpentry services",
        "appliance installation",
        "home improvement",
        "general repairs",
        "DIY assistance",
        "property repairs",
        "home renovation",
        "fixing services",
        "tile installation"
      ]
    },
    {
      "name": "Legal & Financial Services",
      "is_active": true,
      "tags": [
        "legal services",
        "financial services",
        "lawyers",
        "accounting",
        "tax services",
        "personal finance",
        "business law",
        "estate planning",
        "corporate law",
        "legal consultation",
        "financial advice",
        "insurance services",
        "law firms",
        "financial planning",
        "bankruptcy services"
      ]
    },
    {
      "name": "Tutoring Services",
      "is_active": true,
      "tags": [
        "tutoring",
        "private tutor",
        "online tutoring",
        "math tutor",
        "science tutor",
        "language tutor",
        "home tutoring",
        "exam preparation",
        "test tutoring",
        "student tutoring",
        "academic coaching",
        "tutoring center",
        "subject tutoring",
        "personalized tutoring",
        "tutoring for kids"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226b5"
  },
  "name": "Pet Care",
  "tags": [
    "Pet Supplies",
    "Pet Care",
    "Animal Health",
    "Pet Grooming",
    "Pet Food",
    "Pet Toys",
    "Pet Accessories",
    "Dog Care",
    "Cat Care",
    "Pet Hygiene",
    "Pet Training",
    "Pet Beds",
    "Pet Clothes",
    "Pet Medication",
    "Pet Safety",
    "Pet Health",
    "Pet Insurance",
    "Pet Walking",
    "Pet Adoption",
    "Pet Playtime",
    "Pet Treats"
  ],
  "is_active": true,
  "rank": 16,
  "subcategory": [
    {
      "name": "Veterinary",
      "is_active": true
    },
    {
      "name": "Pet Grooming",
      "is_active": true
    },
    {
      "name": "Pet Training",
      "is_active": true
    },
    {
      "name": "Pet Boarding",
      "is_active": true
    },
    {
      "name": "Pet Store",
      "is_active": true
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226b6"
  },
  "name": "Books & Stationery",
  "tags": [
    "Books",
    "Stationery",
    "Office Supplies",
    "Notebooks",
    "Journals",
    "Pens",
    "Pencils",
    "Art Supplies",
    "Textbooks",
    "Academic Books",
    "E-books",
    "Gift Items",
    "Desk Organizers",
    "Paper Products",
    "Printing Materials",
    "Sticky Notes",
    "Writing Instruments",
    "School Supplies",
    "Planners",
    "Calendars",
    "Bookmarks",
    "Letter Pads",
    "Gift Wrap",
    "Art Stationery"
  ],
  "is_active": true,
  "rank": 17,
  "subcategory": [
    {
      "name": "Textbooks & Academic",
      "is_active": true,
      "tags": [
        "Academic Books",
        "Study Guides",
        "Textbook Rentals",
        "Math Textbooks",
        "Science Textbooks",
        "Engineering Books",
        "Medical Textbooks",
        "Law Books",
        "Online Study Resources",
        "Curriculum Books",
        "College Textbooks",
        "School Textbooks",
        "Textbook Bundles",
        "Test Prep Books",
        "Language Textbooks"
      ]
    },
    {
      "name": "Notebooks & Writing Tools",
      "is_active": true,
      "tags": [
        "Notebooks",
        "Journals",
        "Writing Pads",
        "Pens & Pencils",
        "Stationery Supplies",
        "Diary",
        "Bullet Journals",
        "Sketchbooks",
        "Calligraphy Pens",
        "Markers",
        "Highlighters",
        "Sticky Notes",
        "Paper Clips",
        "Staplers",
        "Fountain Pens"
      ]
    },
    {
      "name": "Art Supplies",
      "is_active": true,
      "tags": [
        "Art Materials",
        "Drawing Tools",
        "Painting Supplies",
        "Brushes & Paints",
        "Canvas & Paper",
        "Sketching Pencils",
        "Oil Paints",
        "Acrylic Paints",
        "Watercolors",
        "Easels",
        "Pastels",
        "Craft Paper",
        "Art Kits",
        "Canvas Boards",
        "Stencils"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226b7"
  },
  "name": "Arts & Crafts",
  "tags": [
    "Handmade",
    "Craft Supplies",
    "Art Materials",
    "DIY Projects",
    "Creative Arts",
    "Painting",
    "Sculpture",
    "Woodworking",
    "Textile Arts",
    "Paper Crafts",
    "Jewelry Making",
    "Knitting & Crochet",
    "Beading",
    "Embroidery",
    "Origami",
    "Calligraphy",
    "Upcycling",
    "Glass Art",
    "Ceramics",
    "Mosaic",
    "Craft Kits",
    "Home Decor",
    "Custom Crafts",
    "Artisan Goods",
    "Craft Workshops"
  ],
  "is_active": true,
  "rank": 18,
  "subcategory": [
    {
      "name": "Handcrafted Items",
      "is_active": true,
      "tags": [
        "Handmade Crafts",
        "Unique Artifacts",
        "Custom Handmade Goods",
        "Artisan Creations",
        "Wooden Crafts",
        "Ceramic Art",
        "Jewelry Making",
        "Handmade Furniture",
        "Macramé Art",
        "Hand-painted Items",
        "Crochet Goods",
        "Knitted Items",
        "Recycled Crafts",
        "Handmade Gifts",
        "Eco-friendly Crafts"
      ]
    },
    {
      "name": "DIY Kits",
      "is_active": true,
      "tags": [
        "DIY Craft Kits",
        "DIY Art Kits",
        "Crafting Supplies",
        "Creative Kits",
        "Embroidery Kits",
        "Painting Kits",
        "Modeling Clay Kits",
        "Jewelry Making Kits",
        "Woodworking Kits",
        "Paper Craft Kits",
        "Home Decor Kits",
        "Mosaic Kits",
        "Sewing Kits",
        "Knitting Kits",
        "Crafting Tools"
      ]
    },
    {
      "name": "Art Supplies",
      "is_active": true,
      "tags": [
        "Art Materials",
        "Painting Supplies",
        "Drawing Tools",
        "Sketchbooks",
        "Brushes & Paints",
        "Watercolors",
        "Acrylic Paints",
        "Oil Paints",
        "Colored Pencils",
        "Pastels",
        "Canvas & Paper",
        "Markers & Pens",
        "Craft Paper",
        "Stencils",
        "Easels"
      ]
    },
    {
      "name": "Custom Orders",
      "is_active": true,
      "tags": [
        "Personalized Crafts",
        "Custom Art",
        "Tailored Gifts",
        "Made-to-Order Items",
        "Custom Jewelry",
        "Bespoke Furniture",
        "Custom T-shirts",
        "Personalized Home Decor",
        "Custom Paintings",
        "Custom Embroidery",
        "Custom Sculptures",
        "Custom Stationery",
        "Custom Woodwork",
        "Handmade Orders",
        "Personalized Gifts"
      ]
    }
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
},
{
  "_id": {
    "$oid": "672c8a2a61fab108d84226b8"
  },
  "name": "Tours & Travel",
  "is_active": true,
  "rank": 19,
  "tags": [
    "Travel Destinations",
    "Vacation Packages",
    "Adventure Tourism",
    "Eco-Tourism",
    "Cultural Tours",
    "Sightseeing",
    "Travel Guides",
    "Tourist Attractions",
    "Luxury Travel",
    "Travel Insurance",
    "Group Tours",
    "Solo Travel",
    "Beach Holidays",
    "Mountain Expeditions",
    "Culinary Tourism",
    "Historical Tours",
    "Wildlife Safari",
    "Cruise Travel",
    "City Breaks",
    "Camping Trips",
    "Adventure Sports",
    "Weekend Getaways",
    "Nature Tours",
    "Family Travel",
    "Sustainable Tourism",
    "Heritage Sites",
    "Road Trips"
  ],
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 24 24\" width=\"300\" height=\"300\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.dev/svgjs\"><g width=\"100%\" height=\"100%\" transform=\"matrix(1,0,0,1,0,0)\"><path d=\"M8.164,8a2.49,2.49,0,0,1-1.579-.594A4.832,4.832,0,0,1,5.028,4.145C4.785,1.651,6.145.181,7.614.017A2.651,2.651,0,0,1,9.6.611a4.177,4.177,0,0,1,1.376,2.9C11.2,5.834,9.962,8,8.164,8ZM2.853,14a2.118,2.118,0,0,1-1.423-.594,5.041,5.041,0,0,1-1.4-3.261c-.22-2.494,1.006-3.964,2.331-4.128a2.234,2.234,0,0,1,1.786.594,4.364,4.364,0,0,1,1.241,2.9C5.589,11.834,4.359,14,2.853,14ZM15.836,8c-1.81,0-3.034-2.166-2.807-4.492h0a4.177,4.177,0,0,1,1.376-2.9A2.654,2.654,0,0,1,16.386.017c1.469.164,2.829,1.634,2.586,4.128a4.835,4.835,0,0,1-1.557,3.262A2.494,2.494,0,0,1,15.836,8Zm5.217,6c-1.886,0-2.827-2.166-2.615-4.492h0a4.3,4.3,0,0,1,1.281-2.9,2.35,2.35,0,0,1,1.846-.594c1.368.164,2.635,1.634,2.409,4.128a4.976,4.976,0,0,1-1.451,3.262A2.23,2.23,0,0,1,21.053,14ZM16,24a4.865,4.865,0,0,1-2.447-.605,3.332,3.332,0,0,0-3.106,0C7.434,25.082,3.922,23.227,4,19c0-4.636,4.507-9,8-9s8,4.364,8,9C20,21.944,18.355,24,16,24Z\" fill=\"url(#SvgjsLinearGradient1083)\" fill-opacity=\"1\" data-original-color=\"#000000ff\" stroke=\"none\" stroke-opacity=\"1\"/></g><defs><linearGradient id=\"SvgjsLinearGradient1083\"><stop stop-opacity=\"1\" stop-color=\"#222a78\" offset=\"0\"/><stop stop-opacity=\"1\" stop-color=\"#000000\" offset=\"1\"/></linearGradient></defs></svg>"
}]
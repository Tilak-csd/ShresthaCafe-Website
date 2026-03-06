export const qa = [
    // GREETING / HELP
    {
        keywords: ["hello", "hi", "hii", "hey", "help", "support", "start"],
        answer:
            `👋 Hello! Welcome to Shrestha Café ☕

I can help you with:
• Our menu & prices
• Opening hours
• Location & contact details
• Table reservations 

Just ask me anything 😊`,
    },

    // INTRODUCTION
    {
        keywords: ["about", "introduction", "intro", "introduce", "cafe", "shrestha", "shrestha cafe", "who are you"],
        answer:
            `☕ Shrestha Café 

A place where every cup feels like home.
At Shrestha Café, we believe great coffee is more than just a drink—it’s an experience. 
We carefully craft every cup using quality beans, refined flavors, and thoughtful techniques, all served with genuine warmth and hospitality.
Whether you’re here to relax, work, or spend time with loved ones, we aim to make every visit comfortable, welcoming, and memorable—every day.

📞 Phone: +977 9700004569
📧 Email: info@shresthacafe.com`,
    },

    // OPENING HOURS
    {
        keywords: ["open", "opening", "hours", "time", "timing"],
        answer:
            `🕒 Opening Hours

Mon – Fri: 8:00 AM – 9:00 PM
Sat: 9:00 AM – 10:00 PM
Sun: 9:00 AM – 8:00 PM`,
    },

    // LOCATION + CONTACT
    {
        keywords: ["location", "where", "address", "telephone", "contact", "phone", "email"],
        answer:
            `📍 Location & Contact

MachaPokhari, Kathmandu, Nepal

📞 Phone: +977 9700004569
📧 Email: info@shresthacafe.com`,
    },

    // RESERVATION
    {
        keywords: ["reservation", "reserv", "reserving", "book", "table", "booking"],
        answer:
            `🪑 Table Reservation

You can make a reservation in two ways:

1️⃣ Online Reservation  
Please visit:
https://shresthacafe.vercel.app/reservation

You’ll need to provide:
• Name  
• Phone  
• Email  
• Date & Time  
• Number of Guests  
• Dining Type  

2️⃣ Direct Contact  
You can also reserve by calling us at:
📞 +977 9700004569

We’ll be happy to assist you 😊`,
    },

    // FULL MENU WITH PRICES
    {
        keywords: ["menu", "food", "coffee", "items", "price", "snacks"],
        answer:
            `🍽️ Our Menu

☕ Coffee
• Classic Espresso – Rs. 180
• Cappuccino – Rs. 250
• Caffè Latte – Rs. 280
• Mocha Delight – Rs. 320
• Iced Americano – Rs. 260
• Vanilla Iced Latte – Rs. 320

🍰 Desserts
• Chocolate Brownie – Rs. 220
• Cheesecake Slice – Rs. 350
• Croissant – Rs. 180

🥪 Snacks
• Grilled Sandwich – Rs. 300`,
    },
    {
        keywords: ["thanks", "thank you", "thx", "ty", "thanku", "thankyou", "appreciate", "appreciated", "much appreciated", "thanks for your help"],
        answer:
            `You are always welcome at Shrestha Café ☕  
We are happy to help—just like serving a perfect cup of coffee.
`
    },
    {
        keywords: ["nice", "cool", "great", "awesome", "helpful"],
        answer:
            `Glad you found it helpful! 😄  
Let me know if you need anything else.`
    },
    {
        keywords: ["vegan", "vegetarian", "veg", "dairy free", "oat milk", "soy milk", "sugar free"],
        answer:
            `🌱 Dietary Options

We aim to be inclusive! 
• We offer **Oat Milk** and **Soy Milk** alternatives for all our coffees (+ Rs. 50).
• Our **Veggie Grilled Sandwich** is a crowd favorite.
• We have sugar-free sweeteners available upon request.

Just let our barista know your preference! ☕`,
    },

    // AMENITIES / WIFI
    {
        keywords: ["wifi", "internet", "work", "laptop", "charging", "plug", "socket", "power"],
        answer:
            `💻 Work & Study Friendly

Yes, we are a laptop-friendly space!
• **Free High-Speed Wi-Fi** is available for all customers.
• We have **power outlets** near most corner tables.
• It's a great spot for remote work or quiet study sessions. 📖`,
    },

    // PAYMENT METHODS
    {
        keywords: ["pay", "payment", "cash", "card", "esewa", "khalti", "fonepay", "qr"],
        answer:
            `💳 Payment Methods

We accept various payment options for your convenience:
• Cash
• Visa / MasterCard
• Fonepay (QR Scan)
• eSewa & Khalti

Digital payments are always preferred! ✨`,
    },

    // SPECIALS / RECOMMENDED
    {
        keywords: ["recommend", "special", "best", "popular", "signature", "favorite", "must try"],
        answer:
            `🌟 Shrestha Café Recommendations

Not sure what to pick? Try our favorites:
1️⃣ **Mocha Delight** – Our signature blend of rich cocoa and espresso.
2️⃣ **Cheesecake Slice** – Creamy, New York style, and made fresh daily.
3️⃣ **Iced Americano** – Perfect for a refreshing caffeine kick.

Ask our barista about the "Special of the Month"! 🥯`,
    },

    // PARKING
    {
        keywords: ["parking", "bike", "car", "vehicle", "park"],
        answer:
            `🚲 Parking Info

We have dedicated space for **bike parking** right in front of the café. 
For cars, there is street parking available nearby in the MachaPokhari area. 🚗`,
    },

    // EVENTS / PARTIES
    {
        keywords: ["event", "party", "birthday", "celebrate", "meeting", "gathering", "space"],
        answer:
            `🎉 Events & Gatherings

Planning a small birthday celebration or a business meeting? 
We can accommodate small groups! 

For group bookings or to inquire about hosting an event, please call us directly at:
📞 +977 9700004569`,
    },

    // DELIVERY
    {
        keywords: ["delivery", "home", "order online", "foodmandu", "pathao", "takeaway"],
        answer:
            `🚚 Delivery & Takeaway

Hungry but at home? 
• You can find us on **Foodmandu** and **Pathao Food**.
• We also offer **Takeaway**—just walk in and place your order to-go! 🛍️`,
    },

    // UNKNOWN / FALLBACK
    {
        keywords: ["unknown_fallback"], // Used by logic if no keywords match
        answer:
            `🤔 I'm not quite sure I understand. 

Could you please try rephrasing? You can ask about our **menu, location, hours, or how to book a table.** ☕`
    }
];

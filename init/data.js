const sampleListings = [

  {
  title: "Mountain Retreat in the Swiss Alps",
  description:
    "Enjoy breathtaking mountain views in this cozy chalet located in the Swiss Alps. Perfect for skiing and hiking adventures.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
  },
  price: 2400,
  location: "Zermatt",
  country: "Switzerland",
},
{
  title: "Modern Apartment in New York City",
  description:
    "Stay in the heart of Manhattan in this stylish apartment with skyline views and easy access to major attractions.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
  },
  price: 3200,
  location: "New York",
  country: "USA",
},
{
  title: "Beachfront Villa in Goa",
  description:
    "A luxurious beachfront villa with a private pool and direct beach access. Ideal for a relaxing holiday.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60",
  },
  price: 1500,
  location: "Goa",
  country: "India",
},
{
  title: "Traditional Ryokan in Kyoto",
  description:
    "Experience authentic Japanese hospitality in this beautiful ryokan with tatami rooms and hot springs.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
  },
  price: 2100,
  location: "Kyoto",
  country: "Japan",
},
{
  title: "Lakeview Cabin in Canada",
  description:
    "Relax in this peaceful wooden cabin overlooking a pristine lake surrounded by forest.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=800&q=60",
  },
  price: 1700,
  location: "Banff",
  country: "Canada",
},
{
  title: "Desert Camp in Dubai",
  description:
    "Stay under the stars in a luxury desert camp with camel rides, traditional food, and stunning sand dunes.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Dubai",
  country: "UAE",
},
{
  title: "Cliffside Villa in Santorini",
  description:
    "A stunning white villa overlooking the Aegean Sea with breathtaking sunsets and a private terrace.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 3500,
  location: "Santorini",
  country: "Greece",
},
{
  title: "Lakefront Cabin Retreat",
  description:
    "Relax in a peaceful cabin overlooking a beautiful lake. Perfect for kayaking, fishing, and enjoying nature.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?auto=format&fit=crop&w=800&q=60",
  },
  price: 1600,
  location: "Lake Tahoe",
  country: "USA",
},
{
  title: "Luxury Villa with Private Pool",
  description:
    "Experience luxury in this stunning villa featuring a private pool, spacious garden, and modern interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60",
  },
  price: 3400,
  location: "Bali",
  country: "Indonesia",
},
{
  title: "Cozy Cottage in the Countryside",
  description:
    "A charming countryside cottage surrounded by greenery and peaceful walking trails.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "Cotswolds",
  country: "United Kingdom",
},
{
  title: "Modern Loft in Downtown",
  description:
    "Stylish loft apartment located in the heart of the city with amazing skyline views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 2100,
  location: "Toronto",
  country: "Canada",
},
{
  title: "Snowy Mountain Chalet",
  description:
    "A cozy wooden chalet in the snowy mountains perfect for skiing and winter adventures.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 2800,
  location: "Aspen",
  country: "USA",
},
{
  title: "Seaside Apartment with Balcony",
  description:
    "Beautiful apartment with a balcony overlooking the ocean and walking distance to the beach.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=60",
  },
  price: 1900,
  location: "Barcelona",
  country: "Spain",
},
{
  title: "Desert Luxury Camp",
  description:
    "Experience desert life in a luxury camp with traditional food, camel rides, and starry nights.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 1700,
  location: "Dubai",
  country: "UAE",
},
{
  title: "Cliffside Ocean Villa",
  description:
    "Enjoy panoramic ocean views from this beautiful cliffside villa with modern interiors and a private infinity pool.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
  },
  price: 4200,
  location: "Santorini",
  country: "Greece",
},
{
  title: "Wooden Cabin in the Forest",
  description:
    "A cozy wooden cabin surrounded by tall pine trees, perfect for nature lovers and weekend getaways.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60",
  },
  price: 1400,
  location: "Colorado",
  country: "USA",
},
{
  title: "Beach Bungalow Escape",
  description:
    "A charming bungalow steps away from the beach where you can enjoy sunrise walks and sea breezes.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 1800,
  location: "Phuket",
  country: "Thailand",
},
{
  title: "Luxury Penthouse with City View",
  description:
    "Modern penthouse apartment with floor-to-ceiling windows offering breathtaking skyline views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
  },
  price: 3500,
  location: "Dubai",
  country: "UAE",
},
{
  title: "Historic Stone House",
  description:
    "Stay in a beautifully restored stone house full of character and traditional charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60",
  },
  price: 1600,
  location: "Tuscany",
  country: "Italy",
},
{
  title: "Lake House with Dock",
  description:
    "Peaceful lake house with a private dock, perfect for kayaking, fishing, and relaxing sunsets.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Michigan",
  country: "USA",
},
{
  title: "Minimalist Studio Apartment",
  description:
    "Compact and stylish studio apartment designed with minimalist aesthetics and modern comforts.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60",
  },
  price: 900,
  location: "Tokyo",
  country: "Japan",
},
{
  title: "Safari Lodge Retreat",
  description:
    "Luxury safari lodge offering stunning wildlife views and unforgettable outdoor experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 2800,
  location: "Serengeti",
  country: "Tanzania",
},
{
  title: "Modern Beachfront Condo",
  description:
    "Bright and airy beachfront condo with large windows and easy beach access.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
  },
  price: 2200,
  location: "Miami",
  country: "USA",
},
{
  title: "Rustic Farmhouse Stay",
  description:
    "Experience countryside living in this rustic farmhouse surrounded by fields and fresh air.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=60",
  },
  price: 1300,
  location: "Amish Country",
  country: "USA",
},
{
  title: "Island Hut Getaway",
  description:
    "Simple island hut perfect for disconnecting and enjoying crystal clear waters.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=60",
  },
  price: 1100,
  location: "Maldives",
  country: "Maldives",
},
{
  title: "Snow Cabin Adventure",
  description:
    "Warm cabin in a snowy landscape perfect for winter sports and cozy evenings by the fireplace.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 1900,
  location: "Alberta",
  country: "Canada",
},
{
  title: "Mediterranean Sea Villa",
  description:
    "Elegant villa overlooking the Mediterranean Sea with terraces and beautiful sunsets.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60",
  },
  price: 3900,
  location: "Nice",
  country: "France",
},
{
  title: "Hidden Jungle Treehouse",
  description:
    "Stay in a magical treehouse hidden deep within a tropical jungle.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=60",
  },
  price: 1700,
  location: "Ubud",
  country: "Indonesia",
},
{
  title: "Traditional Desert House",
  description:
    "Authentic desert home surrounded by sand dunes and beautiful night skies.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 1500,
  location: "Rajasthan",
  country: "India",
},
{
  title: "Harbor View Apartment",
  description:
    "Apartment with stunning harbor views and easy access to cafes and local markets.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Sydney",
  country: "Australia",
},
{
  title: "Luxury Mountain Resort Suite",
  description:
    "High-end resort suite offering breathtaking mountain views and spa access.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60",
  },
  price: 4500,
  location: "Whistler",
  country: "Canada",
},
{
  title: "Classic Parisian Apartment",
  description:
    "Elegant Parisian apartment with balconies and charming city views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
  },
  price: 3100,
  location: "Paris",
  country: "France",
},
{
  title: "Modern Smart Home",
  description:
    "A futuristic smart home equipped with modern technology and sleek architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60",
  },
  price: 2700,
  location: "San Francisco",
  country: "USA",
},
{
  title: "Tropical Beachfront Villa",
  description:
    "Wake up to the sound of waves in this beautiful tropical villa located directly on the beach with stunning sunset views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 2600,
  location: "Boracay",
  country: "Philippines",
},
{
  title: "Cozy Hillside Cottage",
  description:
    "A charming cottage nestled in the hills offering peaceful surroundings, fresh air, and breathtaking valley views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=60",
  },
  price: 1400,
  location: "Shimla",
  country: "India",
}
  // {
  //   title: "Cozy Beachfront Cottage",
  //   description:
  //     "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1500,
  //   location: "Malibu",
  //   country: "United States",
  // },
  // {
  //   title: "Modern Loft in Downtown",
  //   description:
  //     "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1200,
  //   location: "New York City",
  //   country: "United States",
  // },
  // {
  //   title: "Mountain Retreat",
  //   description:
  //     "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1000,
  //   location: "Aspen",
  //   country: "United States",
  // },
  // {
  //   title: "Historic Villa in Tuscany",
  //   description:
  //     "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 2500,
  //   location: "Florence",
  //   country: "Italy",
  // },
  // {
  //   title: "Secluded Treehouse Getaway",
  //   description:
  //     "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 800,
  //   location: "Portland",
  //   country: "United States",
  // },
  // {
  //   title: "Beachfront Paradise",
  //   description:
  //     "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 2000,
  //   location: "Cancun",
  //   country: "Mexico",
  // },
  // {
  //   title: "Rustic Cabin by the Lake",
  //   description:
  //     "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 900,
  //   location: "Lake Tahoe",
  //   country: "United States",
  // },
  // {
  //   title: "Luxury Penthouse with City Views",
  //   description:
  //     "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 3500,
  //   location: "Los Angeles",
  //   country: "United States",
  // },
  // {
  //   title: "Ski-In/Ski-Out Chalet",
  //   description:
  //     "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 3000,
  //   location: "Verbier",
  //   country: "Switzerland",
  // },
  // {
  //   title: "Safari Lodge in the Serengeti",
  //   description:
  //     "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 4000,
  //   location: "Serengeti National Park",
  //   country: "Tanzania",
  // },
  // {
  //   title: "Historic Canal House",
  //   description:
  //     "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1800,
  //   location: "Amsterdam",
  //   country: "Netherlands",
  // },
  // {
  //   title: "Private Island Retreat",
  //   description:
  //     "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 10000,
  //   location: "Fiji",
  //   country: "Fiji",
  // },
  // {
  //   title: "Charming Cottage in the Cotswolds",
  //   description:
  //     "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1200,
  //   location: "Cotswolds",
  //   country: "United Kingdom",
  // },
  // {
  //   title: "Historic Brownstone in Boston",
  //   description:
  //     "Step back in time in this elegant historic brownstone located in the heart of Boston.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 2200,
  //   location: "Boston",
  //   country: "United States",
  // },
  // {
  //   title: "Beachfront Bungalow in Bali",
  //   description:
  //     "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1800,
  //   location: "Bali",
  //   country: "Indonesia",
  // },
  // {
  //   title: "Mountain View Cabin in Banff",
  //   description:
  //     "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1500,
  //   location: "Banff",
  //   country: "Canada",
  // },
  // {
  //   title: "Art Deco Apartment in Miami",
  //   description:
  //     "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1600,
  //   location: "Miami",
  //   country: "United States",
  // },
  // {
  //   title: "Tropical Villa in Phuket",
  //   description:
  //     "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 3000,
  //   location: "Phuket",
  //   country: "Thailand",
  // },
  // {
  //   title: "Historic Castle in Scotland",
  //   description:
  //     "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 4000,
  //   location: "Scottish Highlands",
  //   country: "United Kingdom",
  // },
  // {
  //   title: "Desert Oasis in Dubai",
  //   description:
  //     "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 5000,
  //   location: "Dubai",
  //   country: "United Arab Emirates",
  // },
  // {
  //   title: "Rustic Log Cabin in Montana",
  //   description:
  //     "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1100,
  //   location: "Montana",
  //   country: "United States",
  // },
  // {
  //   title: "Beachfront Villa in Greece",
  //   description:
  //     "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 2500,
  //   location: "Mykonos",
  //   country: "Greece",
  // },
  // {
  //   title: "Eco-Friendly Treehouse Retreat",
  //   description:
  //     "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 750,
  //   location: "Costa Rica",
  //   country: "Costa Rica",
  // },
  // {
  //   title: "Historic Cottage in Charleston",
  //   description:
  //     "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1600,
  //   location: "Charleston",
  //   country: "United States",
  // },
  // {
  //   title: "Modern Apartment in Tokyo",
  //   description:
  //     "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 2000,
  //   location: "Tokyo",
  //   country: "Japan",
  // },
  // {
  //   title: "Lakefront Cabin in New Hampshire",
  //   description:
  //     "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1200,
  //   location: "New Hampshire",
  //   country: "United States",
  // },
  // {
  //   title: "Luxury Villa in the Maldives",
  //   description:
  //     "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 6000,
  //   location: "Maldives",
  //   country: "Maldives",
  // },
  // {
  //   title: "Ski Chalet in Aspen",
  //   description:
  //     "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 4000,
  //   location: "Aspen",
  //   country: "United States",
  // },
  // {
  //   title: "Secluded Beach House in Costa Rica",
  //   description:
  //     "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
  //   image: {
  //     filename: "listingimage",
  //     url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1800,
  //   location: "Costa Rica",
  //   country: "Costa Rica",
  // },
];

module.exports = { data: sampleListings };
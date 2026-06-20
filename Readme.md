# TripNext 🌍 — Property Rental Platform

TripNext is a full-stack property rental platform inspired by Airbnb, built from the ground up to handle real-world challenges in authentication, authorization, geolocation, and cloud-based media storage. It enables users to list, discover, and review properties through a polished, responsive interface — deployed and live on the web with a production-grade MongoDB Atlas backend.

🔗 **Live Demo:** [tripnext-sqm6.onrender.com](https://tripnext-sqm6.onrender.com)
📂 **Source Code:** [github.com/your-github-username/tripnext](https://github.com/saumyayadav2603-dot/TripNext)


---

## Highlights

- Engineered a **full-stack MVC architecture** with Express.js, separating concerns across routes, controllers, models, and middleware for maintainability and scalability
- Implemented **secure authentication and authorization** using Passport.js with session-based login, encrypted password storage, and ownership-based access control (only listing owners can edit/delete their properties)
- Integrated **geospatial features** by geocoding property addresses via the OpenStreetMap Nominatim API and rendering interactive Leaflet.js maps for every listing
- Built a **resilient cloud image pipeline** using Multer and Cloudinary, with graceful fallback handling for upload failures
- Designed a **dynamic review and star-rating system** with nested population (reviews → authors) for efficient data retrieval
- Deployed with **MongoDB Atlas** as a managed cloud database, configured with persistent session storage via Connect-Mongo
- Built a **fully responsive UI** with Bootstrap 5, including custom horizontal-scroll filter bars and sticky UI elements for an Airbnb-style browsing experience
- Applied **server-side validation** with Joi schemas to enforce data integrity before it reaches the database

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | EJS, Bootstrap 5, Leaflet.js |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Atlas), Mongoose ODM |
| **Auth** | Passport.js (Local Strategy), Express-Session, Connect-Mongo |
| **Media Storage** | Multer, Cloudinary |
| **Validation** | Joi |
| **Geolocation** | OpenStreetMap Nominatim API, Leaflet.js |

---

## Core Features

- 🏡 **Browse Listings** — View all available properties with images, pricing, and location at a glance
- 📍 **Interactive Maps** — Every listing is geocoded and displayed on a live map showing its exact location
- 🖼️ **Cloud Image Uploads** — Property images are uploaded directly to Cloudinary, with automatic optimization
- ⭐ **Reviews & Ratings** — Users can leave star ratings and written reviews on any listing
- 🔐 **Authentication & Authorization** — Secure signup/login with route-level protection and owner-only edit/delete permissions
- ✏️ **Full CRUD on Listings** — Create, read, update, and delete property listings
- 📱 **Responsive Design** — Optimized layout and UI components across desktop and mobile
- 🔔 **Flash Messaging** — Real-time success/error feedback for all user actions

---

## System Architecture

```
TripNext/
├── controllers/        # Business logic (listings, reviews, users)
├── models/              # Mongoose schemas (Listing, Review, User)
├── routes/              # Express route definitions
├── views/               # EJS templates (server-side rendering)
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
├── public/              # Static assets (CSS, client JS)
├── init/                # Database seeding + geocoding script
├── utils/               # Error handling & async wrappers
├── middleware.js        # Auth & ownership middleware
├── cloudConfig.js       # Cloudinary configuration
├── schema.js            # Joi validation schemas
└── app.js               # Application entry point
```

---

## Getting Started Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Cloudinary account

### Setup

```bash
git clone https://github.com/your-username/tripnext.git
cd tripnext
npm install
```

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

Seed the database with sample data (optional):

```bash
node init/index.js
```

Run the development server:

```bash
nodemon app.js
```

Visit `http://localhost:8080/listings` in your browser.

---

## Engineering Challenges Solved

- **DNS/network resolution issues** with MongoDB Atlas SRV records on restrictive networks — resolved by configuring Node's internal DNS resolver
- **Rate-limited geocoding API calls** — implemented try/catch fallback logic so listing creation never fails even if the geocoding service is temporarily unavailable
- **Session persistence across deployments** — configured Connect-Mongo to store sessions in MongoDB Atlas rather than memory, ensuring sessions survive server restarts
- **Authorization edge cases** — built dedicated `isOwner` middleware to prevent unauthorized users from modifying listings they don't own

---

## Roadmap

- [ ] Advanced search and filtering (location, price range, category)
- [ ] Wishlist / saved properties
- [ ] Booking and payment integration (Stripe)
- [ ] Email notifications
- [ ] Admin dashboard for content moderation

---

## Author

**Saumya Yadav**
B.Tech CSE & AI, NITRA Technical Campus
Passionate about backend development, scalable systems, and open-source contributions.

---

## License

This project was built for educational purposes.

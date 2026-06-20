const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const axios = require("axios");

const MONGO_URL = "mongodb://127.0.0.1:27017/TripNext";

async function main() {
  await mongoose.connect(MONGO_URL);
}

const geocode = async (location, country) => {
  try {
    const query = `${location}, ${country}`;
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;
    const response = await axios.get(url, {
      headers: { "User-Agent": "TripNext/1.0" },
    });
    if (response.data.length > 0) {
      const { lon, lat } = response.data[0];
      return { type: "Point", coordinates: [parseFloat(lon), parseFloat(lat)] };
    }
    console.log(`No results for: ${query}`);
    return { type: "Point", coordinates: [0, 0] };
  } catch (err) {
    console.log(`Geocode error for ${location}, ${country}:`, err.message);
    return { type: "Point", coordinates: [0, 0] };
  }
};

const initDB = async () => {
  await Listing.deleteMany({});
  console.log("Deleted old listings");

  const user = await User.findOne({});
  console.log("Using owner:", user._id);

  for (let obj of initData.data) {
    const geometry = await geocode(obj.location, obj.country);
    console.log(`${obj.location} →`, geometry);
    await Listing.create({
      ...obj,
      owner: user._id,
      geometry,
    });
  }

  console.log("data was initialized with geocoding");
};

main()
  .then(() => {
    console.log("connected to DB");
    initDB();
  })
  .catch((err) => {
    console.log(err);
  });
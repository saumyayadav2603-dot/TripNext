// Add at top of controllers/listings.js
const axios = require("axios");

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
    return { type: "Point", coordinates: [0, 0] };
  } catch (err) {
    console.log("Geocode error:", err.message);
    return { type: "Point", coordinates: [0, 0] }; // 👈 fallback, never throws
  }
};



const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({}); 
    res.render("listings/index.ejs", { allListings });
};



module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};


module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
  .populate({
    path: "reviews",
    populate: {
      path: "author",
    },
  })
  .populate("owner");
  if(!listing){
    req.flash("error","Requested listing does not exist!");
    return res.redirect("/listings");
  }
  console.log(listing);
  res.render("listings/show.ejs", { listing });
};


module.exports.createListing = async(req, res, next) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    if (req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename,
        };
    }
    // 👇 Geocode the location
  newListing.geometry = await geocode(req.body.listing.location, req.body.listing.country);
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.randerEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if(!listing){
    req.flash("error","Requested listing does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/edit.ejs", { listing });
};



module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename,
        };
        await listing.save();
    }
    // 👇 Re-geocode on update
  listing.geometry = await geocode(req.body.listing.location, req.body.listing.country);
  await listing.save();
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success","Listing deleted!");
  res.redirect("/listings");
}
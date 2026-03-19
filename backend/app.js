require("dotenv").config();

const cors = require("cors");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");

// ✅ MUST BE FIRST
app.use(cors());

// ✅ IMPORTANT
app.use(express.json());

// ✅ TEST ROUTE (add this)
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ROUTE
const contactFormRoute = require("./routes/contactForm.routes");
app.use("/api/contact", contactFormRoute);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
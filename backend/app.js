require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

const app = express();
const dbUrl = process.env.MONGO_URL;

app.use(express.json());

const cors = require("cors");

app.use(cors({
  origin: "https://chikoo-constructions-frontend.onrender.com/"
}));

// DB connection
mongoose.connect(dbUrl)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Model
const contactForm = require("./models/contactform");

// POST route
app.post("/api/contact", async (req, res) => {
  try {
    const data = req.body;

    await contactForm.create(data);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

// Server
app.listen(PORT, () => {
  console.log("Server is listening on port 8080");
});
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const dbUrl = process.env.MONGO_URL;

app.use(express.json());

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
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
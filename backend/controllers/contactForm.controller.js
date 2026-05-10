// controllers/contactForm.controller.js

const ContactForm = require('../models/contactform');

module.exports.createContactForm = async (req, res) => {
  try {
    const saved = await ContactForm.create(req.body);

    res.status(200).json({ success: true });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
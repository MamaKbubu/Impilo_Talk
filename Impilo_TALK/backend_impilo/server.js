// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/doctorsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Doctor Schema and Model
const doctorSchema = new mongoose.Schema({
  name: String,
  phone: String,
  specialty: String,
  location: String,
});

const Doctor = mongoose.model("Doctor", doctorSchema);

// Sample route to get doctors data
app.get("/doctors", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${5000}`);
});


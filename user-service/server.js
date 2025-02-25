require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/users", userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("User Service: Connected to MongoDB"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));

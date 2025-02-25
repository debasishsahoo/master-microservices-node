require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(express.json());
app.use("/posts", postRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Post Service: Connected to MongoDB"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Post Service running on port ${PORT}`));

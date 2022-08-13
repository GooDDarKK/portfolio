require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const feedbackRoute = require("./routes/Feedback");
const contactRoute = require("./routes/Contact");
const adminRoute = require("./routes/Admin");
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(async (req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.use("/feedback", feedbackRoute);
app.use("/contact", contactRoute);
app.use("/admin", adminRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(port, () =>
      console.log(`connected to db & listening app on port ${port}!`)
    )
  )
  .catch((err) => console.log(err));

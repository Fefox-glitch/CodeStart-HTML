const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const moduleRoutes = require("./routes/moduleRoutes");
app.use("/api/modules", moduleRoutes);

// DB & Server Init
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log("Servidor backend corriendo en puerto", process.env.PORT)
    );
  })
  .catch(err => console.error(err));

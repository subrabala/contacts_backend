const express = require("express");
const app = express();

const errorHandler = require("./Middleware/errorHandler");
const contactRoutes = require("./routes/contactRoutes");


app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use(errorHandler)
app.listen(5500);

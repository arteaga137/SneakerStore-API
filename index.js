const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routes/user.routes");
const sneakerRouter = require("./routes/sneaker.routes");
const mongoose = require("mongoose");

app.use(express.json()); //Initializing express internal 'body-parser'

//Connection with MongoDB Sneaker DB
mongoose
  .connect(
    "mongodb+srv://arteaga:eSGJ75xA632eUBtM@cluster0.etrrcnc.mongodb.net/sneakerhead"
  )
  .then(() => console.log("DB connected succesfully"));

  app.use('/sneakers', sneakerRouter);
  app.use('/users', userRouter);

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

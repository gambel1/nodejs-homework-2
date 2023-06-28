const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(5000, () => {
      console.log("Server running. Port: 5000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
  


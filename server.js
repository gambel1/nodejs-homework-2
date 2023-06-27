const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST } = require("./config");

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(777, () => {
      console.log("Server running. Port: 777");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

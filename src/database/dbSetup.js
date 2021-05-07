// SET MONGOOSE CONNECTION STRING
const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://admin:admin123@cluster0.zkhof.mongodb.net/zurirud?retryWrites=true&w=majority";

module.exports = function () {
  mongoose.connect(
    connectionString,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("database connected successful");
      }
    }
  );
};

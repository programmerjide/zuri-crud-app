// SET MONGOOSE CONNECTION STRING
const mongoose = require("mongoose");
const logger = require('../config/logger');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

module.exports = function () {
  mongoose.connect(process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        logger.error(err.message);
      } else {
        logger.info("database connected successful");
      }
    }
  );
};

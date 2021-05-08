const express = require("express");
const app = express();
const dbSetup = require("./database/dbSetup");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const routes = require("./routes/userRoutes");
const logger = require('./config/logger');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const port = process.env.PORT;

app.use(express.json());

// call the database function
dbSetup();

// Swagger documentation option guide
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Zuri NodeJS Task User Management API",
      version: "1.0.0",
      description: "A simple Express User Management API",
    },
    servers: [
      {
        url: "https://blooming-temple-22709.herokuapp.com/",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

//Swagger specification
const specs = swaggerJsDoc(options);

app.use("/api/v1/", routes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


app.listen(port, (err) => {
  if (err) throw logger.error(err.message);
  logger.log('info', `App listening on http://localhost:${port}`);
});

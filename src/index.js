const express = require("express");
const app = express();
const port = 3000;
const dbSetup = require("./database/dbSetup");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const routes = require("./routes/userRoutes");

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
        url: "http://localhost:3000/api/v1/",
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
  if (err) throw console.log(err);
  console.log(`App listening on http://localhost:${port}`);
});

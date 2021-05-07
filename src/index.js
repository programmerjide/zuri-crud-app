const express = require("express");
const app = express();
const port = 6000;
const dbSetup = require("./database/dbSetup");
const routes = require("./routes/userRoutes");

app.use(express.json());

// call the database function
dbSetup();

app.use("/api/v1/", routes);

app.listen(port, (err) => {
  if (err) throw console.log(err);
  console.log(`App listening on http://localhost:${port}`);
});

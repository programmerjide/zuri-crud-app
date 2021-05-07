const express = require("express");
const app = express();
const port = 6000;
const dbSetup = require("./database/dbSetup");

// call the database function
dbSetup();

app.listen(port, (err) => {
  if (err) throw console.log(err);
  console.log(`App listening on http://localhost:${port}`);
});

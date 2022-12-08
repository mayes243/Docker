const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/country", (req, res) => {
  res.json([
    {
      id: "0",
      country: "Nepal",
    },
    {
      id: "1",
      country: "India",
    },
    {
      id: "2",
      country: "China",
    },
    {
      id: "3",
      country: "Afganistan",
    },
    {
      id: "4",
      country: "Pakistan",
    },
    {
      id: "5",
      country: "Srilanka",
    },
  ]);
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});

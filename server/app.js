const app = require("express")();
const request = require("request");

const api = "http://localhost:3000/fruits"

app.get("/", (req, res) => {

  console.log("request in");

  request.get(api, (error, response, body) => {
    if(error) res.json("Error");

    res.json(body);
  });
});

app.listen("8080", () => console.log("listening"))

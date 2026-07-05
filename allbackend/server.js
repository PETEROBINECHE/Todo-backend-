const express = require("express");
const app = express();
const PORT = 1998;

let data = ["peter"];

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  console.log(`server is running in home`, req.method);
  res.send(`
    <body
    style="background: red;
    color: white;"
    >
      <h1>Data:</h1>
      <p>${JSON.stringify(data)}</p>
      <a href="/dashboard">Dashboard</a>
    </body>
  `);
});

app.get("/dashboard", (req, res) => {
  console.log(`this is the dashboard`);
  res.send(`
    <body>
      <h1>here is dashboard</h1>
      <a href="/">Home</a>
    </body>
    `);
});

app.get("/api/data", (req, res) => {
  console.log("this is data");

  res.status(201).send(data);
});

app.post("/api/data", (req, res) => {
  const newdata = req.body;
  console.log(newdata);
  data.push(newdata.boyf);
  res.sendStatus(201);
});

app.delete("/api/data", (req, res) => {
  console.log("delete one items.");
  data.pop();
  res.sendStatus(200);
});

app.listen(PORT, () => console.log(`this server is on: ${PORT}`));

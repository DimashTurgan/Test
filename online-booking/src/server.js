const express = require("express");
const app = express();
const cors = require("cors");
const items = require("./App");

app.use(cors());
app.use(express.json());


app.get("/App", (req, res) => {
  res.json(items);
});


app.get("/App/:id", (req, res) => {
  const item = items.find((item) => item.id === parseInt(req.params.id));
  if (!item) res.status(404).send("Item not found");
  res.json(item);
});


app.post("/App", (req, res) => {
  const item = {
    id: items.length + 1,
    title: req.body.title,
    img: req.body.img,
    category: req.body.category,
    price: req.body.price,
  };
  items.push(item);
  res.json(item);
});


app.put("/App/:id", (req, res) => {
  const item = items.find((item) => item.id === parseInt(req.params.id));
  if (!item) res.status(404).send("Item not found");

  item.title = req.body.title;
  item.img = req.body.img;
  item.category = req.body.category;
  item.price = req.body.price;

  res.json(item);
});


app.delete("/App/:id", (req, res) => {
  const item = items.find((item) => item.id === parseInt(req.params.id));
  if (!item) res.status(404).send("Item not found");

  const index = items.indexOf(item);
  items.splice(index, 1);

  res.json(item);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

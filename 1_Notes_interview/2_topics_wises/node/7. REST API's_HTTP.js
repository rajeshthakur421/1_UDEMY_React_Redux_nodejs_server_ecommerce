const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let items = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Item Two' },
  { id: 3, name: 'Item Three' }
];

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

app.post('/items', (req, res) => {
  const item = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(item);
  res.status(201).json(item);
});

app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');

  item.name = req.body.name;
  res.json(item);
});

app.delete('/items/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex ===

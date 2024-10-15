const http = require('http');
const fs = require('fs');
const DATA = 'items.json';
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Load data from items.json
const data = fs.readFileSync(DATA, 'utf-8');
const items = JSON.parse(data);

// GET /items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST /items
app.post('/items', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Body is required');
      }
      // Process the request
    });
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id); // Retrieve ID from URL params
    const index = items.findIndex(item => item.id === id); // Assuming item has an `id` field
  
    if (index !== -1) {
      items[index] = req.body; // Update item with new data from request body
      fs.writeFileSync(DATA, JSON.stringify(items)); // Save updated items to file
      res.json(items[index]); // Respond with updated item
    } else {
      res.status(404).json({ message: 'Item not found' }); // Item not found error
    }
  });

  app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id); // Retrieve ID from URL params
    const index = items.findIndex(item => item.id === id); // Find item by its `id`
  
    if (index !== -1) {
      items.splice(index, 1); // Remove item from array
      fs.writeFileSync(DATA, JSON.stringify(items)); // Save updated items to file
      res.json({ message: 'Item deleted' }); // Respond with success message
    } else {
      res.status(404).json({ message: 'Item not found' }); // Item not found error
    }
  });
  
app.listen(port, '127.0.0.1', () => {
  console.log(`Server running at (http://127.0.0.1:3000)`);
});

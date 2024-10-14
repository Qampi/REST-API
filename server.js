
/*const http = require ('http');
const fs = require('fs');
const DATA = 'items.json';
const data = fs.readFileSync(DATA, 'utf-8');
console.log(data);
const items = JSON.parse(data);
 
 
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const {method, url} = req;
 
    if (method == 'GET' && url == '/items') { 
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(items));
       console.log("get");
   
    } else {
        res.statusCode = 404 ;
        res.end(JSON.stringify({message: 'Page not found'}))
    }
 
});
    if (method == 'POST' && url == '/items') {
router.post('/items', async (req, res) =>  { 
    const item = new MyModel(req.body); await item.save(); res.json(item); });
    // PUT update item 
    router.put('/items/:id', async (req, res) => {
        const item = await MyModel.findByIdAndUpdate(('link unavailable'),
        req.body, { new: true }); 
        res.json(item); 
    });
} else {
    res.statusCode = 404 ;
    res.end(JSON.stringify({message: 'Page not found'}))
}
 
if (method == 'PUT' && url == '/items') {
    router.post('/items', async (req, res) =>  { 
        const item = new MyModel(req.body); await item.save(); res.json(item); });
}
// PUT update item
router.put('/items/:id', async (req, res) => {
    { const item = await MyModel.findByIdAndUpdate(('link unavailable'), 
        req.body, { "new: true"}); 
        res.json(item);
    });
} else {
    res.statusCode = 404 ;
    res.end(JSON.stringify({message: 'Page not found'}))

}

// DELETE item
if (method == 'DELETE' && url == '/items') {
    router.delete('/items/:id', 
        async (req, res) => { 
            await MyModel.findByIdAndRemove(('link unavailable'));
            res.json({ message: 'Item deleted' });
        }); module.exports = router;
}


server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000');
});*/

/*const express = require('express');
const app = express();
const fs = require('fs');
const Joi = require('joi');
const DATA = 'items.json';

// Load items from file
let items = JSON.parse(fs.readFileSync(DATA, 'utf-8'));

// Define schema for item validation
const itemSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required()
});

// GET /items
app.get('/items', (req, res) => {
    res.json(items);
});

// POST /items
app.post('/items', (req, res) => {
    const { error } = itemSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const newItem = req.body;
    items.push(newItem);
    fs.writeFileSync(DATA, JSON.stringify(items));
    res.status(201).json(newItem);
});

// PUT /items/:id
app.put('/items/:id', (req, res) => {
    const itemId = parseInt((link unavailable));
    const index = items.findIndex(item => (link unavailable) === itemId);
    if (index === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }
    const { error } = itemSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    items[index] = req.body;
    fs.writeFileSync(DATA, JSON.stringify(items));
    res.json(items[index]);
});

// DELETE /items/:id
app.delete('/items/:id', (req, res) => {
    const itemId = parseInt((link unavailable));
    const index = items.findIndex(item => (link unavailable) === itemId);
    if (index === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }
    items.splice(index, 1);
    fs.writeFileSync(DATA, JSON.stringify(items));
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});*/

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
  const newItem = req.body;
  items.push(newItem);
  fs.writeFileSync(DATA, JSON.stringify(items));
  res.json(newItem);
});

// PUT /items/:id
app.put('/items/:id', (req, res) => {
  const id = parseInt((link unavailable));
  const index = items.findIndex(item => (link unavailable) === id);
  if (index !== -1) {
    items[index] = req.body;
    fs.writeFileSync(DATA, JSON.stringify(items));
    res.json(items[index]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// DELETE /items/:id
app.delete('/items/:id', (req, res) => {
  const id = parseInt((link unavailable));
  const index = items.findIndex(item => (link unavailable) === id);
  if (index !== -1) {
    items.splice(index, 1);
    fs.writeFileSync(DATA, JSON.stringify(items));
    res.json({ message: 'Item deleted' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Server running at (link unavailable)${port}`);
});

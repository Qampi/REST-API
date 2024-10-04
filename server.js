
const http = require ('http');
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
});
import express from 'express';

const app = express();
let user = { name: "Unknown", role: "None" };

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the playground!</h1>');
})

app.post('/Post', (req, res) => {
    res.send('<h2>Post request received!</h2>');
    console.log(req.body);
})

app.patch('/Patch', (req, res) => {
    res.send('<h2>patch request received!</h2>');
    console.log(req.body);
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})
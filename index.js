import express from 'express';

const app = express();
let user = [];

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the playground!</h1>');
})

app.post('/Put', (req,res) => {
    res.send('<h2>Put request received!</h2>');

    const newUser = {
    id: (user.length + 1).toString(),
    name: req.body.name,
    role: req.body.role
    };

    user.push(req.body);
    console.log(req.body);
    console.log(user);
})

app.get('/users', (req, res) => {
    res.json(user)
})

app.post('/Post', (req, res) => {
    res.send('<h2>Post request received!</h2>');
    console.log(req.body);
})

app.patch('/Patch', (req, res) => {
    res.send('<h2>patch request received!</h2>');
    user = req.body;
    console.log(req.body);
})

app.get('/Patch', (req, res) => {
    console.log('get request received!');
    res.json(user);
})

console.log(user);

app.listen(3000, () => {
    console.log('server is running on port 3000');
})
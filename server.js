
import nanoexpress from 'nanoexpress-pro';
import { users } from './product.js';


const app = nanoexpress();

app.use(async(req) => {
    req.body = JSON.parse(req.body)
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/user', async(req, res) => {
    res.send({users: users})
})

app.post('/user', async( req, res ) => {
    const{ name } = req.body;
    const add = await { name }
    users.push(add)
    res.status(201).json({user: users})
})


app.listen(3000)

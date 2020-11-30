
import nanoexpress from 'nanoexpress-pro';
import { users } from './product.js';
import bodyParser from 'body-parser';

const app = nanoexpress();
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send();
});


app.post('/user', async( req, res ) => {
    const{ name } = req.body;
    const addNew = {...req.body};
    if( name ) {
        users.push(addNew);
        return res.status(201).json(users);
    } else {
        return res.status(500).json({error: "There was an error"});
    }
    
})

app.get('/user', async(req, res) => {
    res.json(users)
})

app.post('/n', async (req) => {
    return { status: 'ok', body: req.body };
  });

  app.get('/n', async () => 'ok');

app.listen(3000);

import nanoexpress from 'nanoexpress-pro';

const app = nanoexpress();

var user_name = [{"name": "Billy", "id": 1},
                {"name": "John", "id": 2}]

app.get('/name', (req, res) => {
    res.end(JSON.stringify({user_name}));
});

app.get('/hello',async() => ({name: "Cole", "id": 3}));

app.listen(4000);

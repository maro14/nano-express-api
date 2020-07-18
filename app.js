import nanoexpress from 'nanoexpress-pro';

const app = nanoexpress();

var user_name = [{"name": "Billy", "id": 12},
                {"name": "John", "id": 24}]

app.get('/name', (req, res) => {
    res.end(JSON.stringify({user_name}));
});

app.get('/hello',async() => ({name: "Cole"}));

app.listen(4000);

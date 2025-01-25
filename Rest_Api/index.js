const express = require('express');
const users = require("./MOCK_DATA.json");
const fs= require('fs');
const { log } = require('console');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/api/v1/users', (req, res) => {
    return res.json(users);
});

app.get('/api/v1/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await users.find((u) => u.id == id);
    return res.json(user);
});

app.post('/api/v1/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    return res.json(newUser);
});

app.patch('/api/v1/users/:id', async (req, res) => {
    const id = Number(req.params.id);
    let user = users.find(user => user.id === id)

    const idx = users.indexOf(user); //09
    console.log(idx);
    
    const newObj = Object.assign(user, req.body)
    console.log(newObj);
    
    users[idx] = newObj;
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({
            status: "success",
            users: user
        })
    })
});

app.delete('/api/v1/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await users.find((u) => u.id == id);
    return res.json(user);
});

app.listen(8090, () => {
    console.log("Server is running on port 8090");
});


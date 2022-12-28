const path = require("path");
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3002, () => {
    console.log('Servidor corriendo en el puerto 3002');
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
})
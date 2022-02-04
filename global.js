const express = require('express')
const path = require('path')
const mysql2 = require('mysql2/promise')
const fs = require('fs')
const http = require('http')
const multer = require('multer')
const config = require('./config')
const morgan = require('morgan')

const app = express();

app.set('view engine','ejs')

const port = 5000;

const createPath = (page) => path.resolve(__dirname,'ejs-views',`${page}.ejs`);

var name = '';
var user1 = '';

var conn;
async function main() {
    conn = await mysql2.createConnection(config)
    const [rows,fields]= await conn.execute('SELECT * FROM user')
    name = rows

    const [user,field]= await conn.execute('SELECT * FROM customers')
    user1 = user

    // console.log(rows[0].name)
    // await conn.execute('update user set name = "'+ rows[0].name +'" where id = 2')


    conn.end()

}
main();
app.use(express.json());

app.use(express.static('public'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get('/',(req,res)=>{
    const title = 'Home'
    res.render(createPath('index'),{title})
})

app.get('/home',(req,res)=>{

    res.redirect('/')
})

app.get('/users',(req,res)=>{
    res.json(name);
})

app.get('/users/id',(req,res)=>{
    res.json(user1);
})

app.get('/name',(req,res)=>{
    const title = 'Name'
    res.render(createPath('name'),{title})
})


app.post('/post', function (req, res) {

    async function p() {
        var body = req.body;

        conn = await mysql2.createConnection(config)

        var sql = `INSERT INTO customers (name, age) VALUES ('${body.name}','${body.age}')`;

        conn.execute(sql)

        conn.end()

    }
    p();

    return res.status(201).send(req.body);
});

app.use((req,res)=>{
    const title = 'error'
    res
        .status(404)
        .render(createPath('404'),{title})
})

app.listen(port,()=>console.log('server has been started...'))

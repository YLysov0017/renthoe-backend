require('dotenv').config() // Загрузка конфига из файла окружения .env

const path = require('node:path'); // Пути поиска
const express = require('express'); // Express.js - бэкенд-фреймворк
const sequelize = require('./database') // Файл подключения к БД
const models = require('./models/models') // Схема БД
const cors = require('cors')
const router = require('./routes')
const webpack = require('webpack')
const config = require('./webpack.config.js')
const webpackMiddleware = require("webpack-dev-middleware")
const app = express()
const compiler = webpack(config)

const port = process.env.PORT

app.use(express.static(path.resolve('public')));
app.use(express.static(path.resolve('styles')));
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(webpackMiddleware(compiler, {
    serverSideRender: false,
    publicPath: config.output.publicPath
}));



app.get('/api', (req, res, done) => res.status(201).json({ message: "Ko-ko-ko, ya xochu obratitsya k api ya takoy hitriy ahahah" }));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

const start_server = async () => { 
    try {
        await sequelize.authenticate()
        await sequelize.sync() 
        app.listen(port, () => console.log('Server is running'))
    }
    catch (e) {
        console.log(e)
    }
}


start_server();
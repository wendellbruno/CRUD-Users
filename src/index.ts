import express from 'express';
import {config} from 'dotenv'

config()

const app = express();

const port = process.env.PORT || 8001

app.listen(port, () => console.log('app rodando na porta', port));

app.get('/', (req,res) => {
    res.send('olá')
})
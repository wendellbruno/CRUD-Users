import express from 'express';
import {config} from 'dotenv'
import { GetUsersController } from './controllers/get-users/get-users';
import { MySqlGetUsersRepository } from './repositories/get-users/mysql-get-users';

config()

const app = express();

const port = process.env.PORT || 8001

app.listen(port, () => console.log('app rodando na porta', port));

app.get('/users', async (req,res) => {
    const mySqlGetUsersRepository = new MySqlGetUsersRepository();
    const getUsersController = new GetUsersController(mySqlGetUsersRepository);
    const response = await getUsersController.handle();

    res.send(response.body)
})
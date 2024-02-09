import express from 'express';
import {config} from 'dotenv'
import { GetUsersController } from './controllers/get-users/get-users';
import { MySqlGetUsersRepository } from './repositories/get-users/mysql-get-users';
import { MysqlCreateusersRepository } from './repositories/create-users/mysql-creat-users';
import { CreateUserController } from './controllers/create-user/create-user';

config()

const app = express();
app.use(express.json());

const port = process.env.PORT || 8001

app.listen(port, () => console.log('app rodando na porta', port));

app.get('/users', async (req,res) => {
    const mySqlGetUsersRepository = new MySqlGetUsersRepository();
    const getUsersController = new GetUsersController(mySqlGetUsersRepository);
    const response = await getUsersController.handle();

    res.status(response.statusCode).send(response.body);
})

app.post('/create/user', async (req, res) => {
    const MysqlCreateUserRepository = new MysqlCreateusersRepository();
    const createUserController = new CreateUserController(MysqlCreateUserRepository);
    const {body, statusCode} = await createUserController.handle({
        body: req.body
    });
    res.status(statusCode).send(body);
})
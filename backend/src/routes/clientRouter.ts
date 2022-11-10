import express from 'express'
import { ClientBusiness } from '../business/ClientBusiness'
import { ClientController } from '../controller/ClientController'
import { ClientDatabase } from '../data/ClientDatabase'

const clientController = new ClientController(
    new ClientBusiness(
        new ClientDatabase()
    )
)

export const clientRouter = express.Router()

clientRouter.post('/insert', clientController.insertClient)
clientRouter.get('/getAll', clientController.getAllClients)
clientRouter.delete('/delete', clientController.deleteClient)
clientRouter.put('/edit', clientController.editClient)
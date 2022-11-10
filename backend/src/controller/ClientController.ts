import { Request, Response } from "express"
import { ClientBusiness } from "../business/ClientBusiness";
import { InvalidInputError } from "../business/errors/InvalidInputError";
import { Authenticator } from "../services/Authenticator";
import { ClientDTO } from "../types/ClientDTO";
import { UpdateClientDTO } from "../types/UpdateClientDTO";

export class ClientController {
    constructor(
        private clientBusiness: ClientBusiness
    ) {}

    insertClient = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const { name, cpf, birth, fathersname, mothersname, cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi } = req.body

            const user = Authenticator.getTokenData(token)

            if(!user) {
                throw new InvalidInputError("You must be logged in to perform this action.")
            }

            const client: ClientDTO = { name, cpf, birth, fathersname, mothersname, cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi }

            const result = await this.clientBusiness.insertClient(client)

            res.status(201).send({ message: "Client added successfully", result })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    getAllClients = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const user = Authenticator.getTokenData(token)

            if(!user) {
                throw new InvalidInputError("You must be logged in to perform this action.")
            }

            const result = await this.clientBusiness.getAllClients()

            res.status(201).send({ message: result})

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    deleteClient = async (req: Request, res: Response) => {
        try {
            const id = req.body
            const token = req.headers.authorization as string
            const user = Authenticator.getTokenData(token)

            if(!user) {
                throw new InvalidInputError("You must be logged in to perform this action.")
            }
            if(!id){
                throw new InvalidInputError("Client id is required to perform this action.")
            }

            await this.clientBusiness.deleteClient(id.id)

            res.status(201).send({ message: "Client deleted successfully."})
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    editClient = async (req: Request, res: Response) => {
        try {
            const data: UpdateClientDTO = req.body
            const token = req.headers.authorization as string
            const user = Authenticator.getTokenData(token)

            if(!user) {
                throw new InvalidInputError("You must be logged in to perform this action.")
            }
            if(!data.id){
                throw new InvalidInputError("Client id is required to perform this action.")
            }

            await this.clientBusiness.editClient(data.id, data)

            res.status(201).send({ message: `Client edited successfully.`})
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}
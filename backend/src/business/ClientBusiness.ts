import { ClientDatabase } from "../data/ClientDatabase";
import { Client } from "../model/Client";
import IdGenerator from "../services/IdGenerator";
import { ClientDTO } from "../types/ClientDTO";
import { UpdateClientDTO } from "../types/UpdateClientDTO";
import { CustomError } from "./errors/CustomError";
import { InvalidInputError } from "./errors/InvalidInputError";
import { NotFoundError } from "./errors/NotFoundError";

export class ClientBusiness {
    constructor(
        private clientDatabase: ClientDatabase
    ) { }

    insertClient = async (client: any) => {
        try {
            const keys = Object.keys(client)
            if(!client.gia){
                client.gia = 1
            }
            for (var i = 0; i < keys.length; i++) {
                if (!client[keys[i]]){
                    throw new InvalidInputError("Invalid input. All fields except for GIA, are required.")
                }
            }

            const CPF = String(client.cpf)
            if (CPF.length != 11) {
                throw new InvalidInputError("CPF must contain 11 digits.")
            }
            const CEP = String(client.cep)
            if (CEP.length < 8 || 9 < CEP.length) {
                throw new InvalidInputError("CEP must contain 8 digits.")
            }
            const result = await this.clientDatabase.getClientByCPF(client.cpf)

            if (result) {
                throw new CustomError(500, "Client cpf already exists.")
            }

            const newClientId = IdGenerator.idGenerator()
            const data:ClientDTO = {...client}
            const newClient = new Client(newClientId, data)

            await this.clientDatabase.insertClient(newClient)

            return newClient

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || error.message)
        }
    }

    getAllClients = async () => {
        try {
            return await this.clientDatabase.getAllClients()
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || error.message)
        }
    }

    getClientById = async (id: string) => {
        try {
            return await this.clientDatabase.getClientById(id)
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || error.message)
        }
    }

    deleteClient = async (id: string) => {
        try {
            const result = await this.clientDatabase.getClientById(id)
            
            if (!result) {
                throw new NotFoundError("Client not found")
            }

            await this.clientDatabase.deleteClient(id)
            
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || error.message)
        }
    }

    editClient = async (id: string, data: UpdateClientDTO) => {
        try {
            const result = await this.clientDatabase.getClientById(id)

            if (!result) {
                throw new NotFoundError("Client not found")
            }

            if(data.cpf){
                const CPF = String(data.cpf)
                if (CPF.length != 11) {
                    throw new InvalidInputError("CPF must contain 11 digits.")
                }
            }
            if(data.cep){
                const CEP = String(data.cep)
                if (CEP.length < 8 || 9 < CEP.length) {
                    throw new InvalidInputError("CEP must contain 8 digits.")
                }
            }

            await this.clientDatabase.editClient(id, data)
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || error.message)
        }
    }
}
import { Client } from "../model/Client";
import { UpdateClientDTO } from "../types/UpdateClientDTO";
import { BaseDatabase } from "./BaseDatabase";

export class ClientDatabase extends BaseDatabase {
    private static TABLE = "client"

    getClientByCPF = async (cpf: number) => {
        try {
            const result = await BaseDatabase.connection()
                .select("id")
                .from(ClientDatabase.TABLE)
                .where({ cpf })
                
            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getClientById = async (id: string) => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(ClientDatabase.TABLE)
                .where({id})
                
            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    insertClient = async (newClient: Client) => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: newClient.getId(),
                    name: newClient.getName(),
                    cpf: newClient.getCPF(),
                    birth: newClient.getbirth(),
                    fathersname: newClient.getFathersname(),
                    mothersname: newClient.getMothersname(),
                    cep: newClient.getCEP(),
                    logradouro: newClient.getLogradouro(),
                    complemento: newClient.getComplemento(),
                    bairro: newClient.getBairro(),
                    localidade: newClient.getLocalidade(),
                    uf: newClient.getUF(),
                    ibge: newClient.getIBGE(),
                    gia: newClient.getGIA(),
                    ddd: newClient.getDDD(),
                    siafi: newClient.getSIAFI()
                })
                .into(ClientDatabase.TABLE)
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getAllClients = async () => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(ClientDatabase.TABLE)
            
            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    deleteClient = async (id: string) => {
        try {
            await BaseDatabase.connection()
                .delete("*")
                .from(ClientDatabase.TABLE)
                .where({id})
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    editClient = async (id: string, data: UpdateClientDTO) => {
        try {
            await BaseDatabase.connection()
                .update(data)
                .from(ClientDatabase.TABLE)
                .where({id})
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
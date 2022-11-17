import { ClientDTO } from "../types/ClientDTO"

export class Client {
    constructor(
        private id: string,
        private obj: ClientDTO
    ) { }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.obj.name
    }

    public getCPF(): number {
        return this.obj.cpf
    }

    public getbirth(): string {
        return this.obj.birth
    }

    public getFathersname(): string {
        return this.obj.fathersname
    }

    public getMothersname(): string {
        return this.obj.mothersname
    }

    public getCEP(): string {
        return this.obj.cep
    }

    public getLogradouro(): string {
        return this.obj.logradouro
    }

    public getComplemento(): string {
        return this.obj.complemento
    }

    public getBairro(): string {
        return this.obj.bairro
    }

    public getLocalidade(): string {
        return this.obj.localidade
    }

    public getUF(): string {
        return this.obj.uf
    }

    public getIBGE(): number {
        return this.obj.ibge
    }

    public getGIA(): number {
        return this.obj.gia
    }

    public getDDD(): number {
        return this.obj.ddd
    }

    public getSIAFI(): number {
        return this.obj.siafi
    }

    static toUserModel(client: any): Client {
        return new Client(
            client.id,
            client.obj
        )
    }
}
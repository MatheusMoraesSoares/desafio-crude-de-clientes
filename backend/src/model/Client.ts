export class Client {
    constructor(
        private id: string,
        private name: string,
        private cpf: number,
        private birth: string,
        private fathersname: string,
        private mothersname: string,
        private cep: number,
        private lougradouro: string,
        private complemento: string,
        private bairro: string,
        private localidade: string,
        private uf: string,
        private ibge: number,
        private gia: number,
        private ddd: number,
        private siafi: number
    ) { }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getCPF(): number {
        return this.cpf
    }

    public getbirth(): string {
        return this.birth
    }

    public getFathersname(): string {
        return this.fathersname
    }

    public getMothersname(): string {
        return this.mothersname
    }

    public getCEP(): number {
        return this.cep
    }

    public getLogradouro(): string {
        return this.lougradouro
    }

    public getComplemento(): string {
        return this.complemento
    }

    public getBairro(): string {
        return this.bairro
    }

    public getLocalidade(): string {
        return this.localidade
    }

    public getUF(): string {
        return this.uf
    }

    public getIBGE(): number {
        return this.ibge
    }

    public getGIA(): number {
        return this.gia
    }

    public getDDD(): number {
        return this.ddd
    }

    public getSIAFI(): number {
        return this.siafi
    }

    static toUserModel(client: any): Client {
        return new Client(
            client.id,
            client.name,
            client.cpf,
            client.birth,
            client.fathersname,
            client.mothersname,
            client.cep,
            client.lougradouro,
            client.complemento,
            client.bairro,
            client.localidade,
            client.uf,
            client.ibge,
            client.gia,
            client.ddd,
            client.siafi
        )
    }
}
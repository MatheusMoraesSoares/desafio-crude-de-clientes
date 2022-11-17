<template v-cloak>

    <body>
        <form @submit="insertClientForm">
            <div id="insertClient-form">
                <label>Nome</label>
                <input type="text" class="insertClient" name="name" v-model="client.name" placeholder="Nome">
                <label>CPF</label>
                <input type="number" class="insertClient" name="cpf" v-model="client.cpf" placeholder="CPF">
                <label>Nascimento</label>
                <input type="date" class="insertClient" name="birth" v-model="client.birth" placeholder="Nascimento">
                <label>Nome do pai</label>
                <input type="text" class="insertClient" name="fathersname" v-model="client.fathersname"
                    placeholder="Nome do pai">
                <label>Nome da mãe</label>
                <input type="text" class="insertClient" name="mothersname" v-model="client.mothersname"
                    placeholder="Nome da mãe">
                <label>CEP</label>
                <div>
                    <input type="text" class="insertClient" id="cep-field" name="cep" v-model="client.cep"
                        placeholder="CEP">
                    <button class="button-form" @click="getCep">Completar</button>
                </div>
                <label>Logradouro</label>
                <input type="text" class="insertClient" name="logradouro" v-model="client.logradouro"
                    placeholder="Logradouro">
                <label>Complemento</label>
                <input type="text" class="insertClient" name="complemento" v-model="client.complemento"
                    placeholder="Complemento">
                <label>Bairro</label>
                <input type="text" class="insertClient" name="bairro" v-model="client.bairro" placeholder="Bairro">
                <label>Localidade</label>
                <input type="text" class="insertClient" name="localidade" v-model="client.localidade"
                    placeholder="Localidade">
                <label>UF</label>
                <input type="text" class="insertClient" name="uf" v-model="client.uf" placeholder="UF">
                <label>IBGE</label>
                <input type="number" class="insertClient" name="ibge" v-model="client.ibge" placeholder="IBGE">
                <label>GIA</label>
                <input type="number" class="insertClient" name="gia" v-model="client.gia" placeholder="GIA">
                <label>DDD</label>
                <input type="number" class="insertClient" name="ddd" v-model="client.ddd" placeholder="DDD">
                <label>SIAFI</label>
                <input type="number" class="insertClient" name="siafi" v-model="client.siafi" placeholder="SIAFI">
            </div>
            <div id="submit-insert"><input class="button-form" type="submit" value="Enviar"></div>
        </form>
    </body>
</template>

<script>
import axios from 'axios'
import { onChange, baseURL } from '@/constants/consts';

export default {
    name: "InsertClientForm",
    data() {
        return {
            client: {},
            data: {}
        }
    },
    methods: {
        insertClientForm(e) {
            e.preventDefault();
            Object.keys(onChange).forEach(key => {
                this.data[key] = this.client[key]
            })

            axios.post(`${baseURL}/client/insert`,
                this.data, {
                headers: { Authorization: localStorage.getItem('token') }
            }).then((res) => {
                alert("Client inserted successfully.")
            }).catch((err) => {
                alert(err.response.data.message)
            })
        },
        getCep(e) {
            e.preventDefault();

            axios.get(`https://viacep.com.br/ws/${this.client.cep}/json/`)
                .then((res) => {
                    this.client = { ...this.client, ...res.data };
                })
                .catch((err) => {
                    alert(err.response.data.message)
                })
        }
    }
}
</script>

<style scoped>
#insertClient-form {
    font-size: 2rem;
    display: grid;
    grid-template-columns: 20vw 70vw;
    justify-content: center;
    align-items: center;
}

#insertClient-form div {
    display: flex;
}

#cep-field {
    width: 50vw;
}

.button-form {
    width: 18vw;
    height: 5vh;
    background-color: rgb(170, 170, 170);
    margin-top: 10px;
    border: 2px solid #222;
    cursor: pointer;
    transition: .5s;
    font-size: 1.6rem;
}

.button-form:hover {
    background-color: transparent;
    color: #222;
}

#submit-insert {
    display: flex;
    align-items: center;
    justify-content: center;
}

.insertClient {
    height: 5vh;
    font-size: 3vh;
    margin: 10px;
}
</style>
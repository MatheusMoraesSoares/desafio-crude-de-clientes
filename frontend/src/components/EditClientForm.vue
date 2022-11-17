<template v-cloak>

    <body>
        <h1>Edit client form</h1>
        <form @submit="editClientForm(id, $event)">
            <div id="editClient-form">
                <label>Nome</label>
                <input type="text" class="editClient" name="name" v-model="client.name" 
                placeholder="Nome" @change="this.onChange.name=true">
                <label>CPF</label>
                <input type="number" class="editClient" name="cpf" v-model="client.cpf" 
                placeholder="CPF" @change="this.onChange.cpf=true">
                <label>Nascimento</label>
                <input type="date" class="editClient" name="birth" v-model="client.birth" 
                placeholder="Nascimento" @change="this.onChange.birth=true">
                <label>Nome do pai</label>
                <input type="text" class="editClient" name="fathersname" v-model="client.fathersname"
                    placeholder="Nome do pai" @change="this.onChange.fathersname=true">
                <label>Nome da mãe</label>
                <input type="text" class="editClient" name="mothersname" v-model="client.mothersname"
                    placeholder="Nome da mãe" @change="onChange.mothersname = true">
                <label>CEP</label>
                <div>
                    <input type="text" class="editClient" id="cep-field" name="cep" v-model="client.cep"
                        placeholder="CEP" @change="this.onChange.cep=true">
                    <button class="button-form" @click="getCep">Completar</button>
                </div>
                <label>Logradouro</label>
                <input type="text" class="editClient" name="logradouro" v-model="client.logradouro"
                    placeholder="Logradouro" @change="this.onChange.logradouro=true">
                <label>Complemento</label>
                <input type="text" class="editClient" name="complemento" v-model="client.complemento"
                    placeholder="Complemento" @change="this.onChange.complemento=true">
                <label>Bairro</label>
                <input type="text" class="editClient" name="bairro" v-model="client.bairro" 
                placeholder="Bairro" @change="this.onChange.bairro=true">
                <label>Localidade</label >
                <input type="text" class="editClient" name="localidade" v-model="client.localidade"
                    placeholder="Localidade" @change="this.onChange.localidade=true">
                <label>UF</label>
                <input type="text" class="editClient" name="uf" v-model="client.uf" 
                placeholder="UF" @change="this.onChange.uf=true">
                <label>IBGE</label>
                <input type="number" class="editClient" name="ibge" v-model="client.ibge" 
                placeholder="IBGE" @change="this.onChange.ibge=true">
                <label>GIA</label>
                <input type="number" class="editClient" name="gia" v-model="client.gia" 
                placeholder="GIA" @change="this.onChange.gia=true">
                <label>DDD</label>
                <input type="number" class="editClient" name="ddd" v-model="client.ddd" 
                placeholder="DDD" @change="this.onChange.ddd=true">
                <label>SIAFI</label>
                <input type="number" class="editClient" name="siafi" v-model="client.siafi" 
                placeholder="SIAFI" @change="this.onChange.siafi=true">
            </div>
            <div id="submit-edit"><input class="button-form" type="submit" value="Enviar"></div>
        </form>
    </body>
</template>

<script>
import axios from 'axios'
import { baseURL, onChange } from '@/constants/consts';

export default {
    name: "EditClientForm",
    data() {
        return {
            client: {},
            data: {},
            editClient: {},
            onChange,
            id: this.$route.query.id
        }
    },
    methods: {
        getClientById(id) {
            axios.get(`${baseURL}/client/${id}`,
                {
                    headers: { Authorization: localStorage.getItem('token') }
                }).then((res) => {
                    const client = res.data.message
                    this.client = client
                }).catch((err) => {
                    alert(err.response.data.message)
                })
        },
        editClientForm(id, e) {
            e.preventDefault();
            this.data.id = id
            Object.keys(onChange).forEach(key => {
                if (onChange[key]) {
                    this.data[key] = this.client[key]
                }
            })

            axios.put(`${baseURL}/client/edit`,
                this.data, {
                headers: { Authorization: localStorage.getItem('token') }
            }).then((res) => {
                Object.keys(onChange).forEach(key => {
                    onChange[key] = false
                })
                alert("Client edited successfully.")
                this.$router.push("/");
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
    },
    mounted() {
        this.getClientById(this.id)
    }
}
</script>

<style scoped>
#editClient-form {
    font-size: 2rem;
    display: grid;
    grid-template-columns: 20vw 70vw;
    justify-content: center;
    align-items: center;
}

#editClient-form div {
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

#submit-edit {
    display: flex;
    align-items: center;
    justify-content: center;
}

.editClient {
    height: 5vh;
    font-size: 3vh;
    margin: 10px;
}
</style>
<template v-cloak>
    <div id="clients-list">
        <h2 v-if="this.token === null" class="warning-box">
            É preciso estar logado para ter acesso à lista de clientes!
        </h2>
        <div class="clients-data" v-else>
            <div class="data-box">Nome</div>
            <div class="data-box">CPF</div>
            <div class="data-box">Nascimento</div>
            <div class="data-box">Nome do pai</div>
            <div class="data-box">Nome da mãe</div>
            <div class="data-box">CEP</div>
            <div class="data-box">Logradouro</div>
            <div class="data-box">Complemento</div>
            <div class="data-box">Bairro</div>
            <div class="data-box">Localidade</div>
            <div class="data-box">UF</div>
            <div class="data-box">IBGE</div>
            <div class="data-box">GIA</div>
            <div class="data-box">DDD</div>
            <div class="data-box">SIAFI</div>
            <div class="data-box">EDIT</div>
            <div class="data-box">DELETE</div>
        </div>
        <form class="clients-data" v-for="(client, i) in clients">
            <div class="data-box">{{ client.name }}</div>
            <div class="data-box">{{ client.cpf }}</div>
            <div class="data-box">{{ client.birth }}</div>
            <div class="data-box">{{ client.fathersname }}</div>
            <div class="data-box">{{ client.mothersname }}</div>
            <div class="data-box">{{ client.cep }}</div>
            <div class="data-box">{{ client.logradouro }}</div>
            <div class="data-box">{{ client.complemento }}</div>
            <div class="data-box">{{ client.bairro }}</div>
            <div class="data-box">{{ client.localidade }}</div>
            <div class="data-box">{{ client.uf }}</div>
            <div class="data-box">{{ client.ibge }}</div>
            <div class="data-box">{{ client.gia }}</div>
            <div class="data-box">{{ client.ddd }}</div>
            <div class="data-box">{{ client.siafi }}</div>
            <router-link :to="{path: '/client/edit', query: {id: client.id}}" id="router-box">EDIT</router-link>
            <button v-on:click="deleteClient(client.id, $event)">DELETE</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { baseURL } from '@/constants/consts';
import EditClient from '@/views/EditClient.vue'
import EditClientForm from './EditClientForm.vue';

export default {
    name: "ClientsList",
    data() {
        return {
            clients: [],
            token: null
        }
    },
    components: {
        EditClientForm,
        EditClient
    },
    methods: {
        getClients() {

            axios.get(`${baseURL}/client/getAll`, {
                headers: { Authorization: localStorage.getItem('token') }
            }).then((res) => {
                this.token = localStorage.getItem('token')
                for (var i = 0; i < res.data.message.length; i++) {
                    this.clients[i] = res.data.message[i]
                }
            }).catch((err) => {
                alert(err.response.data.message)
            })
        },
        deleteClient(id, e) {
            e.preventDefault();
            const temp = confirm('Voce esta prestes a excluir este usuario, deseja continuar?')
            if(temp===false){
                return
            }

            axios.delete(`${baseURL}/client/delete`, {data: {id: id},
                headers: { Authorization: localStorage.getItem('token') }
            }).then((res) => {
                document.location.reload(true)
            }).catch((err) => {
                alert(err.response.data.message)
            })
        }
    },
    mounted() {
        this.getClients()
    }
}
</script>

<style scoped>
#clients-list {
    margin: 0px;
    /* display: flex;
    flex-direction: column; */
}

.clients-data {
    display: grid;
    grid-template-columns: 7vw 9vw 7vw 7.5vw 7.75vw 6.25vw 7vw 8.2vw 7vw 7vw 2vw 5.5vw 3vw 3vw 4vw 3vw 5vw;
}

.clients-data button {
    background-color: rgb(139, 139, 139);
    color: rgb(202, 39, 39);
    font-weight: bold;
    border: 2px solid #222;
    cursor: pointer;
    transition: .5s;
}
.clients-data button:hover {
    background-color: transparent;
    color: #222;
}

#router-box {
    display: flex;
    background-color: rgb(139, 139, 139);
    color: rgb(202, 39, 39);
    font-weight: bold;
    font-size: .9rem;
    border: 2px solid #222;
    cursor: pointer;
    transition: .5s;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}
#router-box:hover {
    background-color: transparent;
    color: #222;
}

.clients-data>div {
    background-color: white;
    border: 1px solid black;
    font-size: 1.5rem;
    text-align: center;
}

.warning-box {
    display: flex;
    justify-content: center;
    color: red;
}
</style>
import { reactive } from "vue";

export const store = reactive({
    logged: localStorage.getItem('token')!=null
})
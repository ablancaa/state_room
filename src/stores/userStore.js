import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const user = ref('Alberto');
    const email = ref('alberto.blanca@vallhebron.cat')
    const category = ref('TCAI'); 

    return { user, email, category };
})
<template>
    <div
        class="fixed max-w-[642px] rounded-lg w-full shadow-myShadow bg-white top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 pt-11 pb-14 flex flex-col items-center ">
        <h2 class="text-2xl font-bold mb-7">Tizimga kirish</h2>
        <form class="flex flex-col max-w-[300px] w-full gap-y-6">
            <input type="text" v-model="login" placeholder="Login"
                class="border-2 border-borderColor py-2 px-3 rounded-[10px] outline-none">
            <input type="password" v-model="password" placeholder="Mahfiy kalit"
                class="border-2 border-borderColor py-2 px-3 rounded-[10px] outline-none">
        </form>
        <a href="#!" class="underline my-3">Ro’yhatdan o’tish</a>
        <button @click="postLogin()"
            class="bg-primary2 py-[10px] px-12 text-white text-sm rounded-xl hover:bg-[#1d6039]">Kirish</button>
    </div>
</template>

<script>
import notif from '@/components/notif.vue'
export default {
    emits: ['successLogin'],
    components: {
        notif
    },
    data: () => ({
        login: '',
        password: '',
        notif: {},
        name: ''
    }),
    methods: {
        async postLogin() {
            console.log(this.login, this.password)
            // if (this.login && this.password) {
            //     let res = await axios.post(`${url}/auth/login`, {
            //         login: this.login,
            //         password: this.password,
            //     }).catch(e => {
            //         this.notif = {
            //             type: 'warning',
            //             text: msgs[e.response.data]
            //         }
            //         setTimeout(() => {
            //             this.notif = {}
            //         }, 1200)
            //     })
            //     if (res.status == 200) {
            //         console.log(res.data)

            //         let { token, user } = res.data
            //         this.$cookies.set('hospital-token', token)
            //         this.$cookies.set('hospital-user', user)

            //         this.$emit('successLogin')
            //     }
            // } else {
            //     this.notif = {
            //         type: 'warning',
            //         text: 'Barcha maydonlarni to`ldiring'
            //     }
            //     setTimeout(() => {
            //         this.notif = {}
            //     }, 1200)
            // }

            if (this.login && this.password) {
                this.$store.dispatch('login', {
                    login: this.login,
                    password: this.password
                })
            } else {
                this.notif = {
                    type: 'warning',
                    text: msgs[e.response.data]
                }
                setTimeout(() => {
                    this.notif = {}
                }, 1200)

            }
        },

      
    },
    computed: {
        posts() {
            return this.$store.getters.posts
        }
    },
    mounted() {
    }

}
</script>

<style lang="scss" scoped></style>
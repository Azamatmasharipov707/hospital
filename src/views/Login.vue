<template>
    <div v-if="toggle"
        class="fixed max-w-[642px] rounded-lg w-full shadow-myShadow bg-white top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 pt-11 pb-14 flex flex-col items-center ">
        <h2 class="text-2xl font-bold mb-7">Tizimga kirish</h2>
        <form class="flex flex-col max-w-[300px] w-full gap-y-6" @submit.prevent="postLogin()">
            <input type="text" v-model="user.login" placeholder="Login"
                class="border-2 border-borderColor py-2 px-3 rounded-[10px] outline-none">
            <input type="password" v-model="user.password" placeholder="Mahfiy kalit"
                class="border-2 border-borderColor py-2 px-3 rounded-[10px] outline-none">
        </form>
        <a href="#!" class="underline my-3" @click.prevent="toggle = false">Ro’yhatdan o’tish</a>
        <button @click="postLogin()"
            class="bg-primary2 py-[10px] px-12 text-white text-sm rounded-xl hover:bg-[#1d6039]">Kirish</button>
    </div>

    <div v-else
        class="fixed max-w-[642px] rounded-lg w-full shadow-myShadow bg-white top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 pt-11 pb-14 flex flex-col items-center ">
        <h2 class="text-2xl font-bold mb-7">Ro'yhatdan o'tish</h2>
        <form class="flex flex-col max-w-[300px] w-full gap-y-6" @submit.prevent="postReg()">
            <input type="text" v-model="user.login" placeholder="Login"
                class="border-2 border-borderColor py-2 px-3 rounded-[10px] outline-none">
            <input type="password" v-model="user.password" placeholder="Mahfiy kalit"
                class="border-2 border-borderColor py-2 px-3 rounded-[10px] outline-none">
            <input type="password" v-model="user.checkpassword" placeholder="Mahfiy kalitni qayta kiriting"
                class="border-2 border-borderColor py-2 px-3 rounded-[10px] outline-none">
        </form>
        <a href="#!" class="underline my-3" @click.prevent="toggle = true">Tizimga kirish</a>
        <button @click="postReg()"
            class="bg-primary2 py-[10px] px-12 text-white text-sm rounded-xl hover:bg-[#1d6039]">Kirish</button>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
    emits: ['successLogin'],
    data: () => ({
        // login: '',
        // password: '',
        user: {},
        notif: {},
        name: '',
        toggle: true,
        checkpassword: ''
    }),
    methods: {
        ...mapMutations(['setNotif']),
        ...mapActions(['register', 'login']),
        async postLogin() {
            if(this.checkFields()) {
                this.login(this.user)
            }
        },

        async postReg() {
            if(this.checkFields()) {
                console.log('check1')
                if (this.user.password !== this.user.checkpassword) {
                    this.setNotif({
                        type: 'warning',
                        text: `Mahfiy kalitlar bir xil bo'lishi kerak`
                    })
                    return false
                }
                console.log('check1')
                let res = await this.register(this.user)
                console.log(res.data)
                console.log(res.status)
                if(res.status == 200) {
                    if(res.data == 'exist') {
                        this.setNotif({
                            type: 'warning',
                            text: `Bunday foydalanuvchi mavjud !`
                        })
                    }
                }
                if(res.status == 201) {
                    if(res.data == 'success') {
                        this.setNotif({
                            type: 'success',
                            text: `Ro'yhatdan muvafaqqiyatli o'tdingiz`
                        })
                        this.toggle = true
                    }
                    console.log(res.data)
                }
            }
        },

        checkFields() {
            if (!this.user.login || !this.user.password) {
                this.setNotif({
                    type: 'warning',
                    text: `Maydonlarni to'ldiring`
                })
                return false
            }

            return true
        }

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
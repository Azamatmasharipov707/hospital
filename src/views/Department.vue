<template>
    <div class="bg-white my-9 rounded-lg">
        <div>
            <h2 class="pl-6 py-5 font-bold text-xl">Bo'limlar</h2>
        </div>
        <table class="w-full">
            <thead>
                <tr class="bg-[#E8E8E8]">
                    <th class="p-6 text-left">N</th>
                    <th class="p-6 text-left">Nomi</th>
                    <th class="p-6 text-left">Qabul vaqti</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="department, index of departments" :key="department._id" class="border-b-2">
                    <td class="px-6 py-4 font-bold">{{ index + 1 }}</td>
                    <td class="px-6 py-4 font-bold">{{ department.title }}</td>
                    <td class="px-6 py-4 font-bold">{{ department.createdTime }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <button class="fixed bottom-[2%] right-[2%] z-10" @click="toggle = true">
        <img src="@/assets/img/add.svg" alt="">
    </button>

    <div :class="toggle ? 'flex' : 'hidden'"
        class="bg-white max-w-[500px] w-full justify-center shadow-myShadow rounded-lg fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-10">
        <div class="w-full">
            <h3 class="text-2xl font-bold text-center">Yangi malumot qo'shish</h3>
            <form class="my-6 w-full">
                <input type="text" v-model="title" placeholder="Bo'lim"
                    class="outline-none border w-full py-2 px-3 rounded-xl">
            </form>
            <div class="flex items-center justify-center gap-x-2">
                <button @click="toggle = false"
                    class="bg-tertiary max-w-[130px] w-full py-2 rounded-xl text-white hover:bg-red-600">
                    Bekor qilish
                </button>
                <button @click="add()"
                    class="bg-primary2 max-w-[130px] w-full py-2 rounded-xl text-white hover:bg-green-700">
                    Kiritish
                </button>
            </div>
        </div>
    </div>
    <Notif :text="notif.text" :type="notif.type" />
</template>

<script>
import axios from 'axios';
import { url } from '@/data/vars'
import Notif from '@/components/notif.vue';

export default {
    components: {
        Notif
    },
    data: () => ({
        title: '',
        toggle: false,
        notif: {},
        token: '',
        departments: []
    }),
    methods: {
        async add() {
            if (this.title) {
                let res = await axios.post(`${url}/department`, {
                    title: this.title
                }, {
                    headers: {
                        "authorization": `Bearer ${this.token}`
                    }
                });
                if (res.status == 201) {
                    this.notif = {
                        type: 'success',
                        text: 'Yangi malumot qo`shildi'
                    }
                    this.toggle = false
                    this.title = ''
                    this.departments = [res.data, ...this.departments]
                    setTimeout(() => {
                        this.notif = {}
                    }, 1200)
                }
            } else {
                this.notif = {
                    type: 'warning',
                    text: 'Barcha maydonlarni to`ldiring'
                }
                setTimeout(() => {
                    this.notif = {}
                }, 1200)
            }
        },
        async getDepartment() {
            let res = await axios.get(`${url}/department`, {
                headers: {
                    "authorization": `Bearer ${this.token}`
                }
            })
            if (res.status == 200) {
                this.departments = [...res.data]
            }
        }
    },
    mounted() {
        if (this.$cookies.isKey('hospital-token')) {
            this.token = this.$cookies.get('hospital-token')
        }
        this.getDepartment()
    }
}
</script>

<style lang="scss" scoped></style>
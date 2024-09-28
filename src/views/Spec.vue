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
                <tr v-for="spec, index of specs" :key="spec._id" class="border-b-2">
                    <td class="px-6 py-4 font-bold">{{ index + 1 }}</td>
                    <td class="px-6 py-4 font-bold">{{ spec.title }}</td>
                    <td class="px-6 py-4 font-bold">{{ spec.createdTime }}</td>
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
            <h3 class="text-2xl font-bold text-center">Mutaxasislik qo'shish</h3>
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
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
    data: () => ({
        title: '',
        toggle: false,
        notif: {},
        token: '',
    }),
    computed: {
        ...mapGetters(['specs'])
    },
    methods: {
        ...mapActions([
            'getAllSpecs',
            'addSpec'
        ]),
        async add() {
            if (this.title) {
               this.addSpec({title: this.title})
               this.clear()
            } else {
               
            }
        },
        clear() {
            this.toggle = false
            this.title = ''
        }
       
    },
    mounted() {
       this.getAllSpecs()
    }
}
</script>

<style lang="scss" scoped></style>
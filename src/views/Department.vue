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
                    <th class="p-6 text-left"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="department, index of departments" :key="department._id" class="border-b-2">
                    <td class="px-6 py-4 font-bold">{{ index + 1 }}</td>
                    <td class="px-6 py-4 font-bold">{{ department.title }}</td>
                    <td class="px-6 py-4 font-bold">{{ department.createdTime }}</td>
                    <td class="text-center">
                        <button @click="remove(department._id)">
                            x
                        </button>
                    </td>
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
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
    data: () => ({
        title: '',
        toggle: false,
        notif: {},
        token: '',
    }),
    computed: {
        ...mapGetters(['departments'])
    },
    methods: {
        ...mapActions([
            'getAllDepartments',
            'addDepartment',
            'deleteDepartment'
        ]),
        async add() {
            if (this.title) {
                this.addDepartment({ title: this.title })
                this.clear()
            } else {

            }
        },
        clear() {
            this.toggle = false
            this.title = ''
        },
        remove(id) {
            if(confirm(`Qariringiz qatiymi ?`)) {
                this.deleteDepartment(id)
            }
        }
    },
    mounted() {
        this.getAllDepartments()
    }
}
</script>

<style lang="scss" scoped></style>
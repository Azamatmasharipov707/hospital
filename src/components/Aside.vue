<template>
    <div>
        <aside class="bg-white h-screen shadow-[4px_0px_16px_0px_#101E7314] py-6">
            <div class="pl-6">
                <RouterLink class="mb-8 block">
                    <img src="../assets/img/logo.svg" alt="">
                </RouterLink>
                <h2 class="text-secondary mb-5">MEDICINE</h2>
            </div>
            <nav class="border-b-[1px] border-borderColor pl-6 pb-14">
                <ul>
                    <RouterLink 
                        :to="item.link" 
                        v-for="item,index of links" 
                        :key="index"
                        class="flex gap-x-3 font-bold py-4 hover:text-primary"
                        >
                        <img :src="item.icon" alt="" class="w-5">
                        {{ item.title }}
                    </RouterLink>
                </ul>
            </nav>
            <button class="flex items-center gap-x-3 m-3 text-xl font-bold" @click="logout()">
                <img src="@/assets/img/Logout.svg" alt="" width="30px">
                Tizimnan chiqish
            </button>
        </aside>
    </div>
</template>

<script>
    export default {
        data: () => ({
            links: [
                {
                    link: '/',
                    title: 'Bosh sahifa',
                    icon: new URL('@/assets/img/bosh-sahifa.svg', import.meta.url)
                },
                {
                    link: '/',
                    title: 'Palatalar',
                    icon: new URL('@/assets/img/bosh-sahifa.svg', import.meta.url)
                },
                {
                    link: '/',
                    title: 'Shifokorlar',
                    icon: new URL('@/assets/img/bosh-sahifa.svg', import.meta.url)
                },
                {
                    link: '/department',
                    title: 'Bo’limlar',
                    icon: new URL('@/assets/img/bosh-sahifa.svg', import.meta.url)
                },
                {
                    link: '/spec',
                    title: 'Mutaxasislik',
                    icon: new URL('@/assets/img/bosh-sahifa.svg', import.meta.url)
                }
            ]
        }),
        methods: {
            logout(){
                if(confirm(`Qaroringiz qat'iymi ?`)) {
                    this.$store.dispatch('exit')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
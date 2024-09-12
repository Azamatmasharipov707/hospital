<template>
    <div class="flex">
        <div class="w-1/5">
            <Aside />
        </div>
        <div class="w-full py-6 px-9">
            <Header />
            <div>
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script>
import Aside from '@/components/Aside.vue';
import Header from '@/components/Header.vue';

    export default {
        emits: ['success'],
    components: { Aside, Header }
}
</script>

<style lang="scss" scoped>

</style>
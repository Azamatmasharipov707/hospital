<template>
    <div>
        <Login @successLogin="() => {
            // console.log('success')
            $emit('success')
        }" />
    </div>
</template>

<script>
import Login from '@/views/Login.vue';

    export default {
        emits: ['success'],
    components: { Login }
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="notif fixed top-5 -right-96 duration-500 bg-white py-4 px-5 font-bol shadow-myShadow" :class="`${type || ''} ${type ? 'active' : ''} `">
        {{ text }}
    </div>
</template>

<script>
    export default {
        props: ['text', 'type']
    }
</script>

<style lang="scss" scoped>
.notif.active {
    right: 20px;
}
.notif.success {
    border-left: 4px solid green;
}
.notif.warning {
    border-left: 4px solid yellow;
}
.notif.danger {
    border-left: 4px solid red;
}
</style>
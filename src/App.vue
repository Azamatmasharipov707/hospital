<template>
  <div>
    <component :is="layout"  />

    <Notif />
  </div>
</template>

<script>
import Notif from './components/notif.vue';
import authLayout from './layout/auth.vue'
import defaultLayout from './layout/default.vue'
import { mapGetters } from 'vuex';
  export default {
    components: {
    'auth': authLayout,
    'def': defaultLayout,
    Notif
},
    /* data: () => ({
      temp: 'auth',
    }) */
    computed: {
      // layout() {
      //   return this.$store.getters.layout
      // }

      ...mapGetters([
        'layout'
      ])
    }
  }
</script>

<style lang="scss" scoped>

</style>
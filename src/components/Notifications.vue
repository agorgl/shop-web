<template>
  <div class="notifications">
    <vue-intro msg="Notifications Page!"/>
  </div>
</template>

<script>
import VueIntro from './VueIntro.vue'

export default {
  name: 'Notifications',
  components: {
    VueIntro
  },
}
</script>

<style scoped>
.notifications {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>

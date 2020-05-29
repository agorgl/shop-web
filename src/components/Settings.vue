<template>
  <div class="settings">
    <vue-intro msg="Settings Page!"/>
  </div>
</template>

<script>
import VueIntro from './VueIntro.vue'

export default {
  name: 'Settings',
  components: {
    VueIntro
  },
}
</script>

<style scoped>
.settings {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>

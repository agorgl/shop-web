<template>
  <div class="customers">
    <vue-intro msg="Customers Page!"/>
  </div>
</template>

<script>
import VueIntro from './VueIntro.vue'

export default {
  name: 'Customers',
  components: {
    VueIntro
  },
}
</script>

<style scoped>
#customers {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>

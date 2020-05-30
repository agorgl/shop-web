<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>Home Page!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home > :first-child {
  text-align: center;
  color: #2c3e50;
}
</style>

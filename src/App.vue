<template>
  <div class="container">
    <ma-top-bar></ma-top-bar>
    <router-view/>
  </div>
</template>

<script>
import MaTopBar from '@/components/Topbar';
export default {
  name: 'MaApp',
  components: {
    MaTopBar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-top: 30px;
}

nav.header {
  display: flex;
  justify-content: flex-end;
}

a:nth-child(n + 2) {
  margin-left: 10px;
}

.active {
  color: black;
}
</style>

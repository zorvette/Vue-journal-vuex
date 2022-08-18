<template>

  <div class="d-flex justify-content-center align-items-center">
    <h1>No hay nada seleccionado</h1>
  </div>
   
   <Fab />
</template>

<script>
import { defineAsyncComponent } from 'vue'


export default {
  components: {
    Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
  }
}
</script>

<style lang="scss" scoped>
  div {
    height: 100%;
  }
</style>
<template>
  <div
  class="entry-container mb-3 pointer p-2"
  @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <!-- Titulo -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bolt">16</span>
      <span class="mx-1 fs-5">Agosto</span>
      <span class="mx-2 fw-light">2022, martes</span>
    </div>

    <div class="entry-description">
      Sunt nostrud veniam incididunt amet qui aliquip cupidatat id velit. Voluptate mollit cillum exercitation incididunt voluptate laborum cillum laboris cillum eiusmod. Deserunt sit nisi eu magna ex laborum velit eiusmod esse. Excepteur ex occaecat sunt excepteur.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
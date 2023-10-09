<template>
  <div>
    <h1>Drivers</h1>
    <CreateDrivers />
    <ViewDrivers />
  </div>
</template>

<script>
  import CreateDrivers from '../drivers/!CreateDrivers.vue';
  import ViewDrivers from '../drivers/!ViewDrivers.vue';

  export default {
    components: {
      CreateDrivers,
      ViewDrivers
    },
  }
</script>

<style lang="scss" scoped>

</style>
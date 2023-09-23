<template>
  <div>
    <h1>Home</h1>
    <GreetingMessage />
  </div>
</template>

<script>
  // import GreetingMessage from '/src/components/modules/GreetingMessage.vue';
  import GreetingMessage from '../modules/GreetingMessage.vue';
  
  
  export default {
    components: {
  
      GreetingMessage,
    },
  }
</script>

<style scoped>

</style>
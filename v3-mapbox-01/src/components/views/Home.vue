<template>
  <div>
    <!-- <h1>Home</h1>
    <h1> {{ dynamicInput }}</h1> -->
    <!-- <GreetingMessage /> -->
  </div>
</template>

<script>
  // import GreetingMessage from '/src/components/modules/GreetingMessage.vue';
import GreetingMessage from '../modules/GreetingMessage.vue';
  
  
  export default {
    data() {
      return {
        // dynamicInput: 'i am a' + ' ' +window.location
      };
    },
    components: {
  
      GreetingMessage,
    },
  }
</script>

<style scoped>

</style>
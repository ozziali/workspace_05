<template>
  <div>
<GreetingMessage />
<RequestForm />

  </div>
</template>

<script>
import GreetingMessage from './components/GreetingMessage.vue'
import RequestForm from './components/RequestForm.vue'

  export default {
    components: { 
      GreetingMessage,
      RequestForm
    },
  }
</script>

<style scoped>

</style>
<template>
  <div>
<GreetingMessage />
<RequestForm />

  </div>
</template>

<script>
// Component Importation
import GreetingMessage from './components/GreetingMessage.vue'
import RequestForm from './components/RequestForm.vue'

// Component Registration
  export default {
    components: { 
      GreetingMessage,
      RequestForm
    },
  }
</script>

<style scoped>

</style>
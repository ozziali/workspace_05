<template>
  <div>
<!-- <GreetingMessage />
<RequestForm /> -->
<QRReaderRoot />
<StreamBarcodeReader
      @decode="(a, b, c) => onDecode(a, b, c)"
      @loaded="() => onLoaded()">
</StreamBarcodeReader>


  </div>
</template>

<script>
// Component Importation
import GreetingMessage from './components/GreetingMessage.vue'
import RequestForm from './components/RequestForm.vue'
import QRReaderRoot from './components/QRReaderRoot.vue'

// Component Registration
  export default {
    components: { 
      GreetingMessage,
      RequestForm,
      QRReaderRoot

    },
  }
</script>

<style scoped>

</style>
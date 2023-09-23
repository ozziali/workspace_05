<template>
  <div>
    <!-- Navigation Components -->
   <NavigationRouter />
    <div>{{ name }}</div>


    <!-- Page Components -->

    
    <GreetingMessage />
    <RequestForm />
    <!-- <QRReaderRoot /> -->
  </div>



</template>

<script>
// Component Importation
import NavigationRouter from './components/NavigationRouter.vue';
// import GreetingMessage from './components/GreetingMessage.vue';
// import RequestForm from './components/RequestForm.vue';
// import QRReaderRoot from './components/QRReaderRoot.vue';



// Component Registration
  export default {
    components: {
    NavigationRouter,
  
},
    data() {
      return {
        name: 'Vue.js'
      }
    },
    methods: {
      greet(event) {
      },
	    say(message) {
    	  alert(message)
  	  }
    } 
  }
</script>

<style scoped>

</style>
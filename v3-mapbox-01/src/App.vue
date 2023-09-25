<template>
  <div>
    <!-- Navigation Components -->
   <NavigationRouter />
    <h3 class="outer-container">{{ name }}</h3>


    <!-- Page Components -->

    <ParentItem />
 
    
    <!-- <QRReaderRoot /> -->
  </div>



</template>

<script>
// Component Importation
import NavigationRouter from './components/NavigationRouter.vue';
import ParentItem from './components/drivers/ParentItem.vue';
// import GreetingMessage from './components/GreetingMessage.vue';
// import RequestForm from './components/RequestForm.vue';
// import QRReaderRoot from './components/QRReaderRoot.vue';



// Component Registration
  export default {
    components: {

      NavigationRouter,
      ParentItem
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
  .outer-container {
  width: 400px;
  border: 1px solid #e4e4e4;
  padding: 1.5em;
  border-radius: 1em;
  margin: 0 auto 1em auto;
}

.input-group {
  display: flex;
  gap: 1em;
}

.outer-container {
      width: 400px;
      border: 1px solid #914e4e;
      padding: 1.5em;
      border-radius: 1em;
      margin: 0 auto 1em auto;
  }

  .input-group {
      display: flex;
      gap: 1em;
  }

  h1,
  h3,
  h2 {
    text-align: center;
  }
</style>
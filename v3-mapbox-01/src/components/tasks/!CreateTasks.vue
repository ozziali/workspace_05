<!-- parent -->
<template>
  <div class="outer-c grid grid-flow-row">
    <h3>CreateTasks Component</h3>
  
    <!-- child -->
    <FormTasks />
    
    
  
  </div>
  </template>
  
  
  <script>
  import FormTasks from '../formComponents/!FormTasks.vue';

 
    export default {
      components: { FormTasks },
      data() {
        return {
          
        }
      },
      methods: {
       
         
     
        
      },
    }
  </script>
  
  <style scoped>
    .outer-c {
      width: 90%;
      border: 5px solid #2fa071;
      padding: 1.5em;
      border-radius: 2em;
      margin: 0 auto 1em auto;
    }
  
    h1,
    h3,
    h2,
    h4,
    h5 {
      text-align: center;
    }
  </style>
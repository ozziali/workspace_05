<!-- parent -->
<template>
  <div class="outer-c grid grid-flow-row">
    <h3>CreateDrivers Component</h3>
  
    <!-- child -->
    <FormDrivers />
    <FormInputDriver />
    <DriversForm />
  
  </div>
  </template>
  
  
  <script>
  import FormDrivers from '../formComponents/FormDrivers.vue';
  import FormInputDriver from '../formComponents/FormInputDriver.vue';
  import DriversForm from '../formComponents/DriversForm.vue';
  
 
    export default {
      components: {
  
      FormInputDriver,
      FormDrivers,
      DriversForm
  },
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
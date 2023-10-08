
<template>
<div class="outer-c grid grid-flow-row">
  <h3>CreateDrivers Component</h3>
  <!-- <h5>child [inputName] -> parent value[CreateDrivers] :{{ value1 }}</h5> -->
  <!-- <InputName :nameValue="getInputNameValue"/> -->
  <!-- <CreateButton /> -->
  <!-- <Input2JSON /> -->

  <FormInputDriver />

</div>
</template>


<script>
import FormInputDriver from '../formComponents/FormInputDriver.vue';


// import CreateButton from '../domComponents/CreateButton.vue';
//import Input2JSON from '../formComponents/Input2JSON.vue';
//import InputName from '../formComponents/InputName.vue';

  export default {
    components: {

    FormInputDriver
},
    data() {
      return {
        
      }
    },
    methods: {
      getInputNameValue(name) {
       
   
      }
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

<template>
<div class="outer-c grid grid-flow-row">
  <h1>CreateDrivers Component</h1>
  <h5>child [inputName] -> parent value[CreateDrivers] :{{ value1 }}</h5>
  <InputName :nameValue="getInputNameValue"/>
  <CreateButton />
  <!-- <Input2JSON /> -->
  <h3></h3>
</div>
</template>


<script>
import CreateButton from '../domComponents/CreateButton.vue';
import Input2JSON from '../formComponents/Input2JSON.vue';
import InputName from '../formComponents/InputName.vue';

  export default {
    components: {
    CreateButton,
    InputName,
    Input2JSON
},
    data() {
      return {
        
      }
    },
    methods: {
      getInputNameValue(name) {
        // alert(name)
        this.value1 = name
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
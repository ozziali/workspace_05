
<template>
<InputName />
<CreateButton />
<h3></h3>
</template>


<script>
import CreateButton from '../domComponents/CreateButton.vue';
import InputName from '../formComponents/InputName.vue';

  export default {
    components: { 
      CreateButton, 
      InputName 
    },
    data() {
      return {
        
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
/* 
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
  } */
</style>
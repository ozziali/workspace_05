<template>
  <div class='outer-cont grid grid-rows-2 grid-flow-col'>
    <h3>I am a Child Component</h3>
    <div class="flex justify-center">
      <button v-on:click="childValue(aProperty)" class="btn btn-primary " >send a value</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        aProperty: "some-value",
      }
    },
    props: {
      childValue: Function
    },
    methods: {
    }
  }
</script>

<style scoped>


.outer-cont {
      width: 80%;
      border: 5px solid #a02f71;
      padding: 1.5em;
      border-radius: 2em;
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
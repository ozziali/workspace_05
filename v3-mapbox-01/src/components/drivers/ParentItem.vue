<template>
  <div class="outer-c grid grid-flow-row">
    <h3>I'm the Parent </h3>
    <div class="flex justify-center">child value: {{ value }}</div> 
    <ChildItem :childValue="getChildValue"/>
  </div>
 
</template>

<script>
import ChildItem from './ChildItem.vue';

  export default {
    name: 'Parent',
    components: { 
      ChildItem 
    },
    data() {
        return {
          value: ''
        };
    },
    methods: {
      getChildValue(name) {
        // alert(name)
        this.value = name
      }
    },
  }
</script>

<style scoped >

.outer-c {
      width: 90%;
      border: 5px solid #2fa071;
      padding: 1.5em;
      border-radius: 2em;
      margin: 0 auto 1em auto;
  }




  h1,
  h3,
  h2 {
    text-align: center;
  }
</style>
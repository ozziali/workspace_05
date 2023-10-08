<template>
  <div>
    <input class="input input-primary" type="text" :name="inputNameField" :placeholder="inputPlaceholder" v-model="inputText" id="inputfield"/>
    <button class="btn btn-primary" @click="addToArray">{{ buttonSubmit }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputNameField: "Name",
      inputPlaceholder: "Driver name",
      inputText: "",
      array: [],
      array2: ["Ford", "BMW", "Fiat"],
      buttonSubmit: "Submit",
      fieldvalue: ''
    };
  },
  methods: {
    addToArray() {
      
      this.array.push({Firstname: this.inputText });
      console.log(this.array)
      for (var key in this.array) {
        console.log(key); // logs keys in myObject
        console.log(this.array[key]); // logs values in myObject
      }
    },

  },
}
</script>

<style scoped>
.input {
 
  font-size: 1.5rem;
}
</style>
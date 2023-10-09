<template>
  <div>
    <input type="text" :name="inputName" :placeholder="inputPlaceholder" v-model="inputText" id="field" />
    <button @click="addToArray">{{ inputName }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputName: "Button Name",
      inputPlaceholder: "Enter text here",
      inputText: "",
      array: [],
      fieldvalue: "",
      item: ""
    };
  },
  methods: {
    addToArray() {
      for (var key in this.array) {
        console.log(key); // logs keys in myObject
        console.log(this.array[key]); // logs values in myObject
      }

      console.log(this.inputName)

      // this.fieldvalue = document.getElementById('field').value;
      // console.log(this.fieldvalue)
      // console.log(this.inputText)  

      // this.array.push({Firstname: this.inputText });
      // console.log(this.array)

      this.array.push({Firstname: this.inputText });
      console.log(this.array)

      

      console.log({ Firstname: this.inputText}) //25
      console.log([ this.inputText]) 
      // this.array.push({ value: this.inputText });
      // this.array.push({Firstname: this.inputText }); //code works
      
      //this.array.push({ name: this.inputName, value: this.inputText });
      
       for (var key in this.array) {
        console.log(key); // logs keys in myObject
        console.log(this.array[key]); // logs values in myObject
      }
  //      Object.keys(this.array).forEach(function(item) {
  // console.log(item); // logs keys in myObject
  // console.log(this.array[item]); // logs values in myObject
// });
    },
  },
};
</script>

<style scoped>
.input {
 
  font-size: 1.5rem;
}
</style>
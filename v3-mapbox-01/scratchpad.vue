<script>
// get the dom element to be used for the new button
let myDiv = document.getElementById("GFG");

// creating button element
let button = document.createElement('BUTTON');

// creating text to be displayed on button
let text = document.createTextNode("Button");
  
// appending text to button
button.appendChild(text);

// appending button to div
myDiv.appendChild(button);

// add button style css
button.className = "btn btn-secondary";

</script>

<template>
  <div>
    <input type="text" v-model="inputText" />
    <button>{{ inputText }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
};
</script>
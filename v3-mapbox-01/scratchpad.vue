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


async created() {
  try {
    const res = await axios.get(`http://localhost:3000/items`);
    this.items = res.data;
    } catch (error) {
    console.log(error);
  },
} 

[ "Ali",
"Muhamad",
"HealthPlus - Clare Rd",
"Delivered",
[ "Janet", "Barker", "20 Hengrove Rd", "Bristol", "BS4 2PS", "1", "CD"],
[ "Susan", "Philip", "99 Cowbridge Rd East", "Cardiff", "CF11 9AF", "3", "NCD"],
],
[ "Dean",
"Jamal",
"HealthPlus - Clare Rd",
"in-progress",
[ "Janet", "Barker", "20 Hengrove Rd", "Bristol", "BS4 2PS", "1", "CD",
   [1001 , 1002, 1003]
],
[ "Susan", "Philip", "99 Cowbridge Rd East", "Cardiff", "CF11 9AF", "3", "NCD", 
   [1001 , 1002, 1003]
]
]

</script>

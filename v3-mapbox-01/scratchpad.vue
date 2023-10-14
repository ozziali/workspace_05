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
[ "Janet", "Barker", "20 Hengrove Rd", "Bristol", "BS4 2PS", {  "items:"
                                                                      {
                                                                        000001, 
                                                                        23092023,
                                                                        "NCD",
                                                                        "In-progress->Delivered",
                                                                        "No Answer x1 also rang mobile"
                                                                      } 
                                                             }
],
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


async addItem() {
        // You're adding a new todo to the API using axios.post.
        const res = await axios.post(`http://localhost:3000/drivers`, {
          firstname: this.itemName,
          lastname: this.itemLastName,
          pharmacyname: this.itemPharmacyName
          
          //not working
          // drivers :{
          //   firstname: this.itemName,
          //   lastname: this.itemLastName,
          //   pharmacy: this.itemPharmacyName,
          // },
        });

        // You're then updating the local state of the component by adding 
        // the new todo to the todos array.
        this.items = [...this.items, res.data];
        //You're then clearing the todoName property.
        this.itemName = "";
        this.itemLastName = "";
        
      },



      ["Janet", "Barker", "20 Hengrove Rd", "Bristol", "BS4 2PS","02920258366",
                [ "000001",  "23092023", "NCD",  "Delivered","time", "No Answer x1"],
                [ "000002",  "23092023", "CD",  "In-progress", "No Answer x1"]
              ]
    },
    {
      "firstname": "Muhammad",
      "lastname": "Ali",
      "pharmacy": "HealthPlus - Bishop St",
      "id": 2
    }
</script>

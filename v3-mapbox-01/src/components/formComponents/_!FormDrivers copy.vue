<!-- child: of CreateDrivers.vue -->
<template>
  <div class="outer-container">
    <div class="">
      <h4 class="form-label">[FormDrivers]</h4>
    </div>
    <div class='form'>
      <!-- Always specify a name  -->
      <!-- and optionally an id if you need to target a specific input -->
      <!-- @submit="SubmitHandler" -->
      <FormKit
        v-model="formDaata"
        form-class=""
        submit-label='Submit'
        name="driverinputform"
        id="driverinputform"
        :actions="true"
       
        @submit="addItem()"
        type="form"
        #default="{ disabled }"
        :config="{validationVisibility: 'dirty'}"
      >
      <!-- @keyup.enter="addItem"   -->
        <FormKit
          v-model="itemName"
          
          type="text" 
          name="firstname" 
          id="firstname"
          placeholder="John"
          label="First Name"
          help="Type your first name"
          validation="required|length:3"
          validation-visibility="dirty"
        />
        <!-- @keyup.enter="addItem"  -->
        <FormKit 
          v-model="itemLastName"
          
          type="text" 
          name="lasttname" 
          id="lastname"
          placeholder="Smith"
          label="Last Name" 
          help="Type your last name"
          validation="required|length:3" 
        />
        <FormKit 
          v-model="itemPharmacyName"
          
          type="text" 
          name="pharmacyname" 
          id="pharmacyname"
          placeholder="HealthPlus - Clare Rd"
          label="Pharmacy Name" 
          help="Type your work pharmacy "
          validation="required|length:3" 
        />
        <!-- submit button built using below reference: -->
        <!-- https://formkit.com/inputs/submit -->
        <!-- <FormKit 
          type="submit"
          label="Create"
        /> -->
      </FormKit>
    </div>
    <div>
      <h4>formData:{{ formDaata }}</h4>
    </div>
    <div>
      <ul>
        <li 
          v-for="item of items" 
          :key="item.id" 
          :class="{ bought: item.bought }"
          @click="boughtItem(item.id)"
          @dblclick="removeItem(item.id)"
        >
        {{ item.id}}
          {{ item.firstname }}
          {{ item.lastname }}
          {{ item.pharmacyname }}
          
        </li>
      </ul> 
    </div>
  </div>
</template>

<script>
import axios from "axios";

  export default {
    data() {
      return {
        formDaata: {},

        // axios code datatypes
        items: [],
        itemName: "",
        itemLastName: "",
        itemPharmacyName: "",
        res: [],
      }
    },
    // This GET method automatically on page load runs 
  // and is the reason why it isnt in export default method
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/drivers`);
      this.items = res.data;
      this.res = res;

      console.log(res) // res axios object
      console.log(res.data[0]) // points to a array within res axios object 
      console.log(this.res) // proxy object
      console.log(this.res.data[0]) // proxy object structure is copy of res axios object
      console.log(this.items) // proxy array
     
    } catch (error) {
      // console.log(error);
    }
  },
    methods: {
      async boughtItem(id) {
        await axios.patch(`http://localhost:3000/drivers/${id}`, {
          bought: true,
        });
        this.items = this.items.map((item) => {
          if (item.id === id) {
            item.bought = true;
          }
          return item;
        });
      },
      async unboughtItem(id) {
        await axios.patch(`http://localhost:3000/drivers/${id}`, {
          bought: flase,
        });
        this.items = this.items.map((item) => {
          if (item.id === id) {
            item.bought = true;
          }
          return item;
        });
      },
      async addItem() {
        const res = await axios.post(`http://localhost:3000/drivers`, {
          //firstname: this.itemName,
          //lastname: this.itemLastName,
          //pharmacy: this.itemPharmacyName,
          
       

        });
        this.items = [...this.items, res.data];
        this.itemName = "";
        this.itemLastName = "";
        this.itemPharmacyName="";
      },
      //on double clicking the item, it will call removeItem(id) method
      removeItem(id) {
        axios.delete(`http://localhost:3000/drivers/${id}`);
        this.items = this.items.filter((item) => item.id !== id);
      },
    }
  }
</script>

<style scoped>
.form-label {
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 1rem;
  padding: 7px;
  border-radius: 5px;
  display: inline-block !important;
  background-color: #444;
  color: white;
}
.outer-container{
  width: 90%;
      border: 5px solid #2fa071;
      padding: 1.5em;
      border-radius: 2em;
      margin: 0 auto 1em auto;
}
.form-label {
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 1rem;
  padding: 7px;
  border-radius: 5px;
  display: inline-block !important;
  background-color: #444;
  color: white;
}
</style>
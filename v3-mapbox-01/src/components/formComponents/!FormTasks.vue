<!-- child: of CreateDrivers.vue -->
<template>
  <div class="outer-container">
    <div class="">
      <h4 class="form-label">[FormTasks]</h4>
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
      <FormKit
          v-model="itemID"
          type="text" 
          name="itempackageid" 
          id="itempackageid"
          placeholder="Package ID"
          label="Package ID"
          help="Type your first name"
          validation="required|length:4"
          validation-visibility="dirty"
          disabled: 
        />
        <FormKit
          v-model="scanDate"
          type="date" 
          name="scandate" 
          id="scandate"
          placeholder="date of scan"
          label="Date Scanned"
          validation-visibility="dirty"
          disabled: 
        />
      <!-- @keyup.enter="addItem"   -->
        <FormKit
          v-model="recipientName"
          disabled
          type="text" 
          name="recipientname" 
          id="recipientname"
          placeholder="John"
          label="Recipient Name"
          help="Type your first name"
          validation="required|length:3"
          validation-visibility="dirty"
        />
        <!-- @keyup.enter="addItem"  -->
        <FormKit 
          v-model="recipientLastName"
          disabled
          type="text" 
          name="recipientlastname" 
          id="recipientlastname"
          placeholder="Smith"
          label="Recipient Surname"     
        />
        <FormKit 
          v-model="recipientAddress_0"
          disabled
          type="text" 
          name="recipientaddress0" 
          id="recipientAddress_0"
          placeholder="99 Cowbridge Road East"
          label="Address 1" 
        />
        <FormKit 
          v-model="recipientAddress_1"
          disabled
          type="text" 
          name="recipientaddress1" 
          id="recipientaddress1"
          placeholder="Canton"
          label="Address 2" 
          
        />
        <FormKit 
          v-model="recipientCity"
          disabled
          type="text" 
          name="recipientcity" 
          id="recipientcity"
          placeholder="Cardiff"
          label="City" 
        />
        <FormKit 
          v-model="recipientPosteCode"
          disabled
          type="text" 
          name="recipientpostcode" 
          id="recipientpostcode"
          placeholder="CF11 9AF"
          label="Post Code" 
        />
        <FormKit 
          v-model="recipientContactNumber0"
          disabled
          type="text" 
          name="recipientlandline" 
          id="recipientlandline"
          placeholder="02920 258366"
          label="Tel:" 
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
      <h5>formData: {{ formDaata}}</h5>
      <br>
      <h5>formData id: {{ formDaata.itempackageid}}</h5>
      <br>
      <h5>formData scanDate: {{ formDaata.scanDate}}</h5>
      <h5>formData recipientname: {{ formDaata.recipientname}}</h5>
      <h5>formData recipientlastname: {{ formDaata.recipientlastname}}</h5>
      <h5>formData ecipientcity: {{ formDaata.recipientcity}}</h5>
      <h5>formData recipientPosteCode: {{ formDaata.recipientPosteCode}}</h5>
      <h5>formData recipientContactNumber0: {{ formDaata.recipientContactNumber0}}</h5>
    <h5>below is list not formdata  tags above </h5>
    </div>
    <div>
      <ul>
        <li 
          v-for="item of drivers" 
          :key="item.id" 
          :class="{ bought: item.bought }"
          @click="boughtItem(item.id)"
          @dblclick="removeItem(item.id)"
        >
        {{ item.id}}
        <br>
          {{ item.firstname }}
          <br>
          {{ item.lastname }}
          {{ item.pharmacyname }}
          
        </li>
      </ul> 
    </div>
    <div>
      <ul>
        <li 
          v-for="item of items" 
          :key="item.tasks" 
   
         
        >
          {{ item.id}}
          <br>
          <h5>tasks:</h5>
          <h5>{{ item.tasks }}</h5>
          <br>
          {{ item.firstname }}
          <br>
          {{ item.lastname }}
          <br>
          <br>
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
        // for drivers
        items: [],
        itemName: "",
        itemLastName: "",
        itemPharmacyName: "",
        
        //for tasks
        itemID:  "some-ID-999",
        scanDate: Date,
        recipientName: "Jawad",
        recipientLastName: "Miah",
        recipientAddress_0:"",
        recipientAddress_1:"",
        recipientCity: "",
        recipientPosteCode: "",
        recipientContactNumber0: "",
        recipientLandline: "",

        //for axios
        res: [],
        driver:{},
      }
    },
    // This GET method automatically on page load runs 
  // and is the reason why it isnt in export default method
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/drivers`);
      this.items = res.data;
      this.res = res;
      this.driver = res.data[0]
      console.log(res.data)
      console.log(res.data[0])
      this.driver = this.driver.tasks
      console.log(this.driver.tasks)



     
    } catch (error) {
      console.log(error);
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
          firstname: this.itemName,
          lastname: this.itemLastName,
          pharmacyname: this.itemPharmacyName

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
h5{
  font-size: 13px;
}
</style>
<template>
  <!-- the form's data can be obtained via: 
  1.  v-model directive and formData data() return
  2.  FormKit's indiginous 'value' object 
  3.  with @submit's by the onSubmit function + formData  method object
  4.   @submit's onSubmit -->

  <!--  v-model="formData" -->
  <!-- v-on:click="nameValue(aProperty)" -->
  <FormKit
    v-model="formData"
    form-class="outer-container"
    submit-label='buttonSubmit'
    name="drivername"
    id="inputname"
    :actions="true"
    @submit="onSubmit"
    type="form"
    #default="{ value }"
    :config="{
    validationVisibility: 'dirty'
    }"
  >
  <h4 class="form-label">[FormInputDriver]</h4>
  <div class="input-group">
    <FormKit
      type="text"
      name="firstname"
      label="First name"
      placeholder="John"
      validation="required|length:3"
      v-model="inputFieldFirstname"
    ></FormKit>

    <FormKit
      type="text"
      name="lastname"
      label="Last name"
      placeholder="Doe"
      validation="required|length:3"
      v-model="inputFieldLastname"
    ></FormKit>
    <!-- <FormKit
      type="button"
      help="You can bind event listeners."
      @click="addToArray"
    >
      Click me!
    </FormKit> -->
  </div>

    <!-- test code method 1-->
    <h4>formData:{{ formData }}</h4>
    <!-- test code method 2 -->
    <!-- <h4>value:{{ value }}</h4> -->

    <!-- <h4>surName:  {{ surName }}</h4> -->
    <!-- <h4>text:  {{ text }}</h4> -->

    <!-- <h4>formValues as (args):  {{ formValues }}</h4>  -->

    <!-- <h5>child [inputName] -> parent value[CreateDrivers] :</h5> -->
  </FormKit>
  <!-- Tutorial Submitting forms programmatically -->
  <!-- https://formkit.com/inputs/form -->
  <div>
  <!-- <button class="btn btn-primary" @click="submitForm">Signup</button> -->
  </div>
  <!-- <div>
    <h4>Shopping List</h4>
  </div> -->
  <!-- <div>
    <ul>
      <li v-for="item of items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div> -->
  <!-- <Shopping /> -->
</template>

<script>
import axios from "axios";
import Shopping from "../views/Shopping.vue";
export default {
  data() {
        
      return {
          inputNameField: 'firstname',
          inputFieldFirstname: "",
          inputFieldLastname: "",
          container: {
              Firstname: "james",
              Lastname: "khan"
          },
          formContainer: {
              Firstname: "jam",
              Lastname: "khan"
          },
          array: [],
          prop1: '',
          formData: {},
          items: [],
      };
    },
    components: { Shopping },
    async created() {
        try {
            const res = await axios.get(`http://localhost:3000/items`);
            console.log(res.data);
            this.items = res.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    methods: {
      addToArray() {
          console.log(this.container);
        this.array.push(this.container);
        console.log(this.array);
        // console.log(this.formData.firstname + this.formData.lastname)
        // this.container.Firstname = this.formData.firstname
        // this.container.Lastname = this.formData.lastname
        // console.log(this.container.Firstname )
        // console.log(this.container.Lastname )
        // console.log(this.container)
        // this.array.push(this.container);
        // console.log(this.array)
        //
        // this.array.push({Firstname: this.inputFieldFirstname });
        // // console.log(this.array)
        // this.array.push({Lastname: this.inputFieldLastname });
        for (var key in this.array) {
            console.log('id:' + key);
            console.log(this.array[key]); // logs values in myObject
        }
      },
      onSubmit() {
          this.addToArray();
      },
    newDriver() {
        function Driver() {
            this.firstname = "Albert";
            this.lastname = "Einstein";
        }
        let name = new Driver();
    },
    async addItem() {
      const res = await axios.post(`http://localhost:3000/items`, {
      name: this.itemName,
    });
      this.items = [...this.items, res.data];
      this.itemName = "";
    },
  },  
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
</style>
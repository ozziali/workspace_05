<template>
  <!-- the form's data can be obtained via: 
  1.  v-model directive and formData data() return
  2.  FormKit's indiginous 'value' object 
  3.  with @submit's by the onSubmit function + formData  method object
  4.   @submit's onSubmit -->
<!--  -->
  <!-- v-on:click="nameValue(aProperty)" -->
  <FormKit
    form-class="outer-container"
    v-model="formData"
    submit-label="Update"
    name="drivername"
    @click="nameValue(aProperty)" 
    id="inputname"
    :actions="true"
    @submit="onSubmit"
    type="form"
    #default="{ value }"
    :config="{
    validationVisibility: 'dirty'
    }"
  >
  <h1>inputName component</h1>
  <h3>Fill out the the name below:</h3>
  <!-- <h3>Fill out the form below, and we'll be in touch via email</h3> -->

  <div class="input-group">
    <FormKit
      type="text"
      name="firstname"
      label="First name"
      placeholder="John"
      validation="required|length:3"
    ></FormKit>

    <FormKit
      type="text"
      name="surname"
      label="Last name"
      placeholder="Doe"
      validation="required|length:3"
    ></FormKit>
  </div>

  <!-- test code method 1-->
  <h4>formData:{{ formData }}</h4>
  <!-- test code method 2-->
  <h4>value:{{ value }}</h4>

  <h4>surName:  {{ surName }}</h4>
  <h4>text:  {{ text }}</h4>

  <h4>formValues as (args):  {{ formValues }}</h4>

  <h5>child [inputName] -> parent value[CreateDrivers] :</h5>
  </FormKit>
  <!-- Tutorial Submitting forms programmatically -->
  <!-- https://formkit.com/inputs/form -->
  <button class="btn btn-primary" @click="submitForm">Signup for newsletter</button>
</template>


<script>

  export default {
    name: 'name',
    components: {
    },
    props: {

      nameValue: Function
    },
    data() {
      return {
        formValues: {},
        formData: {},
        surName: '',
        text: '',
        aProperty: "some-value2"

      }
    },
    methods: {
        onSubmit(formvalues){
          
          const form1name = document.getElementById("inputname").name;
          

          this.formValues = formvalues;
          console.log(formvalues);

          console.log(HTMLFormElement.forms);

          console.log(document.querySelector("#inputname"));
          // const formElement = document.querySelector("#inputname)

          //using formData inputs to make JSON string and placing to 
          //the variable 'string' 
          const string = JSON.stringify(this.formData);
          console.log(string);

          // converting JSON to Javascript obj
          const formdata =JSON.parse(string);
          console.log(formdata);
          

          // surname value in JS obj place to vue's data function
          this.surName = formdata.surname;

          //parsing formdata JSON by surname
          let surname = formdata.surname;
          console.log(surname);

          // place surname value onto vue's data function
          this.text = surname;
        },
        submitForm() {
          this.$formkit.submit('inputname')
          console.log(this.$formkit.submit('inputname'))
          console.log(JSON.stringify(this.formData))
         
        },
        submitToMailchimp(data) {
          alert(`Submitted ${data.firstname} successfully!`)
        },
        grabArgs() {

        },
      // geek() {

      //   const formElem = document.querySelector("form");

      //   formElem.addEventListener("submit", (e) => {
      //     e.preventDefault();

      //     const data = new FormData(formElem);

      //     const value = data.get('email');
      //     console.log({ value });
      //     console.log(value);
      //     console.log("value");
          
      // Get the form data from the event object
      // let data = e.formData;
      // for (var value of data.values()) {
      //   console.log(value); 
      //     console.log(data.get("email")); // foo
      //   });
      // }
    },
    computed: {
    }
  }
</script>

<style scoped >


.outer-container {
      width: 80%;
      border: 2px solid #cbab1f;
      padding: 1.5em;
      border-radius: 1em;
      margin: 0 auto 1em auto;
  }

  .input-group {
      display: flex;
      gap: 1em;
  } 

  h1,
  h3,
  h2,
  h4 {
    text-align: center;
  }
</style>
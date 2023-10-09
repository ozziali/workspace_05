<template>
  <!-- the form's data can be obtained via: 
  1.  v-model directive and formData data() return
  2.  FormKit's indiginous 'value' object 
  3.  @submit's onSubmit function as a method return-->
  <FormKit
    v-model="formData"
    v-on:click="childValue(aProperty)" 
    @submit="onSubmit"
    type="form"
    #default="{ value }"
    form-class="outer-container"
    :config="{
    validationVisibility: 'dirty',
    
    }"
  >
    <h1>Create New Driver</h1>
    <h3>Fill out the form below:</h3>
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
    <h2>formData:{{ formData }}</h2>
    <!-- test code method 2-->
    <h2>value:{{ value }}</h2>

    <div>surName:  {{ surName }}</div>
    <div>text:  {{ text }}</div>
  </FormKit>
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
        formData: {},
        surName: '',
        text: '',
        aProperty: "some-value"
      }
    },
    methods: {
        onSubmit(){
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
        }
      // geek() {

      //   const formElem = document.querySelector("form");

      //   formElem.addEventListener("submit", (e) => {
      //     e.preventDefault();

      //     const data = new FormData(formElem);

      //     const value = data.get('email');
      //     console.log({ value });
      //     console.log(value);
      //     console.log("value");
          

      //     console.log(data.get("email")); // foo
      //   });
      // }


    },
    computed: {
    }
  }
</script>

<style scoped >

/* /* 
  .outer-container {
  width: 400px;
  border: 1px solid #e4e4e4;
  padding: 1.5em;
  border-radius: 1em;
  margin: 0 auto 1em auto;
}

.input-group {
  display: flex;
  gap: 1em;
}
/* */

.outer-container {
      width: 400px;
      border: 2px solid #b7cb1f;
      padding: 1.5em;
      border-radius: 1em;
      margin: 0 auto 1em auto;
  }

  .input-group {
      display: flex;
      gap: 1em;
  } 

  /* h1,
  h3,
  h2 {
    text-align: center;
  } */
</style>
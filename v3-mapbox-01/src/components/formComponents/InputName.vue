<template>
  <!-- the form's data can be obtained via: 
  1.  v-model directive and formData data() return
  2.  FormKit's indiginous 'value' object 
  3.  @submit's onSubmit function -->
  <FormKit
    v-model="formData"
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
        name="email"
        type="text"
        label="First name"
        placeholder="John"
        validation="required|length:3"
      ></FormKit>

      <FormKit
        type="text"
        label="Last name"
        placeholder="Doe"
        validation="required|length:3"
      ></FormKit>
    </div>
    <!-- test code method 1-->
    <h2>formData:{{ formData }}</h2>
    <!-- test code method 2-->
    <h2>value:{{ value }}</h2>
    

  </FormKit>
</template>


<script>
  export default {
    name: 'name',
    components: {
    },
    data() {
      return {
        formData: {}
      }
    },
    methods: {
        onSubmit(){
          const string = JSON.stringify(this.formData);
          console.log(string);
          const formdata =JSON.parse(string);
          console.log(formdata);
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

<style >

</style>
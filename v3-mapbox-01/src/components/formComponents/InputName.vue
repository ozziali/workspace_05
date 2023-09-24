<template>
  <FormKit
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
  </FormKit>
</template>


<script>
  export default {
    name: 'name',
    components: {
    },
    data() {
      return {
      }
    },
    methods: {
    },
    computed: {
    }
  }
</script>

<style >

</style>
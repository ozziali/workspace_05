<!-- Tutorial & code obtained from: -->
<!-- https://blog.openreplay.com/how-to-build-vuejs-forms-with-formkit/ -->

<template>
  <FormKit
      type="form"
      #default="{ value }"
      form-class="outer-container"
      :config="{
      validationVisibility: 'dirty',
  }"
  >
      <h1>Appointment Request form</h1>
      <h3>Fill out the form below, and we'll be in touch via email</h3>

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

      <FormKit
          type="date"
          label="Date of Birth"
          validation="required|date_before:2023-01-01"
      ></FormKit>

      <div class="input-group">
          <FormKit
              type="text"
              label="Gender"
              placeholder="Your gender"
              validation="required"
          ></FormKit>

          <FormKit
              type="text"
              label="Phone number"
              suffix-icon="telephone"
              placeholder="555-5555-555"
              validation="required"
          ></FormKit>
      </div>
      <FormKit
          type="text"
          label="Address"
          placeholder="21st Random Street"
          validation="required"
      ></FormKit>

      <FormKit
          type="email"
          label="Email address"
          placeholder="JohnDoe@gmail.com"
          suffix-icon="email"
          validation="required|email"
      ></FormKit>
      <FormKit
          type="radio"
          label="Do you have a doctor you would prefer to attend to you?"
          name="preferred"
          :options="['Yes', 'No']"
          validation="required"
      ></FormKit>

      <FormKit
          v-if="value.preferred === 'Yes'"
          type="text"
          label="What's the name of this doctor?"
          validation="required"
      ></FormKit>
  </FormKit>
</template>


<script>
export default {
    
  }
</script>

<style>
  .outer-container {
      width: 400px;
      border: 1px solid #914e4e;
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
  h2 {
      text-align: center;
  }
</style>
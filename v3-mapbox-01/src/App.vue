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
  </FormKit>
</template>

<style>
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

h1,
h3 {
  text-align: center;
}
</style>
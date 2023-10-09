
<template>
  <div>
    <h1>Tasks</h1>
    <CreateDrivers />
    <ViewDrivers />
  </div>
</template>

<script>
import CreateTasks from '../tasks/!CreateTasks.vue';
// import ViewDrivers from '../tasks/!ViewTaskss.vue';

export default {
  components: {
    CreateTasks,
    // ViewTasks
  },
}
</script>

<style scoped>

</style>

<style >
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
<template>
  <div>
    <div>
      <h3>Shopping</h3>
    </div>
    <div>
    <!-- <ShoppingList /> -->
    <!-- <DriversForm /> -->
    </div>
  </div>
</template>

<script>
import DriversForm from '../formComponents/DriversForm.vue';
// import ShoppingList from '../formComponents/ShoppingList.vue';

  export default {
    data() {
        return {};
    },
    methods: {},
    components: { DriversForm }
}
</script>

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
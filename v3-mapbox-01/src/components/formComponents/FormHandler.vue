<template>
  <div class='name'></div>
</template>

<script>
   export default {
    data() {
      return {
        
      }
    },
    methods: {

      geek() {

        const formElem = document.querySelector("form");

        formElem.addEventListener("submit", (e) => {
          e.preventDefault();

          const data = new FormData(formElem);

          const value = data.get('email');
          console.log({ value });
          console.log(value);

          console.log(data.get("email")); // foo
        });
      }
    },
  }
</script>

<style >
</style>
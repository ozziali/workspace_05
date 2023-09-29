<template>

  <div style="text-align: center;">
    <h1 style="color:green;">
        GeeksforGeeks
    </h1>
    <h2>
        DOM Button Property
    </h2>
    <p>Click the button to create a button.</p>
    <button class="btn btn-primary"  v-on:click="geek()">
        Press me!
    </button>
    <h2>"{{ appStatus.currentStatus }}"</h2>
    <br><br>
    <div id="CFG"></div>
   
      <!-- script to create new button -->
  
  </div>
</template>

<script>
 
    
  
  export default {
    data() {
    
      return {
        appStatus: {
         currentStatus: '', 
         
        },
        componentName: 'Create Button',
      }
    },
    methods: {
      geek() {
        // get the dom element to be used for the new button
        let myDiv = document.getElementById("CFG");

        // creating button element
        let button = document.createElement('BUTTON');

        // creating text to be displayed on button
        let text = document.createTextNode("Button");
          console.log(text)

          // appending text to button
          button.appendChild(text);

          console.log(button.appendChild(text))
          // appending button to div
          myDiv.appendChild(button);
          
          // add button style css
          button.className = "btn btn-secondary";

        this.appStatus.currentStatus = button;

       console.log(button)
      }
    },
  }
</script>

 <style scoped>
/*  
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
  }  */
</style>
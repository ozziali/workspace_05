<template>

 
  <div>
    <input type="text" :name="inputName" :placeholder="inputPlaceholder" v-model="inputText" />
    <button class="btn" @click="addToObject">{{ inputName }}</button>
   
  </div>
   <button class="btn btn-primary"  @click="createButton">{{ inputText }}</button>
    <div v-for="(button, index) in buttons" :key="index">
    <button>{{ button }}</button>
  </div>

</template>




<script>
// Drivers [datatype: Object]  file 
import { drivers } from '/src/dataObjectDrivers.js';
// Drivers [datatype: JSON] file
import { driversData } from '/src/driversData.json';

export default {
  data() {
    return {
      inputName: "Firstname",
      inputPlaceholder: "Firstname",
      inputText: "",
      buttons: [],
      // datatype: Array - to pass input field's data
      dataObject: {},

      driversObject: {
                      0: {Firstname: 'John'},
                      1: {Firstname: 'Mike'},
      },
      drivers: driversData,
      school: {
                name: 'xyz school',
                address: '123 street',
                grade: 10
      },
      driversJSON : {} 
    };
  },
  methods: {
 
    addToObject() {
      for (var key in this.driversObject) {
        console.log(key); // logs keys in myObject
        console.log(this.driversObject[key]); // logs values in myObject
      }
      // check: dataObjectDrivers.js' can be read? 
      // isWorking: [Yes]
      console.log({drivers})

      // the input field's data -> dataObject J_object 
      this.dataObject[this.inputName] = this.inputText;
      
      // isWorking: [Yes]
      console.log(this.dataObject)
      
      //  { Firstname: Usman, Firstname}
      this.driverssObject = this.dataObject
      console.log(this.driversObject)

      // convert to json string
      this.driversJSON = this.objectToJson(this.driversObject)
      console.log(this.driversJSON)

              // const school = {
              //   name: 'xyz school',
              //   address: '123 street',
              //   grade: 10
              // }

              // function  objectToJson(obj){
              //   return JSON.stringify(obj)
              // };
    
              console.log(objectToJson(this.school));
              console.log({drivers})
    },
      createButton() {
      this.buttons.push(this.inputText);
    },
    objectToJson(obj){
      return JSON.stringify(obj)
    },
    multiplex() {
      createButton()
    }
  },
};
</script>

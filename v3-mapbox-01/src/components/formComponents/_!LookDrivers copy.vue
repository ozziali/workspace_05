<!-- child: of CreateDrivers.vue -->
<template>
  <div class="outer-container">
    <div>
      <h4 class="form-label">[LookDrivers]</h4>
    </div>
    <div>
      <h4>formData:{{ formDaata }}</h4>
    </div>
    <div>
      <ul>
        <li 
          v-for="item of items" 
          :key="item.id" 
          :class="{ bought: item.bought }"
          @click="boughtItem(item.id)"
          @dblclick="removeItem(item.id)"
        >
         {{ item.firstname }}
          {{ item.lastname }}
          {{ item.id}}
        </li>
      </ul> 
    </div>
    <div>
      <div>
    <button 
      v-for="(item, index) in items" 
      :key="index"
      class="btn btn-primary margin-button"
    >
      {{ item.firstname }}
    </button>
    <button type="button" class="btn btn-danger">Primary</button>
  </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";

  export default {
    data() {
      return {
        formDaata: {},

        // axios code datatypes
        items: [],
        itemName: "",
        itemLastName: "",
        res: [],
      }
    },
    // This GET method automatically on page load runs 
  // and is the reason why it isnt in export default method
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/drivers`);
      this.items = res.data;
      this.res = res;
      // console.log(res.config)
     
    } catch (error) {
      console.log(error);
    }
  },
    methods: {
      async boughtItem(id) {
        await axios.patch(`http://localhost:3000/drivers/${id}`, {
          bought: true,
        });
        this.items = this.items.map((item) => {
          if (item.id === id) {
            item.bought = true;
          }
          return item;
        });
      },
      async unboughtItem(id) {
        await axios.patch(`http://localhost:3000/drivers/${id}`, {
          bought: flase,
        });
        this.items = this.items.map((item) => {
          if (item.id === id) {
            item.bought = true;
          }
          return item;
        });
      },
      async addItem() {
        const res = await axios.post(`http://localhost:3000/drivers`, {
          firstname: this.itemName,
          lastname: this.itemLastName
        });
        this.items = [...this.items, res.data];
        this.itemName = "";
        this.itemLastName = "";
      },
      //on double clicking the item, it will call removeItem(id) method
      removeItem(id) {
        axios.delete(`http://localhost:3000/drivers/${id}`);
        this.items = this.items.filter((item) => item.id !== id);
      },
    }
  }
</script>

<style scoped>
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
.margin-button{
  margin: 10px 10px 10px 10px;
}
.btn{
  text-transform: none !important;
}
</style>
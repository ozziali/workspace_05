<!-- code obtained from:
https://www.section.io/engineering-education/building-vuejs-app-with-json-server-and-axios/ 
-->

<template>
  <div class="outer-container">
    <div>
      <h4>Shopping List</h4>
    </div>
    <ul>
      <li 
        v-for="item of items" 
        :key="item.id" 
        :class="{ bought: item.bought }"
        @click="boughtItem(item.id)"
        @dblclick="removeItem(item.id)"
      >
        {{ item.firstname }}
      </li>
    </ul>
  </div>
  <div>
    <form action="">
      <input 
        v-model="itemName" 
        @keyup.enter="addItem" 
        type="text" 
        class="input input-primary"  
      >
      <button 
        type="submit" 
        @click="addItem()" 
        class="btn btn-primary">add item
      </button>
    </form>
  </div>
  <div>{{ items }}</div><br>
  <div>{{ res }}</div>
  <div>helloo</div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      items: [],
      itemName: "",
      res: [],
    
    };
  },
  // This GET method automatically on page load runs 
  // and is the reason why it isnt in export default method
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/items`);
      this.items = res.data;
      this.res = res;
      console.log(res.config)
     
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async boughtItem(id) {
      await axios.patch(`http://localhost:3000/items/${id}`, {
        bought: true,
      });
      this.items = this.items.map((item) => {
        if (item.id === id) {
          item.bought = true;
        }
        return item;
      });
    },
    async addItem() {
      const res = await axios.post(`http://localhost:3000/items`, {
        firstname: this.itemName,
      });
      this.items = [...this.items, res.data];
      this.itemName = "";
    },
    //on double clicking the item, it will call removeItem(id) method
    removeItem(id) {
      axios.delete(`http://localhost:3000/items/${id}`);
      this.items = this.items.filter((item) => item.id !== id);
    },
  }
};
</script>

<style scoped>
#app {
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style: none;
}
.outer-container{
  width: 90%;
      border: 5px solid #2fa071;
      padding: 1.5em;
      border-radius: 2em;
      margin: 0 auto 1em auto;
}
</style>
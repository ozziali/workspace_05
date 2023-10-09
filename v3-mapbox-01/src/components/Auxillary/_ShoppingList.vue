<template>
  <div class='name'>
      <h4>Shopping List Component</h4>
    </div>
    <div>
      <ul>
        <li v-for="item of drivers" :key="drivers.id">
          {{ item.id }}
          {{ item.Firstname }}
        </li>
      </ul>
    </div>
</template>

<script>
import axios from "axios";

  export default {
    name: "App",
    data() {
      return {
      drivers: [],
      }
    },
    async created() {
      try {
        const res = await axios.get(`http://localhost:3000/drivers`);
        this.drivers= res.data;
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      // async addDriver() {
      //   const res = await axios.post(`http://localhost:3000/drivers`, {
      //   Firstname: this.itemName,
      //   });
      //   this.drivers = [...this.drivers, res.data];
      //   this.itemName = "";
      // },
      async addItem() {
      const res = await axios.post(`http://localhost:3000/items`, {
        name: this.itemName,
      });
      this.items = [...this.items, res.data];
      this.itemName = "";
    },
    }
  }
</script>

<style >
</style>


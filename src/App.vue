<template>
  <div class="app">
    <header>
      <div class="title"><h2>Juices</h2></div>
      <div class="order">
        <button @click="handleClick('id')">Order by id</button>
        <button @click="handleClick('name')">Order by name</button>
        <button @click="handleClick('price')">Order by price</button>
      </div>
    </header>
    <JuiceList :juices="juices" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Juice from "./types/Juice";
import OrderTerm from "./types/OrderTerm";
import JuiceList from "./components/JuicesList.vue";

export default defineComponent({
  name: "App",
  components: { JuiceList },
  setup() {
    const juices = ref<Juice[]>([
      {
        name: "Morango com kiwi",
        flavors: ["a", "b", "c"],
        price: 29,
        id: 1,
      },
      {
        name: "Abacaxi com limao",
        flavors: ["d", "e", "f"],
        price: 21,
        id: 2,
      },
      {
        name: "Uva Gelada",
        flavors: ["g", "h", "i"],
        price: 14,
        id: 3,
      },
    ]);

    const order = ref<OrderTerm>("id");

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };
    return { juices, handleClick, order };
  }
});
</script>

<style>
header {
  text-align: center;
}

header .order {
  margin-top: 20px;
}

button {
  margin: 0 10px;
  color: green;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>

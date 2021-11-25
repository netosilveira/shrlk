<template>
  <div class="app">
    <header>
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
import { defineComponent, reactive, ref, toRefs } from "vue";
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
        flavors: ["morango", "kiwi", "limao"],
        price: 29,
        id: 1,
      },
      {
        name: "Abacaxi com limao",
        flavors: ["abacaxi", "limao", "gelo"],
        price: 21,
        id: 2,
      },
      {
        name: "Uva Gelada",
        flavors: ["uva", "cereja", "gelo"],
        price: 14,
        id: 3,
      },
    ]);

    const order = ref<OrderTerm>("id");

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };
    return { juices, handleClick, order };
  },
  // methods: {
  //   getJuice(name : string){
  //     console.log(this.juices.find(juice => juice.name == name));
  //   }
  // }
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

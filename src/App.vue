<template>
<div class="app">
  <!-- <p v-for="juice in juices" :key="juice.id">
    {{ juice.name }} 
    
    <a v-for="flavor in juice.flavors" :key="flavor.id"> 
      {{ flavor }} </a>
      
    {{ juice.price }}</p> -->

  <p v-for="juice in juices" :key="juice.id"> {{ juices[juice.id - 1].id }}. {{juices[juice.id -1].name}} - R${{juices[juice.id -1].price}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs} from 'vue';
import Juice from './types/Juice';

export default defineComponent({
  name: 'App',
  components: { },
  setup() {
    const juices = ref<Juice[]>([
      { name: 'Morango com kiwi', flavors: ['morango', 'kiwi', 'limao'], price: 20, id: 1 },
      { name: 'Abacaxi com limao', flavors: ['abacaxi', 'limao', 'gelo'], price: 20, id: 2 },
      { name: 'Uva Gelada', flavors: ['uva', 'cereja', 'gelo'], price: 20, id: 3 }
    ])

    return { juices }
  },
  methods: {
    getJuice(name : string){
      console.log(this.juices.find(juice => juice.name == name));
    }
  }
});
</script>

<style>
</style>

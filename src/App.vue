<template>
<div class="app">
  <p v-for="juice in juices" :key="juice.id">{{ juice.name }}  {{ juice.price }}</p>
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
      { name: 'Abacaxi com limao', flavors: ['abacaxi', 'limao', 'ice'], price: 20, id: 2 },
      { name: 'Uva Gelada', flavors: ['uva', 'cereja', 'ice'], price: 20, id: 3 }
    ])

    return { juices }
  },
  methods: {

  }
});
</script>

<style>
</style>

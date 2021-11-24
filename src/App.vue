<template>
<div class="app">
  <JuiceList :juices="juices" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs} from 'vue';
import Juice from './types/Juice';
import JuiceList from './components/JuicesList.vue'
export default defineComponent({
  name: 'App',
  components: { JuiceList },
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

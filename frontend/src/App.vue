<template>
<div class="app">
  <p>{{ name }} -- {{ age }}</p>
  <button @click="changeName('Sherlock Juices')">change name</button>
  <button @click="changeAge(10)">change age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs} from 'vue';

export default defineComponent({
  name: 'App',
  components: { },
  setup() {
    // const state = reactive({
    //   name: 'Sherlock',
    //   age: 19 as string | number
    // })

    // state.name = 'nETIN';
    // state.age = 800;
    // return { ...toRefs(state)}

    const name = ref('netin')
    const age = ref<number | string>(100)

    age.value = 99

    return {name, age} 
  },
  methods: {
    changeName(name: string){
      this.name = name;
      return name;
    },
    changeAge(age: number){
      this.age = age;
      return age;
    }
  }
});
</script>

<style>
</style>

<template>
    <div class="juice-list">
        <ul>
            <li v-for="juice in juices" :key="juice.id">
            <h2>{{ juice.name }}</h2>
            <p v-for="flavor in juice.flavors" :key="flavor">{{ flavor }}  </p>
            <h3> {{ juice.price}}</h3>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType} from 'vue'
import Juice from '@/types/Juice'

export default defineComponent({
    props: {
        juices: {
            required: true,
            type: Array as PropType<Juice[]>
        }
    }
})
</script>

<style scoped>

</style>
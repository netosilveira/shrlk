<template>
    <div class="juice-list">
        <p>Ordered by {{ order }}</p>
        <ul>
            <li v-for="juice in juices" :key="juice.id">
            <h2>{{ juice.name }}</h2>
            <p v-for="flavor in juice.flavors" :key="flavor">{{ flavor }}  </p>
            <p class="price"> R$ {{ juice.price}}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType} from 'vue'
import Juice from '@/types/Juice'
import OrderTerm from '@/types/OrderTerm'

export default defineComponent({
    props: {
        juices: {
            required: true,
            type: Array as PropType<Juice[]>
        },
        order: {
            required: true,
            type: String as PropType<OrderTerm>
        }
    }
})
</script>

<style scoped>
.juice-list{
    max-width: 130vh;
    margin: 40px auto;
}

.juice-list ul{
    padding: 0;
}

.juice-list li{
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0 0 0;
    border-radius: 7px;
}

.juice-list h2{
    margin: 0 0 10px;
    text-transform: capitalize;
}

.price{
    font-size: 40px;
    color: green;

}
</style>
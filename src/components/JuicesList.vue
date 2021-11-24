<template>
    <div class="juice-list">
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
.juice-list{
    max-width: 100vh;
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
    -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 9px 0px rgba(0,0,0,0); 
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 9px 0px rgba(0,0,0,0);
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
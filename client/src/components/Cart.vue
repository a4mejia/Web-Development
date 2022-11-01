<script setup lang="ts">
import FlyoutPanel from './FlyoutPanel.vue';
const { isOpen } = defineProps<{
    isOpen:boolean;
}>();
const cart=[
    {id: 1, name: 'product 1', price: 9.99, image:''},
    {id: 2, name: 'product 2', price: 19.99, image:''},
    {id: 3, name: 'product 3', price: 29.99, image:''}

]
function closeCart(){

}
function checkout(){

}
</script>

<template>

<FlyoutPanel :is-open="isOpen">
    <template #header>
        <h3 class="title is-3">Cart</h3>
    </template>
    <div>
        <div class="fly-out-body">
            <div v-if="!cart">
                <p>Your cart is empty</p>
            </div>
            <div v-else>
                <div v-for="item in cart" :key="item.id" >
                    <div class="column is-4">
                        <img :src="item.image" :alt="item.name">
                    </div>
                    <div class="column is-8">
                        <p>{{item.name}}</p>
                        <p>{{item.price}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</FlyoutPanel>

</template>
<style scoped>

</style>
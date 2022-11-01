<script setup lang="ts">
import FlyoutPanel from './FlyoutPanel.vue';
function closeCart(){

}
function checkout(){

}
</script>
<template>
    <div>
    <div class="fly-out-header">
        <h3 class="title is-3"> cart</h3>
        <button class="button is-danger" @click="closeCart">Close</button>
    </div>
    <div class="fly-out-body">
        <div v-if="!cart">
            <p>Your cart is empty</p>
        </div>
        <div x-else>
            <div v-for="item in csrt" >

            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>

</style>
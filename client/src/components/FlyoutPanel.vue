<script setup lang="ts">
import {ref } from 'vue';
const {isOpen}= defineProps(
    
)
</script>
<template>
    <div class="fly-out" :class="{'is-open': !isOpen}">
        <div class="fly-out-body"></div>
    <slot name="header"></slot>
        
    </div>
</template>
<style scoped>
.fly-out{
    position: flex;
    top: 0;
    right: 20;
    bottom: 0;
    width: 20em;
    background-color: rgb(255, 225, 220);
    border-left: 1px solid 000;
    z-index: 100;
    transition: right 0.5s ease-in-out ;
}
.fly-out.is-open{
    right: 0;
}
.fly-out-body{
    height: 100;
    background-color: aliceblue;
    margin: .5em;
}
</style>
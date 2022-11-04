<script setup lang="ts">
import {ref} from 'vue';
const { isOpen } = defineProps<{
    isOpen:boolean;
}>();
</script>

<template>
    <div class="fly-out" :class="{'is-open': !isOpen}">
        <div class="fly-out-body">
            <div class="hero">
                <div class="fly-out-body">
                <slot name="header" />
            </div>
            </div>
            
            <slot />
        </div>
    </div>
</template>

<style scoped>
.fly-out{
    position: fixed;
    top: 0;
    right: -20em;
    bottom: 0;
    width: 20em;
    background-color: rgb(255, 225, 220);
    border-left: 1px solid #000;
    z-index: 100;

    transition: right 0.5s ease-in-out ;
    box-shadow: rgb(0,0,0/ 25%) -14px -0 8px;
}
.fly-out.is-open{
    right: 0;
}
.fly-out-body{
    height: 100%;
    background-color: aliceblue;
    margin: 1em;
    padding: 1em;
}
.fly-out-header{
    padding: 1em;
    background-color: antiquewhite;
}
.hero{
    background-color: azure;
}
</style>
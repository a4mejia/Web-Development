
<script setup lang="ts">
import { ref } from "vue";
import {RouterLink} from 'vue-router';
import Cart from "../Cart.vue";
import LoginBadge from '../LoginBadge.vue';

const isActive = ref(false);
const isCartOpen = (false);

</script>

<template>
  <Cart :is-open="isCartOpen" />
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
      <a :class="{'isActive':isActive}" @click= "isActive = !isActive"  role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{'isActive': isActive}">

      <div class="navbar-start">
        <router-link to="/" class="navbar-item" >
          Home
        </router-link>
        <router-link class="navbar-item" to="/products"  >
          Product
        </router-link>
       
        <div class="navbar-item has-dropdown is-hoverable">

          <a class="navbar-link">
            More
          </a>
  
          <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/about">
            About
          </router-link>
       
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <button class="button-is-primary" @click="isCartOpen =! isCartOpen">
              <strong>Cart</strong>
          </button>
        </div>
        <div class="navbar-item">          
          <login-badge></login-badge>
        </div>
        
      </div>
    </div>
    </div>

  </nav>
</template>
<style>
  .router-link-active{
    border-bottom: #00AA00 5px solid;
  }
</style>
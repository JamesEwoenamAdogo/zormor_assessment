<script setup>

import { RouterLink ,RouterView} from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">ADD</RouterLink>
    <RouterLink to="/location">ALL</RouterLink>
  </nav>
  
    <RouterView/>
  
  
</template>
<style>
nav{
  position:absolute;
  display: flex;
  top:9%;
  left:40%;
  font-size:2rem;
  gap:290px;
}


</style>

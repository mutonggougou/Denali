<template>

   <header>
       <div class="header-containar">
        <Logo/>
         <Nav/>     
       </div>
   </header>

</template>

<script>
import Logo from './logo.vue'
import Nav from './nav.vue'
export default {
  name: 'Header',
  components:{
     Logo, 
     Nav
  }
};
</script>

<style>
header{
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #ddd;
}
.header-containar{
    width: 1000px;
    height: 80px;
    margin: 0 auto;
    overflow: hidden;
}
</style>
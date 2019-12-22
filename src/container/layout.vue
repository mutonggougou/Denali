<template>
  <div>
   <Header/>
   <div class="container">
   <SideBar/>
   <div class="slot-container">
  <slot>
    <!-- <contact/> -->
  </slot>
   </div>
   
   </div>
  </div>
</template>

<script>
import Header from '../components/header/index.vue'
import SideBar from '../components/sideBar/index.vue'
// import Contact from '../pages/contact.vue'
export default {
  name: 'Layout',
  components:{
      Header,
      SideBar,
      // Contact
  },
  data() {
    return {
      
    }
  },
 };
</script>

<style>
.container{
  width: 1000px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  padding-top: 20px;
  background: #f5f5f5

}
.slot-container{
      width: 70%;
    min-height: 500px;
    border: 1px solid #ddd;
    border-radius: 4px;
    float: left;
}
</style>
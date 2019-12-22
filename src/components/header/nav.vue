<template>
<div class="nav">
  <!-- <a href="#">home</a>
  <a href="#">about</a>
  <a href="#">coutact</a>
  <button @click="getNavData">点击</button> -->
  <!-- <a v-for="item in nav" :key="item.id" :href="item.href">{{item.title}} </a> -->
  <router-link v-for="item in nav" :key="item.id" :to="item.href" >{{item.title}}</router-link>
  
  </div>
</template>
<script>
 import  { navApi }  from "../../api/nav";
export default {
  name: 'Nav',
   data() {
     return {
       nav: []
     }
  },
    methods: {
      getNavData: async function() {  
        //异名方法没有参数
       const getData = await navApi();
      //  alert(1)
      //  window.console.log(getData)
         window.console.log("nav 01 ====>>>>",this.nav)
          let{status,statusText} = getData; 
          if (status == 200 && statusText == "OK") {
            let {data} = getData;
            window.console.log(data.nav)
         window.console.log("nav 02 ====>>>>",this.nav)
           this.nav  = [...data.nav];
          window.console.log(this.nav);
          }
    }
   },
     created(){
      this.getNavData();
    },
}
    
</script>

<style>
.nav{
    width: 300px;
    height: 100%;
    float: right;
    text-align: center;
    line-height: 80px;
    
}
.nav a,
 
.nav a:visited{
     width: 80px;
  font-size: 16px;
  display: block;
  color: gray;
  float: left;
  padding: 0;
  margin: 0;
}
.nav a:hover{
  color: red;
}
</style>
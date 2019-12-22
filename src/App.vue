<template>
  <div id="app"> 
    <!-- <button @click="getListData">点击测试</button> -->
   <layout>
     <router-view></router-view>
     </layout>
  </div>
</template>
<script>
import Layout from "./container/layout.vue";
//  import  { ListApi }  from "./api/list";

export default {
  name: 'app',
  components: {
    Layout
  },
  //   methods: {
  //     getListData: async () => { 
  //    //用async异步数据的方法用await接受,=>执行一下当前的方法
  //       const getData = await ListApi()
  //       window.console.log(getData),
  //       alert(1);
  //     // this.axios.get(ListApi).then((data) => {
  //     //  window.console.log(data);
  //     // })
  //     //这是操作的一种方式
  //     }
  //  },
}
</script>

<style>
</style>

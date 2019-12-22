<template>
  <div class="sideBar">
    <div class="avatar">
      <img src="" alt="">
    </div>
    <div class="des info">
      这是三日老师的博客，三日老师是一个非常优秀的web前端老师，大家可以来关注，，，
      这是三日老师的博客，三日老师是一个非常优秀的web前端老师，大家可以来关注，，，
    </div>
    <div class="adress info">
      北京市王府井朝阳门大街1号
    </div>
    <div class="mall info">
      1963813983@qq.com
    </div>
    <div class="tel info">12345678901</div>
  </div>
</template>

<script>
   import {myselfApi} from '../../api/myself'
export default {
  name: 'SideBar',
     methods: {
       getmyselfData:async function() {
         const getData = await myselfApi()
         window.console.log(getData)
        }
     },
      created(){
      this.getmyselfData();
    },
 };
 </script>

<style>
 .sideBar{
  width: 200px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  float: left;
    margin: 0 24px;
  padding: 20px;
  font-size: 15px;
  color: #444;
  background: #fff;
} 
.sideBar .avatar{
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: #ccc;
  margin: 10px auto;

}
.sideBar .info{
  width: 100%;
  line-height: 24px;
  margin: 15px 10px;
  padding-bottom: 4px;
  border-bottom: 1px dashed #ddd;
}
.sideBar .info:last-child{
  padding-bottom: 6px;
  border-bottom: none;
}
</style>
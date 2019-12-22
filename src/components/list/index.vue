<template>
 <div class="list">
   <div class="li">
     <div class="pic">
       <img src="" alt="">
     </div>
     <div class="articleinfo"> 
     <h3 class="title">这是当前文章的标题</h3>
     <div class="date">2019-9-18</div>
     <div class="des">好奇的小白鼬，吉米·托希尔（Jimmy Tohill）的照片,劳累时将车停下来。
      这似乎是个简单的建议，但是阿拉斯加的白天很长，很难入睡。有时您会发现自己凌晨三点钟起床。
         加上在一个有趣的地方的兴奋，午餐后您最终会非常疲倦。<p>©Old Sourdough Studio – Denali</p></div>
     <div class="more"><a href="#">阅读更多>></a></div>
     </div>
   </div>
   <div class="li">
     <div class="pic">
       <img src="" alt="">
     </div>
     <div class="articleinfo"> 
     <h3 class="title">这是当前文章的标题</h3>
     <div class="date">2019-9-18</div>
     <div class="des">好奇的小白鼬，吉米·托希尔（Jimmy Tohill）的照片,劳累时将车停下来。
      这似乎是个简单的建议，但是阿拉斯加的白天很长，很难入睡。有时您会发现自己凌晨三点钟起床。
         加上在一个有趣的地方的兴奋，午餐后您最终会非常疲倦。<p>©Old Sourdough Studio – Denali</p></div>
     <div class="more"><a href="#">阅读更多>></a></div>
     </div>
   </div>
   <div class="li">
     <div class="pic">
       <img src="" alt="">
     </div>
     <div class="articleinfo"> 
     <h3 class="title">这是当前文章的标题</h3>
     <div class="date">2019-9-18</div>
     <div class="des">好奇的小白鼬，吉米·托希尔（Jimmy Tohill）的照片,劳累时将车停下来。
      这似乎是个简单的建议，但是阿拉斯加的白天很长，很难入睡。有时您会发现自己凌晨三点钟起床。
         加上在一个有趣的地方的兴奋，午餐后您最终会非常疲倦。<p>©Old Sourdough Studio – Denali</p></div>
     <div class="more"><a href="#">阅读更多>></a></div>
     </div>
   </div>
   <div class="li">
     <div class="pic">
       <img src="" alt="">
     </div>
     <div class="articleinfo"> 
     <h3 class="title">这是当前文章的标题</h3>
     <div class="date">2019-9-18</div>
     <div class="des">好奇的小白鼬，吉米·托希尔（Jimmy Tohill）的照片,劳累时将车停下来。
      这似乎是个简单的建议，但是阿拉斯加的白天很长，很难入睡。有时您会发现自己凌晨三点钟起床。
         加上在一个有趣的地方的兴奋，午餐后您最终会非常疲倦。<p>©Old Sourdough Studio – Denali</p></div>
     <div class="more"><a href="#">阅读更多>></a></div>
     </div>
   </div>
   <div class="li">
     <div class="pic">
       <img src="" alt="">
     </div>
     <div class="articleinfo"> 
     <h3 class="title">这是当前文章的标题</h3>
     <div class="date">2019-9-18</div>
     <div class="des">好奇的小白鼬，吉米·托希尔（Jimmy Tohill）的照片,劳累时将车停下来。
      这似乎是个简单的建议，但是阿拉斯加的白天很长，很难入睡。有时您会发现自己凌晨三点钟起床。
         加上在一个有趣的地方的兴奋，午餐后您最终会非常疲倦。<p>©Old Sourdough Studio – Denali</p></div>
     <div class="more"><a href="#">阅读更多>></a></div>
     </div>
   </div>
 </div>
</template>

<script>
    import  { ListApi }  from "../../api/list";
export default {
  name: 'List',

    methods: {
      getListData: async function() {
        const getData = await ListApi();
       window.console.log(getData)
      }
    },
     created(){
      this.getListData();
    },
};
</script>

<style>
.list{
  width: 100%;
  height: 100%;
  color: #555; 
}
.list .li{
  width: 100%;
  height: 180px;
  background:#fff;
  margin-bottom: 5%;
}
.list .li .pic{
 width: 180px;
 height: 180px;
 background:#000;
 border-radius: 4px;
 overflow: hidden; 
 margin-right: 20px;
 float: left;
}
.list .li .articleinfo{
    width: 70%;
    height: 180px;
    float: left;
}
.list .li .articleinfo .title{
  width: 526px;
  height:30px;
  line-height: 30px;
  font-size: 16px;
  margin-top: 6px;
  
}
.list .li .articleinfo .des,.date{
  line-height: 20px;
  font-size: 14px;
}
.articleinfo .more a{
  width: 100px;
  height: 30px;
  color: blue;
  font-size: 14px;
  line-height: 30px;
  display: block;
}
.more a:hover{
  color: red;
}

</style>
<template>
    <div class="result">
      <div class="back"><img src="../img/back.png" alt="back" v-on:click="back"></div>
      <div class="container">
          <div class="title">你们的Match指数是</div>
      <div class="piechart">
        <div class="score">{{Math.floor(score)}}%</div>
        <svg viewBox = "0 0 32 32" class = "svg_circle">
        <circle class="circle" r = "16" cx = "16" cy ="16" v-bind:style = "{strokeDasharray:Math.floor(score) + ' 100'}"></circle>
        </svg>
      </div>
      <div class="title word">
        {{message}}
      </div>
      <div class="box" v-show = "info.douban.film || info.douban.book">
        <div class="line"></div>
      <div class="msg">
        <div class="title_s">豆瓣</div>
        <div class="common" v-show = "info.douban.film">
          <div class="common_t">共同看过的电影：</div>
          <div class="common_t">
            {{info.douban.film}}
          </div>
        </div>
        <div class="common" v-show = "info.douban.book">
          <div class="common_t">共同看过的小说：</div>
          <div class="common_t">
            {{info.douban.book}}
          </div>
        </div>
      </div>
      </div>

      <div class="box" v-show = "info.zhihu.length">
        <div class="line"></div>
      <div class="msg">
        <div class="title_s">知乎</div>
        <div class="common">
          <div class="common_t">共同关注的话题：</div>
          <div class="common_t">
            {{info.zhihu}}
          </div>
        </div>
      </div>
      </div>

      <div class="box" v-show = "info.weibo.length">
        <div class="line"></div>
      <div class="msg">
        <div class="title_s">微博</div>
        <div class="common">
          <div class="common_t">共同关注的大神：</div>
          <div class="common_t">
            {{info.weibo}}
          </div>
        </div>
      </div>
      </div>
      
      <div class="box" v-show = "info.wangyi.length">
        <div class="line"></div>
      <div class="msg">
        <div class="title_s">网易云音乐</div>
        <div class="common">
          <div class="common_t">共同听过的音乐：</div>
          <div class="common_t">
            {{info.wangyi}}
          </div>
        </div>
      </div>
      </div>
      </div>

    </div>
</template>
  
<script>


export default {
  name:"result",
  mounted() {
   this.score = this.$parent.score.score
   this.message = this.$parent.score.message
   this.info = this.$parent.score.info
  },
	data (){
		return {
      "score" : 0,
      "message" : "",
      "info" : {
        "douban": {
                  film:"",
                  book:""
                },
        "wangyi" : "",
        "zhihu" :"",
        "weibo" :""
      }
    }

	},
  methods:{
    back:function(e){
       this.$router.push("/")
    }
  }
}
</script>

<style lang='sass'>
  @keyframes result_show{
    from{transform: translateY(100%);}
    to{transform: translateY(0);}
  }
  .result{
    animation: result_show 1s ease-in-out;
    width: 100%;
    padding-bottom: 64px;
    font-weight: lighter;
    position: absolute;
    color: rgb(237,232,191);
    font-size: 18px;
    .back{
      margin-top:23px;
      margin-left: 35px;
      img{
        width: 23px;
      } 
    }
    .score{
      color: #eb6100;
      font-size: 30px;
      text-shadow: 0 0 7px;
      font-weight: normal;
      position: absolute;
      border-radius: 50%;
      border:9px solid #dcdddd;
      width: 100px;
      height: 100px;
      line-height: 82px;
      box-sizing: border-box;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
    }
    .piechart{
      height: 100px;
      position: relative;
      text-align: center;
      margin-top: 40px;
      svg{
        width: 100px;
        height: 100px;
        transform: rotate(-90deg);
        border-radius: 50%;
      }
      .circle{
        fill:transparent;
        stroke:#e1484b;
        stroke-width:6px;
        animation: fillup 1s ease-out forwards; 
      }
      @keyframes fillup{
        from{stroke-dasharray: 0 100;}
      }
    }
    .container{
      width: 700px;
      margin: 0px auto;
    }
    .back:hover{
      cursor: pointer;
    }
    .title{
      font-size: 30px;
      color: rgb(237,232,191);
      text-align: center;
      margin-top: 29px;
    }

    .word{
      margin-top: 43px;
    }
    .line{
      width: 100%;
      height: 1px;
      margin-top: 43px;
      background-color: #413b43
    }
    .msg{
      margin-top: 29px;
      .title_s{
        display: inline-block;
        height: 32px;
        line-height: 30px;
        box-sizing: border-box;
        border:1px solid rgb(237,232,191);
        padding: 0 12px;
      }
    }
    .common{
      margin-top: 27px;
      .common_t{
        vertical-align: middle;
        display: inline-block;
      }
    }

  }
</style>
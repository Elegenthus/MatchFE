<template>
  	<div class="index">
     	<div class="main item" v-bind:class="{ mainNext : onNext}">
     		<div class="pic">
     			<img src="../img/match.svg" alt="match" class="main_icon">
     			<img src="../img/text.svg" alt="text" class="main_text">
     			<div class="text">找寻相似的光与热</div>
     			<img src="../img/next.svg" alt="next" class="main_next" v-on:click = "next">
     		</div>
     	</div>
     	<div class="input item"  v-bind:class="{ inputNext : onNext}">
     		<div class="content">
     			<div class="box">
     				<div class="box_container">
     					<div class="pic">
     						<img src="../img/douban.png" alt="douban">
     					</div>
     					<input type="text" class="id" placeholder="你的ID" v-model = "doubanId1">
              <input type="text" class="id move" placeholder="TA的ID" v-model = "doubanId2">
     				</div>

     				<div class="box_container">
     					<div class="pic">
     						<img src="../img/wyy.png" alt="wangyiyun">
     					</div>
     					<input type="text" class="id" placeholder="你的ID" v-model = "wangyiId1">
              <input type="text" class="id move" placeholder="TA的ID" v-model = "wangyiId2">
     				</div>

     				<div class="box_container">
     					<div class="pic">
     						<img src="../img/weibo.png" alt="weibo">
     					</div>
     					<input type="text" class="id" placeholder="你的ID" v-model = "weiboId1">
              <input type="text" class="id move" placeholder="TA的ID" v-model = "weiboId2">
     				</div>

     				<div class="box_container">
     					<div class="pic">
     						<img src="../img/zhihu.png" alt="zhihu">
     					</div>
     					<input type="text" class="id" placeholder="你的ID" v-model = "zhihuId1">
              <input type="text" class="id move" placeholder="TA的ID" v-model = "zhihuId2">
     				</div>
            
            <div class="text_align_fix"></div>
     			</div>

				<div class="input_text">输入你和TA的ID（可选填）</div>
				<button class="button match_button" v-on:click = "count">MATCH</button>

     		</div>
     	</div>
      <div class="loading item"  v-bind:class="{ loadingNext : isloading}">
        <div class="line"></div>
        <div class="matching">
          <img src="../img/loading.svg" alt="loading">
          <div class="text">MATCHING...</div>
        </div>     
      </div>
    </div>
</template>

<script>
import 'whatwg-fetch';
export default {
  name:"index",
	data (){
		return {
			onNext:false,
      isloading:false,
      doubanId1: "",
      wangyiId1: "",
      weiboId1: "",
      zhihuId1: "",
      doubanId2: "",
      wangyiId2: "",
      weiboId2: "",
      zhihuId2: ""
    }
	},
	methods:{
		next: function (event) {
			this.onNext = true
		},
    count:function(event){
      this.isloading = true

      fetch('/getScore/', {
      method: 'POST',
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
      body: JSON.stringify({
    wangyiId1: this.wangyiId1,
    wangyiId2: this.wangyiId2,
    doubanId1: this.doubanId1,
    doubanId2: this.doubanId2,
    weiboId1: this.weiboId1,
    weiboId2: this.weiboId2,
    zhihuId1: this.zhihuId1,
    zhihuId2: this.zhihuId2
  })
    })
    .then( res => {
      return res.json()
    })
    .then( json => {
       setTimeout( () => {
        this.$parent.score = json
        this.$router.push("result")
       }, 2000)
    })
    }
	}
}
</script>

<style lang='sass'>
@import "../scss/button.scss";

.index{
  overflow:hidden;
  width:100%;
  height: 100%;
  position: relative;
  .loading{
    visibility: hidden;
    background: linear-gradient(to bottom,rgba(235,97,0,0.5),rgba(235,97,0,0));
    .line{
      width: 100%;
      height: 2px;
      box-shadow: 0 0 5px 2px #eb6100;
    }
    .matching{
      margin: 180px auto 0;
      width: 380px;
      text-align: center;
      img{
        width: 65px;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        box-shadow: 0 0 5px 2px white;
      }
      .text{
        margin-left: 34px;
        color: white;
        display: inline-block;
        vertical-align: middle;
        text-shadow:0px 0px 5px white;
        font-size: 30px;
      }
    }
  }
  @keyframes loading{
    0%{transform: translateY(100%);}
    50%{transform: translateY(0);}
    100%{transform: translateY(100%);}
  }
  .loadingNext{
    animation: loading 4s infinite;  
    visibility: visible;
    z-index: 4;
  }
  .main_next:hover{
    cursor: pointer;
  }
  .item{
  	position: absolute;
  	width:100%;
  	height: 100%;
  	top: 0;
  	left: 0;
  }
  .main{
	z-index: 2;
	.pic{
		width: 330px;

		position: relative;
		height: 406px;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	img{
		display: block;
	}
	.main_icon{
		margin: 56px auto 0;
		width: 149px;
	}
	.main_text{
		margin:36px auto 0;
		width: 160px;
	}
	.text{
		text-align: center;
		font-size: 30px;
		font-family: sans-serif;
		color: #f1ecc2;
		margin-top: 75px; 
	}
	.main_next{
		margin: 35px auto 0;
		width: 65px;
		animation: next 0.7s infinite;
	}
	@keyframes next{
		0%{
			transform: translateY(0px);
		}
		50%{
			transform: translateY(20px);
		}
		100%{
			transform: translateY(0px);
		}
	}
  }
  .mainNext{
  	animation: main_leave 2s ease-in-out;
  	opacity: 0;
  }
  @keyframes main_leave {
  	from{
  		transform: translateY(0);
  		opacity: 1;
  	}
  	to{
  		transform: translateY(-100%);
  		opacity: 0;
  	}
  }

  .input{
    opacity: 0;
  	.content{
  		width: 915px;
  		margin: 80px auto 0;
  	}
    .box{
      text-align: justify;
    }
    .text_align_fix{
      display: inline-block;
      width: 100%;
      height: 0;
      overflow: hidden;
    }
  	.box_container{
  		display: inline-block;
  		vertical-align: top;
  		width: 180px;
  		height: 270px;
  		text-align: center;
  		border-radius: 18px; 
  		background-color:#1f2730;
  		.pic{
  			margin-top: 26px;
  			img{
  				width: 85px;
  			}
  		}
      .id{
        margin: 34px auto 0;
        width: 122px;
        height: 36px;
        padding-left: 14px;
        border: 0;
        border-radius: 18px;
        display: block;
        font-size: 16px;
        color: rgb(223,69,67);
      }
      .move{
        margin-top: 24px;
      }
  	}
    .input_text{
      text-align: center;
      font-size: 30px;
      color: rgb(241,236,194);
      font-weight: lighter;
    }
    .button{
      position: relative;
      display: block;
      font-weight: lighter;
      height: 50px;
      font-size: 30px;
      margin:42px auto 0;
      width: 180px;
      border:1px solid #df4543;
      border-radius: 25px;
    }
    .box_container:hover{
      box-shadow: 0 0 29px 5px #1b1c25;  
      cursor: pointer;      
    }
  }
  .inputNext{
    animation: input_show 2s ease-in-out;
    z-index: 3;
    opacity: 1;
  }
  @keyframes input_show {
    from{
      opacity: 0;
      transform: translateY(100%);
    }
    to{
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
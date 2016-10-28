<template>
    <div class="result">
     score:{{score}} 
     <br>
     message: {{message}}
     <br>
     douban:{{info.douban}}
     <br>
     yyy:{{info.yyy}}
     <br>
     zhihu:{{info.zhihu}}
     <br>
     weibo:{{info.weibo}}
    </div>
</template>
  
<script>


export default {
  mounted() {
    fetch('/getScore', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: 'Hubot',
          login: 'hubot',
      })
    })
    .then(res=>{
      return res.json()
    })
    .then(json =>{

    })
  },
	data (){
		return {
      "score" : 0,
      "message" : "",
      "info" : {
        "douban": "",
        "yyy" : "",
        "zhihu" :"",
        "weibo" :""
      }
    }

	}
}
</script>

<style lang='sass'>
.foo {
  background-color: #000;
}
</style>
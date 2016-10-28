<template>
  	<div>
       <h3>Match!!</h3>
       <ul>
        <li><router-link to="/">Go to home page</router-link></li>
        <li><router-link to="/result">Go to Result page</router-link></li>
      </ul>
  		 <router-view></router-view>
  	</div>
</template>

<script>


export default {
	data (){
		return {
			message: "hahahha"
    }
	}
}
</script>

<style lang='sass'>
.foo {
  background-color: #000;
}
</style>

<template>
	<footer>
		<ul class="footer_list">
			<router-link to='/home' class='li'>
				<li>
					<i class='fa fa-home'></i>
					首页
				</li>
			</router-link>
			<router-link to='/mold' class='li'>
				<li>
					<i class='fa fa-th-list'></i>
					分类
				</li>
			</router-link>
			<router-link to='/shop_car' class='li'>
				<li>
					<i class='fa fa-shopping-cart'></i>
					购物车
					<span class='num'>{{count}}</span>
				</li>
			</router-link>
			<router-link to='/me' class='li'>
				<li>
					<i class='fa fa-user'></i>
					我的
				</li>
			</router-link>
		</ul>
	</footer>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
  	count(){
  		return this.$store.state.goods_info.length;
  	}
 }
}
</script>

<style lang="scss">
	
footer{
	height: 40px;
}
.footer_list{
    display: flex;
    position: fixed;
	bottom: 0;
	width: 100%;
	background: #fff;
	border-top: 1px solid #ccc;
}
.footer_list .li:nth-child(4){
	position: relative;
}
.footer_list .li{
    width: 25%;
    text-align: center;
    margin-top: 7px;
    color: #000;
    li{
	    display: flex;
	    flex-direction: column;
    }
}
.footer_list .router-link-active{
    color: #FC4141;
}
.footer_list .num {
    width: 12px;
    height: 12px;
    font-size: 10px;
    line-height: 14px;
    display: block;
    position: absolute;
    background: #fc4141;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    position: absolute;
    right: 33%;
    top: 2px;
}

</style>
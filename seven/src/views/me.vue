<template>
	<div class="me">
		<div class="me_title">
			<i>
				<img src="../images/shezhi.png" alt="" />
			</i>
			<span>我的717商城</span>
		</div>
		<div class="sec">
		<div class="home_shop">
			<i>
				<img src="../images/user.png" alt="" />
			</i>
			<p>71712419207</p>
		</div>
		<div class="me_shop">
			<div>
				<i class='me_shophome'>
					<img src="../images/img_06.png" alt="" />
				</i>
				<span>我的店铺</span>
			</div>
			<i class="right_arrow">
				<img src="../images/right.png" alt="" />
			</i>
		</div>
		<div class='descript_list'>
			<dl>
				<dt><img src="../images/fu.png" alt="" /></dt>
				<dd>待付款</dd>
			</dl>
			<dl>
				<dt><img src="../images/fahuo.png" alt="" /></dt>
				<dd>待发货</dd>
			</dl>
			<dl>
				<dt><img src="../images/shou.png" alt="" /></dt>
				<dd>待收获</dd>
			</dl>
			<dl>
				<dt><img src="../images/shouhou.png" alt="" /></dt>
				<dd>售后</dd>
			</dl>
			<dl>
				<dt><img src="../images/dingdan.png" alt="" /></dt>
				<dd>我的订单</dd>
			</dl>
		</div>
		<div class="me_sheqv">
			<ul class="ul_list">
				<router-link to='/translate'>
					<li>
						<div>
							<i class="bg">
								<img src="../images/house.png" alt="" />
							</i>
							<span>我的社区</span>
						</div>
						<i class="right">
							<img src="../images/right.png" alt="" />
						</i>
					</li>
				</router-link>
				<router-link to='/balance'>
					<li>
						<div>
							<i class="bg">
								<img src="../images/yue.png" alt="" />
							</i>
							<span>账户余额</span>
						</div>
						<i class="right">
							<img src="../images/right.png" alt="" />
						</i>
					</li>
				</router-link>
				<router-link to='/address'>
					<li>
						<div>
							<i class="bg">
								<img src="../images/weizhi.png" alt="" />
							</i>
							<span>地址管理</span>
						</div>
						<i class="right">
							<img src="../images/right.png" alt="" />
						</i>
					</li>
				</router-link>
				
			</ul>
		</div>
		<div class="bar"></div>
		<div class="caibar">
			<i>
				<img src="../images/one.png" alt="" />
			</i>
			<span>热门推荐</span>
			<i>
				<img src="../images/two.png" alt="" />
			</i>
		</div>	
		<!--商品组件-->
		<goods :info='goods_list'></goods>
		</div>
		<FooterNav></FooterNav>
	</div>
</template>

<script>
	import goods from '../components/goods.vue'
	import FooterNav from "../components/footer.vue"
	export default {
		name:'me',
		data(){
			return {
				data:[],
				goods_list:''
			}
		},
		components:{
			FooterNav,
			goods
		},
		created(){
		  	let vm=this;
		  	this.$http.get('../src/server/goodslist.json').then((res)=>{
		  		vm.goods_list=res.data.data.data
		  		this.$store.state.list=res.data.data.data 
		  	})
		}
	}
</script>

<style scoped>
	.me{
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
	}
	.sec{
		flex: 1;
		overflow-y:scroll ;
	}
	.me_title{
		height: 44px;
		text-align: center;
		line-height: 44px;
		border-bottom: 1px solid #ccc;
		font-size: 16px;
	}
	.me_title i{
		position: absolute;
		width: 20px;
		top:5px;
		left:10px;
	}
	.me_title i img{
		width: 100%;
		height: 100%;
	}
	.home_shop{
		text-align: center;
		background: linear-gradient(to bottom,#fc7141,#fc5d41);
		color: white;
		padding-top: 10px;
	}
	.home_shop i{
		display: block;
		width: 16%;
		margin: 0 auto;
	}
	.home_shop i img{
		width: 100%;
	}
	.home_shop p{
		line-height: 40px;
		font-size: 14px;
	}
	.me_shop{
		display: flex;
		justify-content: space-between;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #ccc;
		position: relative;
		padding-left: 50px;
		font-size: 16px;
	}
	.me_shop .me_shophome{
		display: inline-block;
		width: 25px;
		position: absolute;
		left: 10px;
		top: 5px;
	}
	.me_shop .me_shophome img{
		width: 100%;
	}
	.me_shop .right_arrow{
		display: inline-block;
		width: 8px;
		position: absolute;
		right: 10px;
		top: 0;
	}
	.right_arrow img{
		width: 100%;
	}
	.descript_list{
		display: flex;
		border-bottom: 1px solid #ccc;
	}
	.descript_list dl{
		flex: 1;
		padding: 5px;
		padding-top: 10px;;
	}
	.descript_list dl:last-child{
		border-left: 1px solid #ccc;
	}
	.descript_list dt{
		width: 40%;
		height: 32px;
		margin: 0 auto;
	}
	.descript_list dt img{
		width: 100%;
	}
	.descript_list dd{
		margin-top: 5px;
		margin-bottom: 2px;
		text-align: center;
	}
	.caibar{
		text-align: center;
		line-height: 40px;
		background: #fff;
		margin-top: 5px;
		margin-bottom: 5px;
	}
	
	.caibar i{
		display: inline-block;
		width: 15px;       
	}
	
	.caibar i img{
		width: 100%;
		height: 100%;
	}
	.bar{
		width: 100%;
		height: 5px;
		background: #f7f7f7;
	}
	.ul_list li{
		padding-left:40px;
		position: relative;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #ccc;
	}
	.ul_list li:last-child{
		border-bottom: none;
	}
	.bg{
		width: 20px;
		position: absolute;
		top: 5px;
		left: 10px;
	}
	.bg img{
		width: 100%;
	}
	.right{
		position: absolute;
		top: 3px;
		right: 10px;
	}
	.right img{
		width: 8px;
	}
</style>
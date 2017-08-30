<template>
	<div class="goodslist">
		<div class="header-wrap">
			<header class="goods-header">
				<span class="back" @click='back'>
					<i class="fa fa-angle-left"></i> 返回
				</span>
				<ul class="tab">
					<li>商品</li>
					<li>详情</li>
				</ul>
			</header>
		</div>
		
		<div class="goods-detial">
			<swiper :options="swiperOption" ref="mySwiperA">
				<swiper-slide>
					<div class="banner">
						<img :src="'http://www.lb717.com/'+detail_data.obj_data" alt="" />
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<p class="goods-name">
				{{detail_data.goods_name}}
			</p>
			<div class="money">
				<p class="goods-price">¥ {{detail_data.discount_price}} <span>¥ 68.00</span></p>
				<p class="freight">(运费：¥ 0.00)</p>
			</div>
			
			<div class="shop">
				<dl>
					<dt><img src="../images/shop-img.jpg" alt="" /></dt>
					<dd>
						<p class="shop-name">嫩江源是食品专营店</p>
						<p class="shop-men">NJY1407004</p>
					</dd>
				</dl>
				<button class="goin-shop">进入店铺</button>
			</div>
			
			<div class="recommend">
				
				<swiper :options="swiperOp" ref="mySwiperA">
					  <!-- 幻灯内容 -->
					  <swiper-slide>
					  	<dl>
							<dt><img src="http://www.lb717.com//Uploads/images/old/data/20150107/goodsimage/huge/5349800df44410288a0fa2fbfcea6f45e2aaedb1.jpg" alt="" /></dt>
							<dd>
								<p class="goods-title">田思思TSISI  L-阿拉伯糖 木糖 低聚木糖    20ml*9瓶/盒 礼品装    买2盒赠1盒99迷你装</p>
								<p class="price">¥ 199.00</p>
							</dd>
						</dl>
					  </swiper-slide>
					  <swiper-slide>
					  	<dl>
							<dt><img src="http://www.lb717.com//Uploads/images/admin/depositstoregoodsupload/release/13247/2017-03/huge/8417778195.jpg" alt="" /></dt>
							<dd>
								<p class="goods-title">田思思TSISI  L-阿拉伯糖 木糖 低聚木糖    20ml*9瓶/盒 礼品装    买2盒赠1盒99迷你装</p>
								<p class="price">¥ 199.00</p>
							</dd>
						</dl>
					  </swiper-slide>
					  <swiper-slide>
					  	<dl>
							<dt><img src="http://www.lb717.com//Uploads/images/admin/depositstoregoodsupload/release/0/2015-12/huge/3347792871.jpg" alt="" /></dt>
							<dd>
								<p class="goods-title">田思思TSISI  L-阿拉伯糖 木糖 低聚木糖    20ml*9瓶/盒 礼品装    买2盒赠1盒99迷你装</p>
								<p class="price">¥ 199.00</p>
							</dd>
						</dl>
					  </swiper-slide>
					  <swiper-slide>
					  	<dl>
							<dt><img src="http://www.lb717.com//Uploads/images/admin/depositstoregoodsupload/release/13247/2017-03/huge/5414447833.jpg" alt="" /></dt>
							<dd>
								<p class="goods-title">田思思TSISI  L-阿拉伯糖 木糖 低聚木糖    20ml*9瓶/盒 礼品装    买2盒赠1盒99迷你装</p>
								<p class="price">¥ 199.00</p>
							</dd>
						</dl>
					  </swiper-slide>
				</swiper>
			</div>
			
		</div>
	
		<div class="goods_footer">
			<ul>
				<li><img src="../images/lissen.png" alt="" />客服</li>
				<li><i class='fa fa-shopping-cart'></i>购物车</li>
			</ul>
			<div>
				<p class='add_cart'>加入购物车</p>
				<p class='buy'>立即购买</p>
			</div>
		</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
export default{
	data(){
		return{
			swiperOption: {
			    autoplay: 1000,
			    loop:true,
			    pagination : '.swiper-pagination',
			    mousewheelControl : true
			},
			swiperOp: {
				slidesPerView : 3.3
			},
			detail_data:''
		}
	},
	computed:mapState(['list']),
	methods:{
		back(){
			this.$router.push('/home')
		}
	},
	created(){
		for(var i=0;i<this.list.length;i++){
			if(this.$route.query.id==this.list[i].goods_id){
				this.detail_data=this.list[i];
				console.log(this.detail_data);
			}
		}
	}
}
	
</script>
<style>
	.goodslist {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.header-wrap{
		width: 100%;
		height: 45px;
		position: fixed;
		top:0;
		z-index: 999;
		background: #fff;
	}
	.goods-header {
		line-height: 45px;
		text-align: center;
		position: relative;
	}
	
	.goods-header .back {
		position: absolute;
		left: 10px;
		top: 0;
		font-size: 14px;
	}
	
	.goods-header .back i {
		font-size: 14px;
	}
	
	.goods-header .tab {
		width: 30%;
		margin: 0 auto;
	}
	
	.goods-header .tab li {
		width: 50%;
		float: left;
		text-align: center;
		font-size: 14px;
	}
	.goods-detial{
		height: auto;
		overflow-y: scroll;
	}
	.goods-detial .banner img{
		width: 100%;
		height: 300px;
	}
	.goods-name{
		padding:8px 10px;
		background: #fff;
	}
	.money{
		padding:0 12px;
		background: #fff;
	}
	.money .goods-price{
		font-weight: 600;
	}
	.money .goods-price span{
		color:#ccc;
		font-weight: normal;
		text-decoration:line-through;
	}
	.money .freight{
		margin-top: 8px;
	}
	.shop{
		background: #fff;
		padding: 0 10px;
		padding-top: 30px;
		padding-bottom: 5px;
		position: relative;
	}
	.shop dl{
		display: flex;
	}
	.shop dl dt{
		width:30px;
		height: 30px;
		padding:2px;
	}
	.shop dl dt img{
		width: 100%;
		height: 100%;
	}
	.shop dl dd{
		margin-left: 5px;
	}
	.shop dl dd .shop-men{
		margin-top: 5px;
	}
	.shop .goin-shop{
		width:100px;
		height:30px;
		background: #fff;
		border: 1px #ccc solid;
		border-radius: 5px;
		position: absolute;
		top:35px;
		right:10px;
	}
	.recommend{
		width: 100%;
		background: #fff;
		margin-top: 5px;
		display: flex;
		overflow: hidden;
		padding-bottom: 10px;
	}
	.recommend dl {
		width: 100%;
		padding: 5px 4px;
		text-align: center;
	}
	.recommend dl dt{
		width: 85px;
		height: 85px;
		margin: 0 auto;
	}
	.recommend dl dt img{
		width: 100%;
	}
	.recommend dl dd .goods-title{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.recommend dl dd .price{
		color:#FC4141;
		margin-top: 5px;
		font-weight: 600;
	}
	.goods_footer{
		height: 44px;
		border-top: 1px solid #ccc;
		background: #fff;
		display: flex;
		
	}
	.goods_footer ul{
		width: 40%;
		display: flex;
	}
	.goods_footer ul li{
		width: 50%;
		text-align: center;
		display: flex;
		flex-direction: column;
		padding-top: 10px;
	}
	.goods_footer ul li img{
		width: 18px;
		height: 15px;
		display: block;
		text-align: center;
		margin: 0 auto;
	}
	.goods_footer div{
		width: 60%;
		display: flex;
		line-height: 44px;
	}
	.goods_footer div p:nth-child(1) , .goods_footer div p:nth-child(2){
		width: 50%;
		background: #fe8282;
		color: #fff;
		text-align: center;
	}
	.goods_footer div p:nth-child(2){
		background: #fb4142;
	}

</style>
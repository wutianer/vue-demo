<template>
		<div class='container_wrap'>
			<div class="mark" v-show='isShow'>
				<div class="close" @click='close'>&times;</div>
				<img src="../images/dianpu.png" alt="" />
				<p class='tip'>您尚未开通店铺，在商城任意<br />消费一次，即可自动开通店铺</p>
				<p class='go_shop' @click='go_shop'>去购物</p>
			</div>
			<!--头部-->
			<header>
				<div class="left">
					<img src="../images/img_09.png" alt="" />
				</div>
				<div class="inp">
					<img src="../images/img_12.png" alt="" />
					<input type="text" placeholder="请输入您要购买的商品" @focus='search_page'/>
				</div>
				<ul class="right">
					<li @click='my_shop'>
						<img src="../images/img_06.png" alt="" />
						我的店铺
					</li>
					<li>
						<img src="../images/img_03.png" alt="" />
						消息
					</li>
				</ul>
			</header>
			<!--主体-->
			<section @scroll='get_scroll'>
			<div class='all'>
				<!--banner-->
				<swiper :options="swiperOption" ref="mySwiperA">
					  <!-- 幻灯内容 -->
					  <swiper-slide>
					  	<div class="banner">
							<img src="../images/banner1.png" alt="" />
						</div>
					  </swiper-slide>
					  <swiper-slide>
					  	<div class="banner">
							<img src="../images/banner2.png" alt="" />
						</div>
					  </swiper-slide>
					  <swiper-slide>
					  	<div class="banner">
							<img src="../images/banner3.png" alt="" />
						</div>
					  </swiper-slide>
					  <swiper-slide>
					  	<div class="banner">
							<img src="../images/banner4.png" alt="" />
						</div>
					  </swiper-slide>
					  <!-- 以下控件元素均为可选 -->
					  <div class="swiper-pagination" slot="pagination"></div>
				</swiper>
				<!--商品分类-->
				<div class="content">
					<div class="main">
						<dl>
							<dt><img src="../images/img_27.png" alt="" /></dt>
							<dd>家乡味道</dd>
						</dl>
						<dl>
							<dt><img src="../images/img_29.png" alt="" /></dt>
							<dd>进口食品</dd>
						</dl>
						<dl>
							<dt><img src="../images/img_22.png" alt="" /></dt>
							<dd>牛奶乳品</dd>
						</dl>
						<dl>
							<dt><img src="../images/img_24.png" alt="" /></dt>
							<dd>茶果饮品</dd>
						</dl>
						<dl>
							<dt><img src="../images/img_36.png" alt="" /></dt>
							<dd>休闲零食</dd>
						</dl>
						<dl>
							<dt><img src="../images/img_38.png" alt="" /></dt>
							<dd>米面粮油</dd>
						</dl>
						<dl>
							<dt><img src="../images/img_39.png" alt="" /></dt>
							<dd>调味调料</dd>
						</dl>
						<dl>
							<dt><img src="../images/img_41.png" alt="" /></dt>
							<dd>酒水饮料</dd>
						</dl>
					</div>
					<div class="mall">
						<p class='mall_trends'>商城<br />动态</p>
						<swiper :options="swiperUp" ref="mySwiperB">
							  <!-- 幻灯内容 -->
							  <swiper-slide>
							  	<p class='text'>
									绿色无公害 无污染 无添加 无污染 无添加 天然有机蔬菜绿色无公害 无污染 无添加 天然有机蔬菜。
								</p>
							  </swiper-slide>
							  <swiper-slide>
							  	<p class='text'>
									绿色无公害 无污染 无添加 无污染 无添加 天然有机蔬菜绿色无公害 无污染 无添加 天然有机蔬菜。
								</p>
							  </swiper-slide>
							  <swiper-slide>
							  	<p class='text'>
									绿色无公害 无污染 无添加 无污染 无添加 天然有机蔬菜绿色无公害 无污染 无添加 天然有机蔬菜。
								</p>
							  </swiper-slide>
						</swiper>
						
					</div>
				</div>
				<!--天天特惠-->
				<div class="taday">
					<div class="odds">
						<div class="odds_left">
							<img src="../images/img_47.png" alt="" />
							<p>天天特惠</p>
							<span>每天都有惊喜</span>
						</div>
						<div class="odds_right">
							更多 >
						</div>
					</div>
					<div class="special">
						<div class="left">
							<img src="../images/img1.png" alt="" />
						</div>
						<div class="right">
							<img src="../images/img2.png" alt="" />
							<img src="../images/img3.png" alt="" />
						</div>
					</div>
				</div>
				<!--家乡味道-->
				<div class="hometown">
					<div class="odds">
						<div class="home_odor">
							－－　<img src="../images/img4.png" alt="" />家乡味道　－－
						</div>
						<div class="odds_right">更多 ></div>
					</div>
					<!--商品组件-->
					<goods :info='goods_list'></goods>
				</div>
			</div>
			</section>
			<!--页脚组件-->
			<over></over>
		</div>
</template>

<script>
import goods from '../components/goods.vue'
import over from '../components/footer.vue'
export default{
    data(){
		return {
		    swiperOption: {
		      autoplay: 1000,
		      loop:true,
		      pagination : '.swiper-pagination',
		      mousewheelControl : true
		  },
		  swiperUp: {
		  	  direction:'vertical',
		      autoplay: 2000,
		      loop:true
		  },
		  goods_list:[],
		  isShow:false
		
		
		}
  },
  components:{
  	goods,
  	over
  },
  created(){
  	let vm=this;
  	this.$http.get('../src/server/goodslist.json').then((res)=>{
  		vm.goods_list=res.data.data.data
  		this.$store.state.list=res.data.data.data 
  	})
  },
  updated(){
  	console.log(this.$el.querySelector('.all').offsetHeight)
  	this.get_scroll();
  },	
  methods:{
  	search_page:function(){
  		this.$router.push('/searchPage')
  	},
  	//滚动高度
  	get_scroll:function(){
		if(this.$el.querySelector('.all').offsetHeight-(this.$el.querySelector('section').offsetHeight+this.$el.querySelector('section').scrollTop)<5){
			console.log('啊哈哈哈')	
			let vm=this;
		  	this.$http.get('../src/server/goodslist.json').then((res)=>{
		  		res.data.data.data.forEach((val)=>{
		  			vm.goods_list.push(val)
		  		})
		  	})
		}
  	},
  	my_shop(){
  		this.isShow=true
  	},
  	close(){
  		this.isShow=false
  	},
  	go_shop(){
  		this.isShow=false
  	}
  }
}
</script>

<style lang='scss'>
	.container_wrap{
	    position: absolute;
	    top: 0;
	    bottom: 0;
	    width: 100%;
	    display: flex;
	    flex-direction: column;
	    overflow: hidden;
	    font-size: 12px;
	    background: #F6F5F5;
		}
	header{
	    height: 40px;
	    line-height: 40px;
	    background: #fff;
	    display: flex;
	    padding: 0 10px;
        box-sizing: border-box;
	    justify-content: space-between;
	    width: 100%;
	    .left img{
	        width: 40px;
	        height: 20px;
	        line-height: 0;
	        display: block;
	        margin-top: 10px;
	    }
	    .inp{
	        width: 60%;
	        height: 30px;
	        line-height: 30px;
	        background: #F5F5F5;
	        border-radius: 4px;
	        display: flex;
	        margin: 5px 10px 0 10px;
	        img{
	            width: 15px;
	            height: 15px;
	            display: block;
	            margin-top: 7.5px;
	            padding-left: 20px;
	        }
	        input{
	            border: none;
	            background: none;
	            margin-left: 10px;
	        }
	        input::-webkit-input-placeholder{
	            font-size: 12px;
	            color: #CACACA;
	        }
	    }
	    .right{
	        display: flex;
	        width: 25%;
	        justify-content: space-between;
	        li{
	            line-height: 0;
	            display: flex;
	            flex-direction: column;
	            color: #FC4141;
	            text-align: center;
	            img{
	                width: 20px;
	                height: 20px;
	                margin: 0 auto;
	                margin-bottom: 10px;
	                margin-top: 2px;
	            }
	            
	        }
	    }
	}
	section{
		flex: 1;
		overflow-y:scroll ;
		overflow-x: hidden;
	}
	.banner img{
	    width: 100%;
	    height: 177px;
	}
	.content{
	    height: auto;
	    background: #fff;
	    padding-bottom: 8px;
	}
	.main{
	    height: auto;
	    display: flex;
	    flex-wrap: wrap;
	    margin-top: 8px;
	    dl{
	        width: 25%;
	        height: auto;
	        margin-bottom: 10px;
	        text-align: center;
	        dt img{
	            width: 50px;
	            height: 50px;
	            display: block;
	            margin: 0 auto;
	            margin-bottom: 5px;
	            margin-top: 10px;
	        }
	        
	    }
	}
	.mall{
		height: 40px;
	    display: flex;
	    padding: 0 10px;
	    justify-content: space-between;
	    .mall_trends{
	        width: 50px;
	        color: #FF6D00;
	    }
	    .text{
	        flex: 8;
	        padding: 0 5px;
	        color:#776e6e;
	    }
	    .swiper-container{
	    	border: 1px solid #ccc;
	        border-radius: 4px;
	    }
	    .swiper-slide{
	    	height: 0;
	    }
	}
	.odds{
	    height: 45px;
	    line-height: 45px;
	    background: #fff;
	    margin: 8px 0;
	    padding: 0 10px;
	    display: flex;
	    justify-content: space-between;
	    .odds_left{
	        display: flex;
	        color: #FF6D00;
	        img{
	            width: 20px;
	            height: 20px;
	            display: block;
	            margin-top: 12.5px;
	            margin-right: 8px;
	        }
	        p{
	            font-size: 14px;
	            font-weight: bold;
	            margin-right: 8px;
	        }
	    }
	    .home_odor{
	    	display: flex;
	    	color: #FF6D00;
	    	margin: 0 auto;
	    	img{
	    		width: 20px;
	            height: 20px;
	            display: block;
	            margin-top: 12.5px;
	            margin-right: 8px;
	    	}
	    }
	}
	.special{
		width: 100%;
		display: flex;
		margin-bottom: 8px;
		.left img{
			flex:5;
			height: 210px;
		}
		.right img{
			width: 100%;
			flex:5;
			height: 105px;
			margin-left: 3px;
		}
	}
	.mark{
		background: rgba(0,0,0,0.5);
	    width: 100%;
	    height: 100%;
	    position: absolute;
	    left: 0;
	    top: 0;
	    z-index: 99;
	    pointer-events: auto;
	    text-align: center;
	    .tip{
	    	color:#fff;
	    	margin-top: 10px;
	    	margin-bottom: 15px;
	    	line-height: 25px;
	    	font-size: 14px;
	    }
	    img{
	    	width: 90%;
		    margin-left: 7%;
		    margin-top: 22%;
	    }
	    .go_shop{
	    	width: 60%;
		    background: #faeb31;
		    margin-left: 20%;
		    color: #fc4141;
		    height: 55px;
		    line-height: 50px;
		    text-align: center;
		    border-radius: 30px;
		    font-size: 20px;
		    box-shadow: inset 0px -5px #efb109;
	    }
	    .close{
	    	width: 40px;
		    height: 40px;
		    line-height: 40px;
		    border-radius: 50%;
		    display: block;
		    position: relative;
		    top: 20%;
		    left: 74%;
		    background: #1b1b1b;
		    color: #fff;
		    font-size: 30px;
	    }
	    
	}
	
	
	
</style>
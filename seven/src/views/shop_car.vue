<template>
	<div class='shopping'>
		<div class="goucar">
			<span>购物车</span>
			<a class='bj' @click='edit'>{{bj}}</a>
		</div>	
		<div class="shop_sec">
			<div class="goods_list">
				<div class='empty'>
					<i class='gou_car'>
						<img src="../images/car.png" alt="" />
					</i>
					<p class='goucar_empty'>购物车为空</p>
					<a class='guang' @click="guang">去逛逛</a>
				</div>
				<!--添加至购物车的商品组件-->
				<shopcar v-for="i in $store.state.shopMessage" 
					:i="i" 
					:select_all="select_all"
				></shopcar>
				
				<div class="caibar">
					<i>
						<img src="../images/one.png" alt="" />
					</i>
					<span>热门推荐</span>
					<i>
						<img src="../images/two.png" alt="" />
					</i>
				</div>	
			</div>
			<div class="totle_price">
	 			<label class='off'>
	 				<input type="checkbox" v-model='select_all'/>
	 				<span class='choice po'></span>
	 			</label>
	 			<span class="heji">合计:￥<em>{{total}}</em></span>
	 			<span class='settlement'>{{balance}}</span>
	 		</div> 

			<!--商品组件-->
			<goods :info='goods_list'></goods>
		</div>
		<!--页脚组件-->
		<FooterNav></FooterNav>
	</div>
	
	
</template>

<script>
	import goods from '../components/goods.vue'
	import FooterNav from "../components/footer.vue"
	export default {
		name: 'car',
		data(){
			return {
				data:[],
				goods_list:'',
				bj:'编辑',
				balance:'结算',
				select_all:false
			}
		},
		computed:{
			total:function(){
				return parseFloat(this.$store.state.total.toFixed(2))
			}
		},
		components:{
			FooterNav,
			goods,
			shopcar:{
				props:['i','i.price','select_all'],
				template:`
					<div class="goods_show">
						<label class='off'>
							<input type="checkbox" v-model='selected'/>
							<span class="choice"></span>
						</label>
						<dl>
							<dt>
								<div class="img">
									<img :src="'http://www.lb717.com/'+i.src" alt="" />
								</div>
							</dt>
							<dd>
								<p class="product_name">{{i.title}}</p>
								<div class="count">
									<div>
										<p>&times;1</p>
										<p>¥ {{i.price}}</p>
									</div>
									<div class='shop_price'>
										<span @click='minus'>-</span>
										<span><input type="text" readonly='true' v-model='count' class='num'></span>
										<span @click='add'>+</span>
									</div>
								</div>
							</dd>
						</dl>
					</div>
				`,
				data(){
					return {
						count:1,
						selected:false
					}
				},
				methods:{
					add:function(){
						if(this.count<=10){
							this.count++;
						}
						if(this.selected){
							this.$store.dispatch('total',this.i.price*1)
						}
					},
					minus:function(){
						if(this.count>=2){
							this.count--;
						}else{
							return
						}
						if(this.selected){
							this.$store.dispatch('total',-this.i.price)
						}
					}
				},
				watch:{
			        selected:function(data){
			            if(data){
							this.$store.dispatch('total',this.i.price*this.count)
			            }else{
			                this.$store.dispatch('total',-this.i.price*this.count)
						}
						// if(!data){
						// 	this.select_all=false;
						// }
			        },
			        select_all(data){
						console.log(data);
			        	if(data){
							this.selected=true;
						}else{
							this.selected=false;
						}
			        }
			    }
			},
		
			
			
		},
		methods:{
			guang:function(){
				this.$router.push('/home')
			},
			//编辑
			edit(){
				if(this.bj=='编辑'){
					this.bj='完成';
					this.balance='删除'
					this.$el.querySelector('.heji').style.display='none'
				}else{
					this.bj='编辑';
					this.balance='结算'
					this.$el.querySelector('.heji').style.display='block'
				}
			}
			
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

<style>
	.shop_sec{
		flex: 1;
		overflow-y: scroll;
	}
	.shopping{
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #f7f7f7;
	}
	.goods_list{
		flex: 1;
		overflow-y:scroll;
	}
	.goucar{
		height: .5rem;
		line-height: .5rem;
		text-align: center;
		background: #fff;
		border-bottom: 1px solid #ccc;
		font-size: .16rem;
	}	
	.bj{
		position: absolute;
		right: .1rem;
		line-height: .5rem;
		font-size: .14rem;
	}
	.goods_show{
		display: flex;
		align-items: center;
		background: #fff;
		box-sizing: border-box;
		padding: 0 10px;
		padding: 10px;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}
	.off input{
		display: none;
	}
	.off input:checked + .choice{
		background: #fb4141;
		border: 1px solid #FB4141;
	}
	.off input:checked + .choice::after{
		content: "";
		display: block;
		width: 12px;
		height: 6px;
		border-left: 2px solid #fff;
		border-bottom: 2px solid #fff;
		transform: translateX(3px) translateY(3px) rotate(-45deg);
		
	}
	.choice{
		display: inline-block;
		width: .2rem;
		height: .2rem;
		border-radius: 100%;
		border: 1px solid #ccc;
		flex-shrink: 0;
	}
	.goods_show dl{
		display: flex;
	}
	.goods_show .img{
		width: .8rem;
		height: 80px;
		border: 1px solid #ccc;
		box-sizing: border-box;
	} 
	.goods_show .img img{
		width: 100%;
		height: 100%;
		display: block;
		margin: 0 auto;
	}
	.goods_show dl{
		padding-left: 10px;
		width: 80%;
	}
	.goods_show dl dd{
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 10px 5px;
	}
	.count{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 80%;
	}
	.count p:nth-child(2){
		margin-top: 5px;
	}
	.product_name{
		width: 85%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.caibar{
		text-align: center;
		line-height: .4rem;
		background: #fff;
		margin-top: .05rem;
		margin-bottom: .05rem;
	}
	
	.caibar i{
		display: inline-block;
		width: .2rem;       
	}
	
	.caibar i img{
		width: 100%;
		height: 100%;
	}
	.totle_price{
		width: 100%;
		position: fixed;
		bottom: 39px;
		height: 40px;
		line-height: 40px;
		background: #fff;
		padding-left: 40px;
		box-sizing: border-box;
	}
	.settlement{
		float: right;
		width: 30%;
		text-align: center;
		font-size: .16rem;
		background: #fc4141;
		color: white;
	}
	.po{
		position: absolute;
		left: 10px;
		top: .1rem;
	}
	.heji{
		position: absolute;
		right: 1.2rem;
	}
	.empty{
		width: 100%;
		height: 2.5rem;
		background: #fff;
		text-align: center;
		padding-top: 10%;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
	}
	.gou_car{
		width: .8rem;
		height: .8rem;
		border: 1px solid #ccc;
		border-radius: 100%;
		display: block;
		position: relative;
		margin: 0 auto;
	}
	.gou_car img{
		width: 50px;
		height: 40px;
		display: block;
		position: absolute;
		left: 18%;
		top: 25%;
	}
	.goucar_empty{
		line-height: .4rem;
		font-size: .14rem;
	}
	.guang{
		display: inline-block;
		line-height: .4rem;
		width: .8rem;
		text-align: center;
		border: 1px solid red;
		border-radius: 2px;
		font-size: .16rem;
		color: red;
	}
	em{
		font-style: normal;
	}
	.shop_price{
		display: flex;
	}
	.shop_price span{
		width: 25px;
		height: 25px;
		line-height: 25px;
		display: block;
		border: 1px solid #ccc;
		text-align: center;
		
	}
	.num{
		width: 80%;
		height: 60%;
		line-height: 60%;
		border: none;
		text-align: center;
	}
</style>
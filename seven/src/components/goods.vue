<template>
	<div class="home_main">
		<dl v-for='i in info'>
			<dt><img :src="'http://www.lb717.com/'+i.obj_data" alt="" /></dt>
			<dd>
				<p @click='to_detail(i.goods_id)'>{{i.goods_name}}</p>
				<p>
					<span>¥ {{i.discount_price}}</span>
					<img src="../images/car.png" alt="" @click="add_to_car(i.obj_data,i.goods_name,i.discount_price)"/>
				</p>
			</dd>
		</dl>
	</div>

	
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		//接受父组件传递过来的参数
		props:{
			info:{
				required:true
			}
		},
		name:'goods',
		methods:{
			add_to_car(picture,txt,price){
				let obj={
					src:picture,
					title:txt,
					price:price
				}
				this.$store.state.shopMessage.push(obj);
				
				
				this.$http.get('../src/server/data.json').then((res)=>{
					if(res.data.code==1){
						console.log('添加成功')
						this.$store.dispatch('add_goods',{
							id:this.info.id,
							price:this.info.price
						})
						
					}
				})
			},
			to_detail(id){
				this.$router.push({
					path:'goods_detail/?id='+id
				})
			}
		},
		mounted(){
			console.log(this.info);
		}
	}
</script>
<style lang='scss'>
	a{
		color: #333;
	}
	.home_main{
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		dl{
			width: 49%;
			height: auto;
			padding-bottom: 5px;
			margin-bottom: 5px;
			background: #fff;
			text-align: center;
			dt img{
				width: 184px;
				height: 184px;
				
			}
			dd{
				text-align: left;
				padding: 0 5px;
				color: #333;
				p:nth-child(1){
					height: 25px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space:nowrap;
				}
				p:nth-child(2){
					padding: 0 8px;
					display: flex;
					justify-content: space-between;
					span{
					    font-weight: bold;
					    margin-top: 8px;
					    color: #fc4141;
					}
					img{
						width: 28px;
						height: 24px;
						display: block;
					}
				}
			}
		}
	}
</style>
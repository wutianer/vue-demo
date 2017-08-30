<template>
	<div>
		<div class='mold_header'>
			<div class="mold_search">
				<img src="../images/img_12.png" alt="" />
				<input type="text" placeholder="请输入你要购买的商品" @focus='search_page'/>
			</div>
		</div>
		<div class="mold_section">
			<div class="mold_list">
				<ul>
					<li v-for='(item,index) in List' :class="{'bg':flag==index}" @click="ask(index,item.cate_id)">{{item.cate_name}}</li>
					
				</ul>
			</div>
			<div class='mold_content'>
				<dl v-for='x in arr'>
					<dt><img :src="'http://www.lb717.com/'+x.cate_icon" alt="" /></dt>
					<dd>{{x.cate_name}}</dd>
				</dl>
			</div>
		</div>
		<!--页脚组件-->
		<over></over>
	</div>
</template>

<script>
import axios from 'axios'
import over from '../components/footer.vue'
	export default{
		data(){
			return{
				'List':[],
				'foodList':[],
				'arr':[
					{"cate_name": "东南",
	            	"cate_icon": "/static/mobile/images/category/jia3@2x.png"},
	            	{"cate_name": "西北",
            		"cate_icon": "/static/mobile/images/category/jia2@2x.png"},
            		{"cate_name": "东北",
            		"cate_icon": "/static/mobile/images/category/jia1@2x.png"},
            		{"cate_name": "西南",
            		"cate_icon": "/static/mobile/images/category/jia4@2x.png"},
            		{"cate_name": "中原",
            		"cate_icon": "/static/mobile/images/category/jia5@2x.png"}
				],
				'flag':0
			}
		},
		mounted(){
			//请求侧边栏数据
			axios.get('../src/server/list.json').then((res)=>{
				this.List=res.data.foodList;
			})
		},
		components:{
			over
		},
		methods:{
		  	search_page:function(){
		  		this.$router.push('/searchPage')
		  	},
		  	ask(index,cate_id){
		  		this.flag=index;
		  		this.arr=[];
		  		axios.get('../src/server/foodList.json').then((res)=>{
					this.foodList=res.data.foodList;
					this.foodList.forEach((val,ind)=>{
						var ID=val.parent_id;
						if(cate_id==ID){
							this.foodList=val;
							this.arr.push(this.foodList);
						}
					})
				})
		  	}
		}
	}
</script>

<style>
	.mold_header{
		height: .44rem;
		background: #fff;
		border-bottom: 1px solid #ccc;
		padding-top: .06rem;
		box-sizing: border-box;
	}
	.mold_search{
		width: 80%;
		height: .3rem;
		background: #f1f1f1;
		margin: 0 auto;
		border-radius: 5px;
		display: flex;
	}
	.mold_header img{
		width: 12px;
		height: 12px;
		display: block;
		margin: 8px 10px 0 30px;
	}
	.mold_header input{
		border: none;
		width: 70%;
		background: none;
		font-size: 13px;
	}
	.mold_section{
		display: flex;
		background: #fff;
	}
	.mold_list{
		width: 30%;
		font-size: .16rem;
		margin-right: .05rem;
	}
	.mold_list li{
		text-align: center;
		height: .44rem;
		line-height: .44rem;
		background: #f0eced;
		color: rgb(125,120,120);
	}
	.mold_list .bg{
		border-left: 2px  solid red;
		background: #fff;
	}
	.mold_content{
		flex: 1;
	}
	.mold_content dl{
		margin-bottom: .05rem;
		float: left;
		width: 30%;
		text-align: center;
		margin-right: .05rem;
		background: #f7f7f7;
		height: 1rem;
	}
	.mold_content dl dt{
		width: 80%;
		margin: 0 auto
	}
	.mold_content dl dt img{
		width: 100%;
		height: auto;
	}
	.mold_content dl dd{
		color: #909090;
	}
</style>	

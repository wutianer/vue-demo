<template>
	<div class="addBox">
		<div class="addHead">
			<i class='fa fa-angle-left' @click="back"></i>
			<span>收货人</span>
		</div>
		<div class="addcont">
			<input type="text" placeholder="收货人姓名" class='name' v-model="name" />
			<input type="text" placeholder="手机号" class='tel' v-model='phone'/>
			<div class="menu">
				<div class="two">
					<select name="" id="" @change='sel' v-model='province'>
						<option v-for='(x,index) in province_list' :value='x.name'>{{x.name}}</option>
					</select>
					<select name="" id="" v-model='countries' @change='city'>
						<option  v-for='(i,index) in countries_list' :value="i.name">{{i.name}}</option>
					</select>
				</div>
 				<select name="" id="" v-model='areas'>
                        <option  v-for='r in areas_list' :value="r.name">{{r.name}}</option>
                </select>
			</div>
			<input type="text" placeholder="详细地址" class='address' v-model='addressInfo'/>
			<div class="mo">
				<label class='off'>
					<input type="checkbox" />
					<span></span>
				</label>
				设为默认地址
			</div>
			<button class='save' @click='save'>保存</button>
		</div>
	</div>

</template>
<script>
import axios from 'axios'
	export default{
		data(){
			return{
				countries_list:[],
                selected:false,
                name:'',
                phone:'',
                province:[],
                countries:'',
                areas:'',
                addressInfo:'',
                province_list:'',
                countries_list:'',
                areas_list:''
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			save:function (){//地址保存
				let vm=this;
				if(this.name && this.phone && this.province && this.countries && this.areas && this.addressInfo){
					this.$store.commit('add_dizhi',{
						name:vm.name,
						phone:vm.phone,
						province:vm.province,
						countries:vm.countries,
						areas:vm.areas,
						addressInfo:vm.addressInfo
					})
					this.$router.push({
						path:'/address'
					})
					this.save_local()
				}else{
					alert('请完善信息')
				}
			},
			save_local:function (){
				let ls=localStorage;
				ls.setItem('address',JSON.stringify(this.$store.state.address_info))
			},
			sel:function (){//省改变市
				console.log(this.province)
				this.province_list.forEach((val,i)=>{
					if(val.name==this.province){
						this.countries_list=val.sub
					}
				})
			},
			city:function (){//市改变区
				this.countries_list.forEach((v,i)=>{
					if(v.name==this.countries){
						this.areas_list=v.sub
						console.log(this.areas_list)
					}
				})
			}
		},
		created:function (){
            axios.get('../../src/server/linkage.json').then((data)=>{               
                this.province_list=data.data
            })
        }
		
	}
</script>
<style lang='scss' scoped>
	.addBox{
		width: 100%;
		position: absolute;
		top:0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		background: #eee;
		.addHead{
			height: 44px;
			line-height: 44px;
			background: #fafafb;
			text-align: center;
			font-size:14px;
			i{
				position: absolute;
				top: 13px;
				left: 10px;
				font-size: 20px;
			}
		}
		.addcont{
			flex: 1;
			padding: 0 10px;
			.name,.tel,.address{
				width: 100%;
				height: 40px;
				line-height: 40px;
				background: #fff;
				border: none;
				margin: 0 auto;
				padding: 0 10px;
				box-sizing: border-box;
				margin-top: 20px;
			}
			.menu{
				height: auto;
				select{
					width: 100%;
					height: 40px;
					line-height: 40px;
					background: #fff;
					border: none;
					padding-left: 10px;
					margin-top:20px;
					outline: none;
				}
				.two{
					display: flex;
					justify-content: space-between;
					select{
						width: 44%;
					}
				}
				
			}
			.mo{
				margin-top: 20px;
				line-height: 20px;
				.off input{
					display: none;
				}
				.off input:checked + span{
					background: #fb4141;
					border: 1px solid #fb4141;
				}
				.off input:checked + span::after{
					content: "";
					display: block;
					width: 12px;
					height: 6px;
					border-left: 2px solid #fff;
					border-bottom: 2px solid #fff;
					transform: translateX(2px) translateY(2px) rotate(-45deg);	
				}
				span{
					display: inline-block;
					width: 18px;
					height: 18px;
					border-radius: 100%;
					border: 1px solid #ccc;
					flex-shrink: 0;
					float: left;
					margin-right: 5px;
				}
			}
			.save{
				width: 60%;
				height: 40px;
				line-height: 40px;
				color: #fff;
				background: #FB4141;
				border: none;
				border-radius: 25px;
				display: block;
				margin: 0 auto;
				margin-top: 20px;
			}
		}
	}
</style>
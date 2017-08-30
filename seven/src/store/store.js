import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store=new Vuex.Store({
	state:{
		goods_info:[
			
		],
		list:[],
		shopMessage:[],
		total:0,
		address_info:[]//地址数据
	},
	mutations:{
		add_goods:function(state,goods){
			console.log(goods);
			state.goods_info.push(goods)
		},
		total:function(state,sum){
			state.total+=sum
		},
		delete_adress:function (state,ind){
            state.address_info.splice(ind,1)
        },
 		add_dizhi:function (state,address){
            if(Object.prototype.toString.call(address)=='[object Array]'){
                state.address_info=address
            }else if(Object.prototype.toString.call(address)=='[object Object]'){
                state.address_info.push(address)
            }else{
                alert('格式不正确')
            }
           
        }

	},
	actions:{
		add_goods:function(context,goods){
			context.commit('add_goods',goods)
		},
		total:function(context,sum){
			context.commit('total',sum)
		}
	}
})

export default store
<template>
	<div class="search">
		<header>
    	    <div class="searchBox">
                <img src="../images/img_12.png">
                <input type="text" placeholder="请输入您要购买的商品" v-model.trim='search_value'>
            </div>
            <span class='return' @click='search'>搜索</span>
    	</header>
    	<div class="main">
    		<div class="newly">
    			<span>最近搜索</span>
    			<img src="../images/delet.png" alt="" />
    		</div>
    		<div class="food" v-if='!search_memory'>暂无搜索记录...</div>
    		<ul v-else class='local_data'>
    			<li v-for='x in local_history'>{{x}}</li>
    		</ul>
    	</div>
    	
    	<div class="all">
    		<p>大家都在搜</p>
    		<ul class="list">
    			<li><span>粽子</span></li>
    			<li><span>锅巴</span></li>
    			<li><span>酱</span></li>
    			<li><span>小吃</span></li>
    			<li><span>零食</span></li>
    			<li><span>干果</span></li>
    			<li><span>特产</span></li>
    			<li><span>油</span></li>
    			<li><span>大米</span></li>
    			<li><span>面粉</span></li>
    		</ul>
    	</div>
		
	</div>
	
</template>
<script>
	export default{
        data(){
            return{
                search_value:'',
                local_history:[],
                search_memory:false
            }
        },
        created:function(){
            let ls=localStorage;
            let vm=this;
            if(ls.getItem('search-history')){
                vm.local_history=JSON.parse(ls.getItem('search-history'))
                 vm.search_memory=true
            }
        },
        methods:{
            search(){
                let vm=this;
                let ls=localStorage;
                if(vm.search_value){
                    vm.local_history.push(vm.search_value)
                    ls.setItem('search-history',JSON.stringify(vm.local_history))
                }
            }
        }
    }

</script>
<style lang='scss'>
	.search{
		width: 100%;
		height: 100%;
		background: #fff;
		header {
			height: 44px;
		    background: #fff;
		    border-bottom: 1px solid #ccc;
		    display: flex;
		    padding: 0 10px;
		    justify-content: space-between;
		    .searchBox{
		    	width: 80%;
		    	height: 34px;
		    	line-height: 34px;
		    	margin-top: 5px;
		    	border-radius: 3px;
		    	background: #f5f5f5;
		    	display:flex;
		    	img{
		    		width: 14px;
		    		height: 14px;
		    		display: block;
		    		margin: 10px 10px 0 10px;
		    	}
		    	input{
		    		width: 80%;
		    		border: none;
		    		background: none;
		    	}
		    	input::-webkit-input-placeholder{
		    		font-size: 12px;
		    	}
		    	
		    }
		    .return{
		    	margin-top: 12px;
		    	font-size: 14px;
		    }
		}
		
		.main{
			height: auto;
			padding: 0 10px;
			.newly{
				line-height: 40px;
				display: flex;
				justify-content: space-between;
				width: 100%;
				img{
					width: 15px;
					height: 15px;
					margin-top: 10px;
				}
			}
			.food{
				width: 100%;
				height: 100px;
			}
		}
		.all{
			width: 100%;
			height: auto;
			p{
				padding: 0 10px;
			}
			.list{
				width: 100%;
				height: 40px;
				line-height: 40px;
				display:flex;
				flex-wrap:wrap;
				li{
					width: 25%;
					text-align: center;
					span{
						border: 1px solid #ccc;
						border-radius: 4px;
						padding: 5px 10px;
						color: #333;
					}
				}
			}
		}
		.local_data:after{
		     content:".";        
		     display:block;        
		     height:0;        
		     clear:both;  
		}
		.local_data{
			height: auto;
			padding-bottom: 10px;
			li{
				float: left;
				padding: 3px 10px;
				border: 1px solid #ccc;
				text-align: center;
				border-radius: 3px;
				margin-right: 10px;
			}
		}
		
	}
</style>
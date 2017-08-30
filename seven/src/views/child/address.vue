<template>
    <div class="coent">
        <header>
            <i class="fa fa-angle-left" @click="back"></i>
            <h3>收货地址</h3>
            <span class="fa fa-user-o"></span>
        </header>

        <div class="addbox" v-for="(x,i) in address_list">
            <ul>
                <li><b>{{x.name}}</b><span>{{x.phone}}</span></li>
                <li><span>{{x.province}}</span><span>{{x.countries}}</span><span>{{x.areas}}</span><span>{{x.addressInfo}}</span></li>
            </ul>
            <h3 class='last-li'> 
                <p class='icon'>
                    <label class='off'>
                        <input type="checkbox"/>
                        <span></span>
                    </label>设为默认地址     
                </p>
                <p>
                    <u class='sp' @click='edit_add(i)'><i class='fa fa-book'></i>编辑</u>　
                    <u class='sp' @click='del(i)'><i class='fa fa-trash'></i>删除</u>
                </p>              
            </h3>
        </div>

		
		<router-link to='/addAddress'>
	        <div class="main">
	            <div class="counter">
	                <p>+　新增加地址</p>
	            </div>
	        </div>
        </router-link>
    </div>

</template>
<script>
    export default{
        data(){
            return{
                 address_list:[]
            }
        },
        methods:{
            back:function(){
                this.$router.go(-1)
            },
            del:function (ind){//删除
                console.log(ind)
                this.$store.commit('delete_adress',ind)
            }
        },
        created:function (){
           if(localStorage.getItem('address')){
                this.$store.commit('add_dizhi',JSON.parse(localStorage.getItem('address')))
           }
        },
        mounted(){
            this.address_list=this.$store.state.address_info
            console.log(this.$store.state.address_info)
        }

    }
</script>
<style lang="scss" scoped>

.coent{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction:column;
    background: #eee;
}
    header{
       background:#fff;
        height: 44px;
        position: relative;
        text-align: center;
        line-height: 44px;
        border-bottom:1px solid #ccc;

        i{
            position: absolute;
            left: 8px;
            top: 15px;
        }

        span{
            position: absolute;
            right: 8px;
            top: 15px;
            font-size: 12px;
        }
    }

    .addbox{
        background: #fff;
        h3{
            line-height: 35px;
            padding:0 10px;
        }
    }
    ul{
        padding: 8px;
        text-align: left;
        
        border: 1px solid #eee;
            li{
                line-height: 35px;
                font-size:14px;
                padding-left: 10px;

                span{
                    margin: 5px;
                }
            }
        }
        .last-li{
            display: flex;
            justify-content:space-between;

            .sp{
                margin-left: 5px;
            }
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
            margin-top: 5px;
        }
        u{
            text-decoration: none;
            font-weight: normal;
        }
    }




    .main{
        width: 100%;
        overflow: auto;
        -webkit-flex: 1;
    }

    .counter{
        height: 100px;
        width: 100%;
        position: relative;
        p{
            font-family: PingFangSC-Regular, sans-serif;
            background: #fc4141;
            width: 2.22rem;
            height: 0.4rem;
            text-align: center;
            line-height: .4rem;
            border-radius: 0.6rem;
            color: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -1.11rem;
            margin-top: -0.25rem;

        }
    }
    
</style>
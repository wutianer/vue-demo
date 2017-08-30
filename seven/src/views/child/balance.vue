<template>
    <div class="coent">
        <header>
            <i class="fa fa-angle-left" @click="back"></i>
            <h3>账户余额</h3>
            <span>明细</span>
        </header>

        <div class="main">
            <div class="yu_e">
                <p>账户余额</p>
                <h3 id="user_balance">0.00</h3>
            </div>
            <div class="nav">
                <img src="../../assets/charge.png">
                <b>充值</b>
                <i class="fa fa-angle-right"></i>
            </div>
        </div>
    </div>
</template>
<script>
    export default{

        methods:{
            back:function(){
                this.$router.go(-1)
            }
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
        background: #439afd;
        height: 44px;
        position: relative;
        color:#fff;
        text-align: center;
        line-height: 44px;

        i{
            position: absolute;
            left: 8px;
            top: 15px;
        }

        span{
            position: absolute;
            right: 8px;
            top: 0px;
            font-size: 12px;
        }
    }

    .main{
        width: 100%;
        overflow: auto;
        -webkit-flex: 1;
    }
   .yu_e {
    width: 100%;
    height: 1.5rem;
    background: #439afd;

    p{
        padding-left: .2rem;
        font-size: .14rem;
        font-weight: 500;
        color: #fff;
        padding-top: .22rem;
        line-height: .5rem;
    }

    h3{
        font-size: .38rem;
        line-height: .5rem;
        font-weight: bold;
        color: #fff;
        padding-left: .2rem;
    }
} 

.nav{
    width: 100%;
    height: .6rem;
    line-height: .6rem;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #ccc;

    img{
        width: .2rem;
        height: .3rem;
        padding-top: .08rem;
        padding-left: .2rem;
        float: left;
		margin-top: 5px;
		margin-right: 8px;
    }

    i{
        float: right;
        line-height: .6rem;
        margin-right:15px;
        font-size: 18px;
    }
}
</style>
<template>
    <div>
        <div class="head">
            <span class="bg">群聊</span>
            <span>私聊</span>
        </div>

        <div class="main">
            <dl>
                <dt>
                    <img src="../../assets/partner.png">
                    <span class="bgs"></span>
                </dt>
                <dd>
                    <p>
                        <label>71712419217的合伙人</label>
                        <span>13:57</span>
                    </p>
                    <p><label></label>系统消息:添加好友成功，快来聊天吧</p>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script></script>
<style lang="scss" scoped>
    .head{
        background: #fafafb;
        border-bottom: 1px solid #ccc;
        font-family: PingFangSC-Regular, sans-serif;
        height:44px;
        position:relative;
        text-align:center;
        line-height:44px;
        span{
            margin-right:10px;
        }
        .bg{
            color: #ff677c;
            border-bottom: 2px solid #ff677c;
            height: 43px;
            display: inline-block;

        }
    }

    .main{
        dl{
                width: 100%;
                height: .8rem;
                border-bottom: 1px solid #e5e5e5;

                dt{
                    width: .6rem;
                    height: .6rem;
                    border-radius: 50%;
                    float: left;
                    margin-left: .05rem;
                    margin-top: .1rem;
                    position: relative;

                    img{
                        width: .6rem;
                        height: .6rem;
                        border-radius: 50%;
                        overflow: hidden;
                    }

                    .bgs{
                            width: .1rem;
                            height: .1rem;
                            background: #fc4141;
                            border-radius: 50%;
                            position: absolute;
                            right: .03rem;
                            top: .04rem;
                        }
                }

            dd{
                    width: 2.5rem;
                    float: left;
                    margin-left: .05rem;
                    margin-top: .2rem;

                    label{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-weight: normal;
                    }
                    span{
                        color: #666;
                        font-weight: normal;
                        line-height:28px;
                    }
            }

            dd p:nth-of-type(1) {
                font-size: .18rem;
                font-weight: 500;
                color: #333;
            }

            dd p:nth-of-type(2){
                width: 100%;
                    margin-top: .02rem;
                    font-size: .1rem;
                    color: #666;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
            }
            
           }
        
    }
</style>
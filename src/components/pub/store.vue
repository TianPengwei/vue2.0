<!--
    首页推荐店家组件
-->
<template>
    <div class="store">      
        <div class="logo"><img :src="storeData.logo" /></div>
        <div class="info">
            <h2 class="title">
                <span class="title_ico"></span>
                <span class="title_txt f28">{{ storeData.name }}</span>
                <span class="title_label f20">票</span>
            </h2>
            <p class="score">
                <span class="score_score">
                    <span v-bind:class="{
                        stars : true,
                        stars2 : storeData.stars == 2,
                        stars3 : storeData.stars == 3,
                        stars4 : storeData.stars == 4,
                        stars5 : storeData.stars == 5
                    }"></span>
                    <span class="score_sales">{{ storeData.sales }}</span>
                </span>
                <span class="score_server">
                    <span v-if="storeData.express.length>0">{{ storeData.express }}</span>
                </span>
            </p>
            <p class="server">
                <span class="server_price">
                    {{ storeData.charge }}
                </span>
                <span class="server_distance">
                    {{ storeData.distance }}
                </span>
            </p>
            <p class="label fcf63">
                {{ storeData.label }}
            </p>
            <!-- 店铺活动 storeData.activities -->
            <ul class="activities por" v-if="storeData.activities.length > 0">
                <a class="poa btn" href="javascript:;" v-if="storeData.activities.length > 1" @click="showMoreActivities(storeData.activities.length)">
                    {{ `${storeData.activities.length}个活动` }}
                </a>
                <li v-for="(ac,index) in storeData.activities" :key="ac.id" v-if="index < activiesLowLine">{{ ac.des }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'Store',
        data() {
            return {
                activiesLowLine : 2
            }
        },
        beforeMount() {
        },
        mounted() {
        },
        props : {
            storeData : {
                type : Object
            }
        },
        components : {            
        },
        //动态属性
        computed : {
            subStoreName() {
                return this.storeData.name.padEnd(20,'...');
            }
        },
        methods : {
            showMoreActivities(len) {
                if(this.activiesLowLine == 2) {
                    this.activiesLowLine = len;
                } else {
                    this.activiesLowLine = 2;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .store{
        width:90%;
        margin:auto;
        margin-top:.3rem;
        display:flex;
        flex-direction:row;
        .logo{
           width:1.38rem;
           height:1.18rem;
           border:1px solid #d1d1d1; 
        }
        .info{           
            flex-grow:1;
            margin-left:.35rem;
            h2{
                height:.4rem;                
                align-items: flex-start;
                display:flex;
                span{
                    display:inline-flex;width:.4rem;line-height:.4rem;height:.4rem;
                }
                .title_ico{background:gray;}
                .title_txt{
                    flex-grow:1;margin:0 .1rem;overflow:hidden;
                }
                .title_label{color:#999;}
            }
            .score{
                height:.4rem;
                margin-top:.1rem;
                display:flex;
                align-items:center;
                span{
                    display:flex;
                }
                .score_score{
                    width:3.7rem;
                    align-items:center;
                    .stars{
                        width:1.75rem;
                        height:.35rem;
                        background:gray;
                        margin-right:.1rem;
                        background:url(../../assets/component/store/stars.png) no-repeat;background-size:1.75rem;
                        
                    }
                    .stars2{ background-position:left -.35rem; }
                    .stars3{ background-position:left -.7rem; }
                    .stars4{ background-position:left -1.05rem; }
                    .stars5{ background-position:left -1.4rem; }
                    .score_sales{
                        overflow:hidden;line-height:.35rem;
                    }
                }
                .score_server{
                    flex-grow:1;
                    flex-direction:row-reverse;
                    span{
                        display:inline;
                        color:#fff;
                        background:#f63;
                        padding:.01rem .07rem;border-radius:2px;
                        font-size:.24rem;
                    }
                }
            }
            .server{
                display:flex;line-height:1.5;
                span{
                    display:inline-flex;font-size:.24rem;
                }
                .server_distance{
                    flex-grow:1;color:#999;
                    flex-direction:row-reverse;
                }
            }
            .activities{
                border-top:1px solid #d1d1d1;
                margin-top:.1rem;
                padding:.05rem 0;
                .btn{
                    color:#f63;right:0;top:.1rem;
                }
                li{
                    color:#999;
                }
            }
        }
    }
</style>

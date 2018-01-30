<template>
    <div class="index">        
        <!-- 头部 -->
        <div class="header">
            <p class="addr"><i class="dsib mr10"></i><span class="dsib f30 mr10">深圳市南山区软件产业基地</span><b class="dsib"></b></p>
            <div id="search" v-bind:class="{ 
                search : true,
                fixed : isFixed
             }">
                <div>
                    <i class="dsib ml5 mr10"></i><span class="disb">搜索</span>
                </div>
            </div>  
        </div>
        <!-- swiper -->
        <Banner :options="componentsData.swiperOption"></Banner>
        <!-- 专享 -->
        <div class="newUser">
            <a href="javascript:;"></a>
        </div>
        <!-- 推荐商家 -->
        <section>            
            <h1 class="tac f30">--推荐--</h1>
            <Loading v-if="pageLoading" :useScene="'getData'"></Loading>
            <div class="stores">
                <Store v-for="store in componentsData.stores" :key="store.id" :storeData="store"></Store>
                <Loading :showLoading="componentsData.isLoading"></Loading>
            </div>
        </section>
        <!-- 测试 -->
        <!-- 导航 -->
        <Nav :source="this.$options.name"></Nav>
    </div>
</template>

<script> 
    //tab组件
    import Nav from './pub/nav.vue';
    //swiper组件
    import Banner from './pub/banner.vue';
    //推荐商家组件
    import Store from './pub/store.vue';
    //加载中组件
    import Loading from './pub/loading.vue';
    //加载公共js
    import base from '../statics/base';
    import storesList from '../datas/store.json';
    export default {
        name : 'index',
        data() {
            return {   
                apiPaths : {
                    storesList : storesList,
                },             
                //所有组件需要用到的数据
                componentsData : {
                    //推荐店家组件
                    stores : [],
                    //Banner
                    swiperOption: {
                        direction : 'horizontal',
                        speed : 300,
                        autoplay : true,
                        loop : true,
                        pagination: {
                            el: '.swiper-pagination'
                        }
                    },
                    //加载中
                    isLoading : false,
                    isHowData : false
                },
                isFixed : false,
                pageLoading : true
            }
        },
        components : {
            Nav,Banner,Store,Loading
        },
        computed: {                     
        },
        methods: {
            //searchBar滚动吸顶效果
            handleScroll () {
                let scrollTop = base.getScrollTop(),
                    windowHeight = base.getWindowHeight(),
                    scrollHeight = base.getScrollHeight();                
                let offsetTop = document.querySelector('#search').offsetTop;
                if (scrollTop > offsetTop) {
                    this.isFixed = true
                } else {
                    this.isFixed = false
                }
                if(this.componentsData.stores.length < 40) {
                    if(scrollTop + windowHeight > scrollHeight-10) {
                        this.componentsData.isLoading = true;
                        setTimeout(()=>{                       
                            this.getStoresList();
                        },1000);
                    }
                }
                
            }, 
            //获取接口数据
            getStoresList() {
                this.$http.get(this.apiPaths.storesList)
                .then(
                    function(response) {
                        this.pageLoading = false;
                        let data = response.body;
                        if(data.status == 0) {
                            this.componentsData.stores = [
                                ...this.componentsData.stores, ...data.list
                            ];
                            this.componentsData.isLoading = false;
                        }
                        
                    },
                    function(response) {
                        this.pageLoading = false;
                    }
                )
            }
        },
        beforeCreate() {
            //console.log(`beforeCreate-组件实例刚被创建，组件属性计算之前，如data属性等`);
            //console.log(this.$options.name);          
        },
        created() {
            console.log(`created-属性已经绑定，但dom还没生成，$el属性还不存在`);
        },
        beforeMount() {
            console.log(`beforeMount-模板编译/挂载之前`);
            this.getStoresList();
        },
        mounted() {            
            console.log(`mounted-模板编译/挂载之后（不保证组件已在document中）`); 
            window.addEventListener('scroll', this.handleScroll); 
        },
        beforeUpdate() {
            console.log(`beforeUpdate-组件更新之前`);
        },
        updated() {
            console.log(`updated-组件更新之后`);
        },
        activated() {
            console.log(`activated-for keep-alive，组件被激活时调用`);
        },
        deactivated() {
            console.log(`activated-for keep-alive，组件被移除时调用`);
        },
        beforeDestory() {
            console.log(`beforeDestory-组件销毁前调用`);
        },
        destoryed() {
            console.log(`destoryed-组件销毁后调用`);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .index{
        padding-bottom:1.2rem;
        .header{
            background:#f63;
            padding:.2rem .3rem;
            position:relative;
            z-index:10;
            .addr{
                display:flex;
                height:.5rem;
                line-height:.5rem;
                align-items:center;
                margin-bottom:.2rem;
                i{
                    width:.5rem;height:.45rem;
                    background:url(../assets/index/addr.png) no-repeat;
                    background-size:cover;
                }
                span{
                    color:#fff;
                }
                b{
                    width:.3rem;height:.1rem;background:gray;
                }
            }
            .search{
                div{
                    height:.6rem;background:#fff;width:96%;
                    margin:auto;
                    display:flex;
                    align-items:center;                
                    i{
                    width:.4rem;height:.4rem;
                    background:url(../assets/index/search.png) no-repeat;
                    background-size:cover;
                    }
                }            
            }
            .fixed{
                position:fixed;background:#f63;padding:.2rem 0;width:100%;left:0;top:0;
            } 
        }
        .content{height:1000px;}
        .newUser{
            width:90%;margin:.2rem auto;
            border:2px solid gray;border-radius:10px;
            background:#fff;
            a{
                display:block;height:1rem;
            }
        }
    }
</style>

<template>
    <ul>
        <li v-bind:class="{ cur : source=='index' }">
            <a href="/"><i></i>首页</a>
        </li>
        <li v-bind:class="{ cur : source=='preferred' }">
            <a href="/Preferred"><i></i>发现</a>
        </li>
        <li v-bind:class="{ cur : source=='order' }">
            <a href="/Order"><i></i>订单</a>
        </li>
        <li v-bind:class="{ cur : source=='my' }">
            <a href="/My"><i></i>我的</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name : 'Nav',
        data() {
            return {
                
            }
        },
        props : {
            source : {
                type : String
            }
        },
        beforeCreate() {
            console.log(`beforeCreate-组件实例刚被创建，组件属性计算之前，如data属性等`);
            console.log(this.$options.name);            
        },
        created() {
            console.log(`222222created-属性已经绑定，但dom还没生成，$el属性还不存在`);
        },
        beforeMount() {
            console.log(`22222beforeMount-模板编译/挂载之前`);
        },
        mounted() {
            console.log(`222222mounted-模板编译/挂载之后（不保证组件已在document中）`); 
            console.log(this.source);           
        },
        beforeUpdate() {
            console.log(`22222beforeUpdate-组件更新之前`);
        },
        updated() {
            console.log(`222222updated-组件更新之后`);
        },
        activated() {
            console.log(`222222activated-for keep-alive，组件被激活时调用`);
        },
        deactivated() {
            console.log(`22222activated-for keep-alive，组件被移除时调用`);
        },
        beforeDestory() {
            console.log(`22222beforeDestory-组件销毁前调用`);
        },
        destoryed() {
            console.log(`22222destoryed-组件销毁后调用`);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul{
        height:1rem; 
        position:fixed;
        left:0;bottom:0;
        width:100%;
        background:#fff;
        z-index:100;
        display:flex; 
        flex-direction:row; 
        flex-wrap:wrap; 
        justify-content:flex-start; 
        align-content: flex-start;
        align-items:center;
        border-top:1px solid #d1d1d1;
    }
    li{
        flex-grow:1;
        text-align:center;       
        height:.75rem;
    }
    a{
        display:block;
        line-height:.45rem;
        font-size:.22rem;
    }
    i{
        display:block;width:.4rem;height:.4rem;margin:auto;
    }
    li.cur a{
        color : #f63;
        font-weight:bold;
    }
    li:nth-child(1) i{
        background:url(../../assets/home.png) no-repeat;background-size:cover;
    }
    li.cur:nth-child(1) i{
        background:url(../../assets/home_hl.png) no-repeat;background-size:cover;
    }
    li:nth-child(2) i{
        background:url(../../assets/preferred.png) no-repeat;background-size:cover;
    }
    li.cur:nth-child(2) i{
        background:url(../../assets/preferred_hl.png) no-repeat;background-size:cover;
    }
    li:nth-child(3) i{
        background:url(../../assets/order.png) no-repeat;background-size:cover;
    }
    li.cur:nth-child(3) i{
        background:url(../../assets/order_hl.png) no-repeat;background-size:cover;
    }
    li:nth-child(4) i{
        background:url(../../assets/my.png) no-repeat;background-size:cover;
    }
    li.cur:nth-child(4) i{
        background:url(../../assets/my_hl.png) no-repeat;background-size:cover;
    }
</style>

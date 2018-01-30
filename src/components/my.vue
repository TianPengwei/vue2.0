<template>
    <div class="my">
        我的
        <!-- 导航 -->
        <Nav :source="this.$options.name"></Nav>
    </div>
</template>

<script>
    import Nav from './pub/nav.vue';
    export default {
        name : 'my',
        data() {
            return {
                msg : 'hello,world!'
            }
        },
        components : {
            Nav
        },
        beforeCreate() {
            console.log(`beforeCreate-组件实例刚被创建，组件属性计算之前，如data属性等`);
            //console.log(this.$options.name);
        },
        created() {
            console.log(`created-属性已经绑定，但dom还没生成，$el属性还不存在`);
        },
        beforeMount() {
            console.log(`beforeMount-模板编译/挂载之前`);
        },
        mounted() {
            console.log(`mounted-模板编译/挂载之后（不保证组件已在document中）`);  
                      
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
<style scoped>

</style>

<template>
    <div v-if="showLoading" v-bind:class=" {
        page : useScene == 'page',
        getData : useScene == 'getData'
    } ">
        <span class="ico"></span>
        <span class="txt"></span>
    </div>
</template>

<script>
    export default {
        name : 'Loading',
        data() {
            return {
            }
        },
        props : {
            showLoading : {
                type : Boolean,
                default : true
            },
            useScene : {
                type : String,
                default : ''
            }
        }
    }
</script>
<style lang="scss" scoped>
    div{
        display:flex;height:.8rem;line-height:.3rem;color:#bbb;justify-content:center;align-items:center;
        .ico{
            width:.25rem;height:.25rem;border-top:2px solid #f63;border-radius:50%;animation:spinner .6s linear infinite;
        }
        .txt{
            margin:0 .1rem;
        }
        .txt:before{
            content: "加载中..."
        }
    }
    .page{
        height:7rem;font-size:.3rem;
        .ico {
            width:.4rem;height:.4rem;
        }
        .txt:before{
            content: ""
        }
    }
    .getData{
        height:1rem;
        .ico{
            width:.4rem;height:.4rem;
        }
        .txt:before{
            content: ""
        }
    }   
    

    @keyframes spinner{
        to{transform:rotate(360deg);}
    }
</style>

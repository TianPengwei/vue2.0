<template>
    <div class="banner">
        <swiper :options="options" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>1</swiper-slide>
            <swiper-slide>2</swiper-slide>
            <swiper-slide><img src="../../assets/banner/1.png"></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination">1</div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    require('swiper/dist/css/swiper.css')
    export default {
        name : 'Banner',
        data() {
            return {
                
            }
        },
        beforeMount() {
            console.log(this.options);
        },
        props : {
            options : {
                type : Object
            }
        },
        components : {
            swiper,swiperSlide
        }
    }
</script>

<style scoped>
    .swiper-slide{background:red;height:3rem;}
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
        bottom:0px;
    }
</style>

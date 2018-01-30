
module.exports = {
    //获取文档总高度
    getScrollHeight() {
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    　　if(document.body){
    　　　　bodyScrollHeight = document.body.scrollHeight;
    　　}
    　　if(document.documentElement){
    　　　　documentScrollHeight = document.documentElement.scrollHeight;
    　　}
    　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    　　return scrollHeight;
    },
    //获取视口高度
    getWindowHeight() {
    //     var windowHeight = 0;
    // 　　if(document.compatMode == "CSS1Compat"){
    // 　　　　windowHeight = document.documentElement.clientHeight;
    // 　　}else{
    // 　　　　windowHeight = document.body.clientHeight;
    // 　　}
    // 　　return windowHeight;
        return window.innerHeight;
    },
    //滚动条在Y轴滚动距离
    getScrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
};
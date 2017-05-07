require.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',

    paths: { 
        // 指定text.js和vue.js的路径，不需要.js后缀，
        app: '../app',
        text: 'text',
        vue: 'vue'
    }
});
 
require(['vue'], function (Vue) { // 依赖vue.js
    Vue.component('comp', function (resolve) {
        // 注册一个异步组件
        require(['app/comps/comp'], function (comp) {
            // 因为我们要按需加载组件，
            // 因此require(['comp'])必须在function里
            resolve(comp)
        })
    });

    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })
});
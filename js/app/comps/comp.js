
define(['text!app/comps/comp.html'], function (temp) {
    // 在requirejs中定义一个模块，依赖为模板文本
    return {
        props: ['title', 'content'],
        template: temp
    }
});
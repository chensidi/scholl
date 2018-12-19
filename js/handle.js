(function(){
    layui.use(['element','laypage','form'], function(){
        var element = layui.element,
            laypage = layui.laypage,
            form = layui.form;

        laypage.render({
            elem: 'pages'
            ,count: 50
            ,layout: ['count', 'prev', 'page', 'next', 'skip']
            ,jump: function(obj){
                console.log(obj)
            }
        });
    })

    //筛选版本
    $('.handle_list').each(function(v){
        $(this).find('li').click(function(){
            $(this).addClass('on').siblings().removeClass('on');
            console.log(v,$(this).index())    
        })
    })

    //筛选题目
    $('.type_list').each(function(p){
        $(this).find('li').click(function(){
            $(this).addClass('on').siblings().removeClass('on');
            console.log($(this).index(),p)
        })
    })

    //查看答案
    $('.look').each(function(i){
        $(this).click(function(){
            $('.ans').eq(i).toggle();
        })
    })

    //收藏
    $('.collect').each(function(j){
        $(this).click(function(){
            $(this).find('i').toggleClass('layui-icon-star-fill')
        })
    })

    //纠错
    $('.fx').each(function(x){
        $(this).click(function(){
            $('.fixbug').eq(x).toggle();
        })
    })

})()
(function(){
  var h = $(window).width()>768?'400px':$(window).width()*.4+'px';
  
  layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
      elem: '#slider'
      ,interval: '2000'
      ,height: h
      ,width: '100%' //设置容器宽度
      ,arrow: 'always' //始终显示箭头
      //,anim: 'updown' //切换动画方式
    });
  });

  $('.dropdown').click(function(){
    $('.drop_area').toggle();
    $('.choose_prj').css({'left':$('.dropdown').offset().left})
  })

  $('#drop').on('click',function(){
    $('#xs_option').fadeToggle();
  })
})()

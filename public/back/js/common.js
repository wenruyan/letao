/**
 * Created by lenovo on 2018/5/9.
 */
//判断页面是否经过登录

if(location.href.indexOf("login.html")==-1){
  $.ajax({
    url:'/employee/checkRootLogin',
    type:'get',
    dataType:'json',
    success:function (info) {
      console.log(info);
      if(info.success){
      
      }else{
        location.href="login.html";
      }
    }
  })
}


// 禁用进度环
NProgress.configure({ showSpinner: false });

//进度条
$(document).ajaxStart(function() {
  // 开启进度条
  NProgress.start();
});

$(document).ajaxStop(function() {
  // 模拟网络环境
  setTimeout(function() {
    // 结束进度条
    NProgress.done();
  }, 500);
});


  // 分类管理
  $('.category').click(function() {
    $(this).next().stop().slideToggle();
  });
  


//点击菜单按钮，侧边栏隐藏
  $('.icon_menu').click(function () {
    $('.lt_aside').toggleClass('hidemenu');
    $('.lt_main').toggleClass('hidemenu');
    $('.lt_main .main_top').toggleClass('hidemenu');
  })

//模态框
  $('.icon_logout').click(function () {
    $('#logoutModal').modal('show');
  })
  
  //点击退出按钮
  $('#logoutBtn').click(function () {
    $.ajax({
      url:'/employee/employeeLogout',
      dataType:'json',
      type:'get',
      success:function (info) {
        console.log(info);
        if(info.success){
          location.href="login.html";
        }
      }
    })
  })





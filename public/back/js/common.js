/**
 * Created by lenovo on 2018/5/9.
 */
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
$('.lt_aside .nav .category').click(function () {
  $('.child').slideToggle();
})

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
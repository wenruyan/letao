/**
 * Created by lenovo on 2018/5/9.
 */
// 禁用进度环
NProgress.configure({ showSpinner: false });

//进度条
$(document).ajaxStart(function () {
  //开启进度条
  NProgress.start();
});
$(document).ajaxStop(function () {
  setTimeout(function () {
    // 结束进度条
    NProgress.done();
  },500)
  
})

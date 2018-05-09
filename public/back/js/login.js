/**
 * Created by lenovo on 2018/5/9.
 */
$(function () {
  $('#form').bootstrapValidator({
    
    // 指定校验时的图标显示
    feedbackIcons: {
      // 校验成功的
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    // 配置字段
    fields:{
      username:{
        validators:{
          notEmpty:{
            message:"用户名不能为空"
          },
          stringLength: {
            min: 2,
            max: 6,
            message: "用户名必须是2-6位"
          },
          callback:{
            message:'用户名不存在'
          }
        }
      },
      password:{
        validators:{
          notEmpty:{
            message:"密码不能为空"
          },
          stringLength:{
            min:6,
            max:12,
            message:"密码为6-12位"
          },
          callback:{
            message:'密码错误'
          }
        }
      }
    }
  });
  
 // 基本登录功能
  
  //校验成功时，调用
  $('#form').on('success.form.bv',function (e) {
    //阻止默认提交
    e.preventDefault();
    
    var formData=$('#form').serialize();
    
    //通过ajax提交
    $.ajax({
      type:'post',
      url:'/employee/employeeLogin',
      dataType:'json',
      data:formData,
      success:function (info) {
        console.log(info);
        if (info.success){
          //登录成功
          location.href="index.html";
        }
        if(info.error === 1001){
          $('#form').data('bootstrapValidator').updateStatus('password','INVALID','callback');
        }
        if(info.error === 1000){
          $('#form').data('bootstrapValidator').updateStatus('username','INVALID','callback')
        }
      }
    })
  });
  
  //表单重置
  $('[type="reset"]').click(function () {
    $('#form').data('bootstrapValidator').resetForm(true);
  })
  
  
})

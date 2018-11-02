$("#confirm").on('click', function(){

    // 获得文本输入框中的数据
    // 判断是否为空
    // 判断密码是否一致

    // 发送ajax请求
    var formDOM = document.querySelector('form');
    var formData = new FormData(formDOM);
    $.ajax({
        url: '/seller/api/regiester',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(data){
            console.log(data);
            if(data.status === 0){
                window.location.href = '/seller/login';
            }else{
                alert(data.message);
            }
        },
        fail: function(){
            console.log('请求失败');
        }
    })

})
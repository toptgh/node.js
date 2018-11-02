$('#confirm').on('click', function(){
    // 获得用户输入的内容
    var username = $('input[type=text]').val();
    var password = $('input[type=password]').val();

    // 判断是否为空

    // 发送ajax请求
    $.ajax({
        url: '/seller/api/login',
        method: 'POST',
        data: {
            username: username,
            password: password
        },
        success: function(data){
            console.log(data);
            if(data.status === 0){
                //进入商家页面
                window.location.href = '/seller/goods/list';
            }
            else{
                alert(data.message);
            }
        },
        fail: function(){
            console.log('请求失败');
        }
    })

})
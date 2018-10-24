$.ajax({
    url: '/api/goods/list',
    data: {
        page: 3,
        count: 5
    },
    methods: 'GET',
    success: function(data){
        console.log('请求成功');
        console.log(data);
    },
    fail: function(){
        console.log('请求失败');
    }
})

$.ajax({
    url: '/v4/api/film/now-playing?__t=1540288515330&page=1&count=5',
    methods: 'GET',
    success: function(data){
        console.log('请求成功');
        console.log(data);
    },
    fail: function(){
        console.log('请求失败');
    }
})



//http，https请求，无状态请求

// page = 1, count = 10
//1~10

// page = 2 count = 10
//11~20

//page = 3 count = 15
// 31~45

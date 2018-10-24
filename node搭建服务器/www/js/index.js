var imgs = document.querySelectorAll('.box img');

for(var i = 0; i < imgs.length; i++){

    (function(i){
        imgs[i].onclick = function(){
            alert('点击了第'+(i+1)+'张图片');
        }
    })(i);

}
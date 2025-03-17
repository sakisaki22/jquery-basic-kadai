$(function() {
    //class属性がbtnの要素がクリックされたら
    $('.btn').on('click', function(){
      //クリックしましたと表示する
    $('.text-box').val('クリックしました！');
    });
});
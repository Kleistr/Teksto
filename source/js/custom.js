/**
 * PhotoFigcaption
 */
$(document).ready(function addPhotoFigcaption(){ 
    const images = $(".post-content img").not(".justified-gallery img");
    images.each(function (i, o) {
    const $this = $(o);
    if ($this.attr("alt")) {
    const t = $(
        '<div class="img-alt">' + $this.attr("alt") + "</div>"
    );
    $this.after(t);
    }
});
}) 

/*
 * addCopyrightWhenCopy
 */

 $(document).on('copy', function addCopyright(e)
  {
    var selected = window.getSelection();
    var selectedText = selected.toString().replace(/\n/g, '<br>');  // Solve the line breaks conversion issue
    var copyFooter = '<br><br>' + '商业转载请联系作者获得授权，非商业转载请注明出处。<br>'
                          + 'Author：kleist<br> Link：' + document.location.href;
    var copyHolder = $('<div>', {id: 'temp', html: selectedText + copyFooter, style: {position: 'absolute', left: '-99999px'}});
      
    $('body').append(copyHolder);
    selected.selectAllChildren( copyHolder[0] );
    window.setTimeout(function() {
        copyHolder.remove();
    },0);
});


/*
 * showHowManyDaysFaFaGone
 */

$(document).ready(function ShowTimeFamamaGone() {
    var t1="2018/07/31 20:00:00";                               //数据
    var dateBegin = new Date(t1);                               //转化为Date对象的形式
    var dateEnd = new Date();
    var datetime = dateEnd - dateBegin;
    var length=Math.floor(datetime/(24*3600*1000));
    var leave1=datetime%(24*3600*1000);                          //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000));                    //计算出小时数
    var dot = Math.floor(hours/24);
    $("#jumao").html('第 ' + length + '.' + dot + ' 天');
    // console.log('橘猫不在的第' + length + '.' + dot + '天');
});


/**
 * photoFigcaption
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

$(document).on('copy', function addCopyright(e) {
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

/*
* 根据系统优化菜单栏的显示效果（字体原因）
*/

$(document).ready(function fixMenu() {
    const ua = navigator.userAgent.toLowerCase();
    const testUa = regexp => regexp.test(ua);
    let system = "unknow";
    if (testUa(/windows|win32|win64|wow32|wow64/g)) {
        system = "windows";     // windows系统
    } else if (testUa(/macintosh|macintel/g)) {
        system = "macos";       // macos系统
    } else if (testUa(/ios|iphone|ipad|ipod|iwatch/g)) {
        system = "ios";         // ios系统
    }
    let platform = "unknow";
    if (system === "ios" || system === "macos") {
        platform = "apple";     // apple
    } else {
        platform = "else";      // other platform
    }
    if (platform == 'apple') {
        console.log('realTimePlatfrom: ' + platform);
        $('.menu').addClass('apple');
    } else {
        console.log('realTimePlatfrom: ' + platform);
    }
});

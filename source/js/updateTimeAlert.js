// updateTimeAlert
const getTimeString = (msec, exact = true) => {
    let tString;
    const sec = msec / 1000;
    const dnum = Math.floor(sec / 60 / 60 / 24);
    const hnum = Math.floor(sec / 60 / 60 - (24 * dnum));
    const mnum = Math.floor(sec / 60 - (24 * 60 * dnum) - (60 * hnum));
    const snum = Math.floor(sec - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum));
    let dstr = dnum.toString();
    let hstr = hnum.toString();
    let mstr = mnum.toString();
    let sstr = snum.toString();
    if (exact) {
        if (dstr && dstr.length === 1) {
            dstr = '0' + dstr;
        }
        if (hstr && hstr.length === 1) {
            hstr = '0' + hstr;
        }
        if (mstr && mstr.length === 1) {
            mstr = '0' + mstr;
        }
        if (sstr && sstr.length === 1) {
            sstr = '0' + sstr;
        }
        tString = dstr + " 天" + hstr + " 小时" + mstr + " 分" + sstr + " 秒";
    } else {
        // 大概值
        if (dnum < 540) {
            // 一年半内
            if (dnum < 60) {
                // 两个月内
                tString = dstr + " 天";
            } else {
                // 年内月外
                tString = Math.floor(dnum / 30).toString() + ' 个月';
            }
        } else {
            // 年外
            tString = Math.floor(dnum / 365).toString() + ' 年';
        }
    }
    return tString;
};

$(document).ready(function alertTime() {
    const expireAlert = document.getElementById('expire-alert');
    const dateTimeTag = expireAlert.querySelector('time');
    const updateDateTime = new Date(parseInt(dateTimeTag.getAttribute('datetime')));
    console.log(updateDateTime);
    const nowDateTime = Date.now();
    const gap = nowDateTime - updateDateTime;
    if (gap > 365 * 24 * 3600 * 1000) {
        // 内容可能过期
        dateTimeTag.innerText = getTimeString(gap, false);
        expireAlert.classList.remove('hidden');
    }
});
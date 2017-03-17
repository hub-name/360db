function getNowFormatDate() {
    var date = new Date();
    var seperator1 = ".";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var Minutes =  date.getMinutes();
     if (Minutes >= 0 && Minutes <= 9) {
        Minutes = "0" + Minutes;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + Minutes;
    return currentdate;
}
function getYesterdayDate() {
    var date = new Date();
    var seperator1 = ".";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var Minutes =  date.getMinutes();
     if (Minutes >= 0 && Minutes <= 9) {
        Minutes = "0" + Minutes;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + (strDate-1)
            + " " + date.getHours() + seperator2 + Minutes;
    return currentdate;
}
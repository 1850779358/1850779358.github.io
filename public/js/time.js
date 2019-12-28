$(function () {
	var tm = null;
    tm = setInterval(Time,1000);
    Time();
})

function Time(){
    var t_year = 2019;
    var t_month = 12;
    var t_day = 28;

    var t_time = new Date(t_year,t_month-1,t_day);
    var n_time = new Date();

    var d_time = (n_time.getTime() - t_time.getTime())/1000;

    var dYear = parseInt(d_time/(24*60*60*365));
    d_time = d_time%(24*60*60*365);

    var dDay = parseInt(d_time/(24*60*60));
    d_time = d_time%(24*60*60);

    var dHour = parseInt(d_time/(60*60));
    d_time = d_time%(60*60);


    var dMin = parseInt(d_time/(60));
    d_time = d_time%60;

    var dSec = parseInt(d_time);

    $('.showDays').text("本站已运行 " + dYear + " 年 " + dDay + " 天 " + dHour + " 小时 " + dMin + " 分钟 " + dSec + " 秒 ") 
}
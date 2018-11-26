function createCalendar() {
    var elem = document.getElementById("calendar");
    var day = new Date();
    var year = day.getFullYear();
    // document.getElementById("year").innerHTML = year;


    var mon = day.getMonth(); // месяцы в JS идут от 0 до 11, а не от 1 до 12
    var d = new Date(year, mon);


    var month = "";

    switch (mon +1 ){
        case 11: month = "ноябрь";
        break;
    }
    document.getElementById("month").innerHTML = month + " "+ year;
    var realdate = new Date();

    var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // ячейки календаря с датами
    while (d.getMonth() == mon) {

        if (d.getDate() == realdate.getDate()) {
            table += "<td style='background: #1b30a7'>" + d.getDate() + "</td>";
        } else {
            table += '<td>' + d.getDate() + '</td>';
        }

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    // только одно присваивание innerHTML
    elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

// function setup() {
//     var myCanvas = createCanvas(480, 480);
//     myCanvas.parent('sketch-holder');
//
//     var canvasHTML = myCanvas;//document.getElementById('myCanvas');
//     var contextHTML = canvasHTML.getContext('2d');
//     contextHTML.strokeRect(0, 0, 480, 480);
//
//     //Расчет координат центра и радиуса часов
//     var radiusClock = 480 / 2 - 10;
//     var xCenterClock = 480 / 2;
//     var yCenterClock =480 / 2;
//
//     //Очистка экрана.
//     contextHTML.fillStyle = "#ffffff";
//     contextHTML.fillRect(0, 0,480,480);
//
//     //Рисуем контур часов
//     contextHTML.strokeStyle = "#000000";
//     contextHTML.lineWidth = 1;
//     contextHTML.beginPath();
//     contextHTML.arc(xCenterClock, yCenterClock, radiusClock, 0, 2 * Math.PI, true);
//     contextHTML.moveTo(xCenterClock, yCenterClock);
//     contextHTML.stroke();
//     contextHTML.closePath();
//
//     //Рисуем рисочки часов
//     var radiusNum = radiusClock - 10; //Радиус расположения рисочек
//     var radiusPoint;
//     for (var tm = 0; tm < 60; tm++) {
//         contextHTML.beginPath();
//         if (tm % 5 == 0) {
//             radiusPoint = 5;
//         } else {
//             radiusPoint = 2;
//         } //для выделения часовых рисочек
//         var xPointM = xCenterClock + radiusNum * Math.cos(-6 * tm * (Math.PI / 180) + Math.PI / 2);
//         var yPointM = yCenterClock - radiusNum * Math.sin(-6 * tm * (Math.PI / 180) + Math.PI / 2);
//         contextHTML.arc(xPointM, yPointM, radiusPoint, 0, 2 * Math.PI, true);
//         contextHTML.stroke();
//         contextHTML.closePath();
//     }
//
//     //Оцифровка циферблата часов
//     for (var th = 1; th <= 12; th++) {
//         contextHTML.beginPath();
//         contextHTML.font = 'bold 25px sans-serif';
//         var xText = xCenterClock + (radiusNum - 30) * Math.cos(-30 * th * (Math.PI / 180) + Math.PI / 2);
//         var yText = yCenterClock - (radiusNum - 30) * Math.sin(-30 * th * (Math.PI / 180) + Math.PI / 2);
//         if (th <= 9) {
//             contextHTML.strokeText(th, xText - 5, yText + 10);
//         } else {
//             contextHTML.strokeText(th, xText - 15, yText + 10);
//         }
//         contextHTML.stroke();
//         contextHTML.closePath();
//     }
//
//
//     //Рисуем стрелки
//     var lengthSeconds = radiusNum - 10;
//     var lengthMinutes = radiusNum - 15;
//     var lengthHour = lengthMinutes / 1.5;
//     var d = new Date();                //Получаем экземпляр даты
//     var t_sec = 6 * d.getSeconds();                           //Определяем угол для секунд
//     var t_min = 6 * (d.getMinutes() + (1 / 60) * d.getSeconds()); //Определяем угол для минут
//     var t_hour = 30 * (d.getHours() + (1 / 60) * d.getMinutes()); //Определяем угол для часов
//
//     //Рисуем секунды
//     contextHTML.beginPath();
//     contextHTML.strokeStyle = "#FF0000";
//     contextHTML.moveTo(xCenterClock, yCenterClock);
//     contextHTML.lineTo(xCenterClock + lengthSeconds * Math.cos(Math.PI / 2 - t_sec * (Math.PI / 180)),
//         yCenterClock - lengthSeconds * Math.sin(Math.PI / 2 - t_sec * (Math.PI / 180)));
//     contextHTML.stroke();
//     contextHTML.closePath();
//
//     //Рисуем минуты
//     contextHTML.beginPath();
//     contextHTML.strokeStyle = "#000000";
//     contextHTML.lineWidth = 3;
//     contextHTML.moveTo(xCenterClock, yCenterClock);
//     contextHTML.lineTo(xCenterClock + lengthMinutes * Math.cos(Math.PI / 2 - t_min * (Math.PI / 180)),
//         yCenterClock - lengthMinutes * Math.sin(Math.PI / 2 - t_min * (Math.PI / 180)));
//     contextHTML.stroke();
//     contextHTML.closePath();
//
//     //Рисуем часы
//     contextHTML.beginPath();
//     contextHTML.lineWidth = 5;
//     contextHTML.moveTo(xCenterClock, yCenterClock);
//     contextHTML.lineTo(xCenterClock + lengthHour * Math.cos(Math.PI / 2 - t_hour * (Math.PI / 180)),
//         yCenterClock - lengthHour * Math.sin(Math.PI / 2 - t_hour * (Math.PI / 180)));
//     contextHTML.stroke();
//     contextHTML.closePath();
//
//     //Рисуем центр часов
//     contextHTML.beginPath();
//     contextHTML.strokeStyle = "#000000";
//     contextHTML.fillStyle = "#ffffff";
//     contextHTML.lineWidth = 3;
//     contextHTML.arc(xCenterClock, yCenterClock, 5, 0, 2 * Math.PI, true);
//     contextHTML.stroke();
//     contextHTML.fill();
//     contextHTML.closePath();
//
//     return;
// }
//
// setup();

window.setInterval(
    function () {
        var d = new Date();
        document.getElementById("clock").innerHTML = d.toLocaleTimeString();
        displayCanvas();
    }
    , 1000);
function setup() {
    var myCanvas = createCanvas(300, 400);

    myCanvas.parent('sketch-holder');

    background(200);

    var c = color(70,69,68);//#464544
    fill(c);

    rect(50, 200, 100, 50);
    arc(150, 200, 100, 100, 2*PI, TWO_PI + 2* QUARTER_PI);
    triangle(150, 200, 100, 200, 150, 150);


    fill(0);
    line(50, 200, 250, 200);
    line(150, 100, 150, 300);

    line(150, 100, 160, 110);
    line(150, 100, 140, 110);

    line(250, 200, 240, 210);
    line(250, 200, 240, 190);

//oX
    line(200, 198, 200, 202);
    line(175, 198, 175, 202);
    line(125, 198, 125, 202);
    line(100, 198, 100, 202);


    //oY
    line(148, 250, 152, 250);
    line(148, 225, 152, 225);
    line(148, 175, 152, 175);
    line(148, 150, 152, 150);



    text("X", 250, 200);
    text("Y", 150, 100);

    text("R/2", 200, 200);
    text("-R/2", 100, 195);
    text("-R", 50, 200);
    text("R", 200, 200);

    text("-R/2", 150, 260);
    text("R/2", 150, 150);
}

getPoint(1);


function draw() {
    //75 - коэффициент смещения из-за отсчета
    if (mouseIsPressed) {
        ellipse(winMouseX - 6, winMouseY - 185, 4, 4);
        // document.getElementById("Yvalue").innerHTML = winMouseY;
    }
    print(mouseIsPressed);

    //
    // //изменить условие для y
    // if ((winMouseX > 8 && winMouseX < 308 && winMouseY > 187 && winMouseY < 585) && mouseIsPressed) {
    //     let r = ($('input[name=R]:checked').val());
    //     let x = (winMouseX - 156) / 50 * r;
    //     let y = (385 - winMouseY) / 50 * r;
    //     y = y * 100;
    //     y = Math.round(y);
    //     y = y / 100;
    //
    //     x = x * 100;
    //     x = Math.round(x);
    //     x = x / 100;
    //
    //     if ((y >= 3 || y <= -3) && mouseIsPressed) {
    //         document.getElementsByName("mistake")[0].innerHTML = "Unable to read point coordinates";
    //         return;
    //     } else {
    //         let oldX = $('input[name=X]:checked').val();
    //         $('input[name=X]').val(x);
    //
    //         let oldY = $('input[name=Y]:checked').val();
    //         $('input[name=Y]').val(y);
    //
    //         document.getElementsByName('xyForm')[0].submit();
    //
    //         $('input[name=X]').val(oldX);
    //         $('input[name=Y]').val(oldY);
    //
    //         document.getElementsByName("mistake")[0].innerHTML = "";
    //     }

        mouseIsPressed = false;


    // }
}

setup();

// function one() {
//     getPoint(1);
// }
//
// function two() {
//     getPoint(2);
// }
//
// function three() {
//     getPoint(3);
// }
//
// function four() {
//     getPoint(4);
// }
//
// function five() {
//     getPoint(5);
// }
//
// function getPoint(r) {
//     setup();
//     let con = 50 / r;
//     let arrayX = JSON.parse('<%=jsonArrayX%>');
//     let arrayY = JSON.parse('<%=jsonArrayY%>');
//
//     for (let i = 0; i < arrayX.length; i++) {
//         ellipse(arrayX[i] * con + 150, 200 - arrayY[i] * con, 4, 4);
//     }
//
// }


document.querySelector('input[name=R]').onclick = function (e) {
    alert(e.value);
    getPoint(e.value);
}

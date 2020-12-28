canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
car2_width = 100;
car2_height = 90;
background_image = "https://i.postimg.cc/KzWwHPcq/racing.gif";
rover_image = "https://i.postimg.cc/9rqYz9HM/car1.png";
car2_image="https://i.postimg.cc/tnnW1Kff/car2.png"
rover_x = 10;
rover_y = 10;
car2_x = 20;
car2_y = 100;
function add() {
    backgroundimgtag = new Image();
    backgroundimgtag.onload = uploadbackground;
    backgroundimgtag.src = background_image;
    roverimgtag = new Image();
    roverimgtag.onload = uploadrover;
    roverimgtag.src = rover_image;
    car2imgtag = new Image();
    car2imgtag.onload = uploadcar2;
    car2imgtag.src = car2_image;
}
    function uploadbackground() {
        ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height);
    }
    function uploadrover() {
        ctx.drawImage(roverimgtag, rover_x, rover_y, rover_width, rover_height);
    }
    function uploadcar2() {
        ctx.drawImage(car2imgtag, car2_x, car2_y, car2_width, car2_height);
    }
    window.addEventListener("keydown", my_keydown);
    function my_keydown(e) {
       keypressd=e.keyCode;
    console.log(keypressd);
    if (keypressd=='38') {
       up(); 
       console.log("up");
    }
    if (keypressd=='40') {
        down(); 
        console.log("down");
     } 
     if (keypressd=='37') {
        left(); 
        console.log("left");
     }
     if (keypressd=='39') {
        right(); 
        console.log("right");
     }
    }
function up() {
    if (rover_y>=0) {
    rover_y=rover_y-10;
    uploadbackground();
    uploadrover();
    }
}
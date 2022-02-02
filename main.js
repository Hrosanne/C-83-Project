var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_x,last_y;
color = "black";
width_of_line = 1;
width = screen.width;
new_width = screen.width - 70;
height = screen.height;
new_height = screen.height - 300;

if(width<992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("mousedown",my_Mousedown);
function my_Mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup",my_Mouseup);
function my_Mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave",my_Mouseleave);
function my_Mouseleave(e){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove",my_Mousemove);
function my_Mousemove(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of x and y");
        console.log("x = "+ last_x);
        console.log("y = "+ last_y);
        ctx.moveTo(last_x,last_y);
        console.log("current position of x and y")
        console.log("x = "+ current_x);
        console.log("y = "+ current_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}
function clearArea() { 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
 }

 canvas.addEventListener("touchstart",my_Touchstart);
function my_Touchstart(e){
    console.log("I am in the Touchstart.");
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_Touchmove);
function my_Touchmove(e){
    console.log("I am in Touch Move");
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;
   
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of x and y");
        console.log("x = "+ last_x);
        console.log("y = "+ last_y);
        ctx.moveTo(last_x,last_y);
        console.log("current position of x and y")
        console.log("x = "+ current_x);
        console.log("y = "+ current_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    
    last_x = current_x;
    last_y = current_y;
}

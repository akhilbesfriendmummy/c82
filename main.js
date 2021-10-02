canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mouseEvent="";
color="red";

canvas.addEventListener("mouseDown",my_mouseDown);
function my_mouseDown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    curent_x=e.clientX-canvas.offsetLeft;
    curent_y=e.clientY-canvas.offsetTop;
    
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=3;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(curent_x,curent_y);
    }
    last_x=curent_x;
    last_y=curent_y;
}
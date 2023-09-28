var mouseEvent = "empty";

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

/*Uncomment the correct line*/
canvas.addEventListener("mousedown", my_mousedown);



function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

/*
Create an event listener for "mousemove"
and call function my_mousemove
*/

function my_mousemove(e) {
    /*Uncomment the correct line*/
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_x = e.clientX - canvas.offsetRight;
    current_position_of_mouse_x = e.clientX - canvas.offsetBottom;

    /*
    create current_position_of_mouse_y and
    assign it e.clientY - canvas.offsetTop;
    */

    if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

}

/*Create an event listener for "mouseup"
and call function my_mouseup



Create a function named my_mouseup with
event e as parameter.
 
Assign "mouseUP" to mouseEvent
within the function
*/

/*Create an event listener for "mouseleave"
and call function my_mouseleave

Create a function named my_mouseleave with
event e as parameter.
 
Assign "mouseleave" to mouseEvent
within the function
*/

function my_mouseup(event) {
    console.log("Mouse button was released!");
}

function my_mouseup(e) {
    
    console.log("Mouse button was released!");
    console.log("Mouse coordinates - X: " + e.clientX + ", Y: " + e.clientY);
}

// Add an event listener for "mouseup" to the document
document.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    // Change the type property of the event object to "mouseUP"
    e.type = "mouseUP";

    // Your custom code to handle the modified event goes here
    console.log("Modified Event Type: " + e.type);
}



document.addEventListener("mouseup", my_mouseup);

function my_mouseleave(event) {
    
    console.log("Mouse left the element!");
}


var element = document.getElementById("myElement");
element.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    
    console.log("Mouse left the element!");
    
    
}


var element = document.getElementById("myElement");
element.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    
    e.type = "mouseleave";

    
    console.log("Modified Event Type: " + e.type);
}


var element = document.getElementById("myElement");
element.addEventListener("mouseleave", my_mouseleave);


function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

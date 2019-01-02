function moveElement(elementID,final_x,final_y,interval)
{
    var elem=document.getElementById(elementID);
    if(elem.movement){
        clearTimeout(elem.movement)
    }
    var x_pos=parseInt(elem.style.left);
    var y_pos=parseInt(elem.style.top);
    if(x_pos<final_x){
        x_pos++;
    }
    if(y_pos<final_y){
        y_pos++;
    }
    if(x_pos>final_x){
        x_pos--;
    }
    if(y_pos>final_y)
    {
        y_pos--;
    }
    if(y_pos===final_y&&x_pos===final_x) return true;
    elem.style.left=x_pos+"px";
    elem.style.top=y_pos+"px";
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement=setTimeout(repeat,interval);
}
window.onload=function prepareSlideshow(){
var preview=document.getElementById("preview");
preview.style.position="absolute";
preview.style.top="0px";
preview.style.left="0px";
var list=document.getElementById("linklist");
links=list.getElementsByTagName("a");
    links[0].onmouseover=function () {
        //clearTimeout(movemont);不能这样加，因为movement是执行完moveElement后才有值的
        moveElement("preview",-100,0,10)
}
    links[1].onmouseover=function () {
        //clearTimeout(movemont);不能这样加，因为movement是执行完moveElement后才有值的
        moveElement("preview",-200,0,10)
    };
    links[2].onmouseover=function () {
        //clearTimeout(movemont);不能这样加，因为movement是执行完moveElement后才有值的
        moveElement("preview",-300,0,10)
    };
    links[3].onmouseover=function () {
        //clearTimeout(movemont);不能这样加，因为movement是执行完moveElement后才有值的
        moveElement("preview",-400,0,10)
    };
}

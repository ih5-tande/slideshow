function positionElement(){
    var message=document.getElementById("message1");
    message.style.position="absolute";
    message.style.left="0"+"px";
    message.style.top="0"+"px";


  moveElement("message1",200,200,0.00001)
};
positionElement();

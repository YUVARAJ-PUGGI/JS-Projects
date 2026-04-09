let randomColor = function(){
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0;i<6;i++){
        color += Math.floor(Math.random()*16)
    }
    return color;
}
let interval;
let startChanging = function(){

    
    let backColor = function(){
        document.body.style.backgroundColor=randomColor();
    }
    if(!interval){
        interval = setInterval(backColor,1000);
    }
}
let stopChanging = function(){
    clearInterval(interval);
    interval = null;
}   

document.getElementById("start").addEventListener("click",startChanging);
document.getElementById("stop").addEventListener("click",stopChanging);



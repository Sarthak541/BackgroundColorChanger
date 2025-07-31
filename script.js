const button = document.querySelector("button");
const colorSpan = document.querySelector(".color");

function getRandomColor(){
    let hexRange = "0123456789ABCDEF";

    let hex = "#";

    for(var i=0;i<6;i++){
        randNum = Math.floor(Math.random()*16);
        hex+=hexRange[randNum];
    }

    return hex;
}

button.addEventListener("click",()=>{
    let color = getRandomColor();
    document.body.style.backgroundColor = color;
    colorSpan.textContent = color;
}
)
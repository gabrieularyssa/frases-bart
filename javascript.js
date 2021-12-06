let numbVezesEscrever;
let numbVezesApagar;
let numbLinhasEscritas;
let i = 0;
document.getElementById("demo2").innerHTML = "0";

function escrever(){

    numbVezesEscrever = document.getElementById("escrever").value;
    
    numbVezesApagar = parseInt(numbVezesEscrever/11);

    numbLinhasEscritas = parseInt(((numbVezesEscrever/11) - numbVezesApagar) * 11);

    while(numbLinhasEscritas > i){
        i++
        document.getElementById("demo").innerHTML += "<p> A Feiticeira não promove o satanismo </p>";
    }

    document.getElementById("demo2").innerHTML = numbVezesApagar;
}

function apagar(){
    document.getElementById("demo").innerHTML = "";
}
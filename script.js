// console.log("page loaded...");

function removetodd(){
    document.querySelector("#todd").remove()
}

function removephil(){
    document.querySelector("#phil").remove()
}

function replace_name(){
    document.getElementById("jane").innerText =('Radar Bob')
}

var count1 = 2

function subtract1(){
    var countElem = document.querySelector("#reqs")
    count1--;
    countElem.innerText = count1 ;
}

var count0 = 2
function add1(){
    var countElem = document.querySelector("#reqs")
    count1++;
    countElem.innerText = count1;
}
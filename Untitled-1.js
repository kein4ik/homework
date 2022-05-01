//document.getElementById("box").innerText = 5
var i = 0;
function increment(){
    if(i == 10){
    alert("rate only out of 10")
    return null
}
    document.getElementById('box').value = ++i;
}

function decrement(){
    if(i<0){
        alert("this cant be negotive")
        return null;
    }
    document.getElementById("box").value = i--;
}
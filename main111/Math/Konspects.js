function Question(){
    var Count = 0;
    if(document.getElementById("first").checked){
        Count+=1;
    }
    if(document.getElementById("Dva")){
        Count+=1;
    }
    if(document.getElementById("Tri")){
        Count+=1;
    }
    alert("Ты получил "+ Count + " NIS coins");
    window.location.href = "Math.html";
}
function Menu(){
    window.location.href = "../mainHTT.html";
}
function ToTest(){
    window.location.href = "MathTest.html";
}
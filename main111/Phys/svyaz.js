function Question(){
    var Count = 0;
    if(document.getElementById("first").checked){
        Count+=1;
    }
    if(document.getElementById("second11")){
        Count+=1;
    }
    if(document.getElementById("second1")){
        Count+=1;
    }
    alert("Ты получил "+ Count + " NIS coins");
    window.location.href = "Phys.html";
}
function Menu(){
    window.location.href = "../mainHTT.html";
}
function ToTest(){
    window.location.href = "PhysTest.html";
}
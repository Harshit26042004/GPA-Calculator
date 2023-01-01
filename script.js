function total(value){
    document.getElementById("gpa").value+=value;
                
}
function calculate(){
    var b;
    b=document.getElementById("gpa").value;
    b=eval(b);
    b+="/22";
    b=eval(b);
    if(b<=10){
        window.alert("Your grade is "+b);
        document.getElementById("gpa").value = b;
    }
    else{
        window.alert("Sorry, some Error occured from your side or from Sytem side");
        window.alert("please Refresh the page and retry your task");
    }
                
}
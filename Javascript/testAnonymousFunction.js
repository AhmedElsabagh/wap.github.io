window.onload = function(){
    document.getElementById("clickbtn").onclick = function(){
        var timer = null;
        if(timer == null)
        {
            timer = setInterval( function(){
                document.getElementById("output").innerHTML += "Booyah!";
            },3000);
        }
        else {
            clearInterval(timer);
            timer = null;
        }
    }
}
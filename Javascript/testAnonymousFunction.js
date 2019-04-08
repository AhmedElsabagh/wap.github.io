window.onload = function(){
    var timer;
    document.getElementById("clickbtn").onclick = function(){
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

    document.getElementById("stopbtn").onclick = function() {
        clearInterval(timer);
    }
}


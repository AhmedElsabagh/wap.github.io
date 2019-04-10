let textTimer;
let index ;
let frames;
let txtarea;
let speed = 250;

window.onload = function () {

    txtarea = document.getElementById("text-area");
    document.getElementById("start").onclick = startAnimate;
    document.getElementById("stop").onclick = stopAnimate;
    document.getElementById("animation").onchange = function () {
        txtarea.innerHTML = ANIMATIONS[document.getElementById("animation").value];
        frames = txtarea.innerHTML.split("=====\n");
        index = 0;
    }

    document.getElementById("fontsize").onchange = function () {
        txtarea.style.fontSize  = document.getElementById("fontsize").value;
        frames = txtarea.innerHTML.split("=====\n");
        index = 0;
    }

    document.getElementById("turbo").onchange = function () {
        clearInterval(textTimer);
        if(document.getElementById("turbo").checked) {
            speed = 50;
        }
        else{
            speed = 250;
        }
        textTimer = setInterval(animateText, speed);
    }
}

function startAnimate() {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("animation").disabled = true;

    textTimer = setInterval(animateText, speed);
}

function animateText() {
    if(frames.length - index  === 1)
    {
        index = 0;
    }
    else
    {
        index++;
    }

    txtarea.innerHTML = frames[index];
}

function stopAnimate() {
    clearInterval(textTimer);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("animation").disabled = false;

}
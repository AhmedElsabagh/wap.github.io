window.onload = function() {
  let bigeer;
  document.getElementById("btnBigger").onclick = function () {
    // let lastSize = document.getElementById("txtInput").style.fontSize;
    // console.log(lastSize);
    // let lastSized = parseInt(lastSize) + 2;
    // console.log(lastSized);
    // document.getElementById("txtInput").style.fontSize = lastSized + "pt";
    bigeer = setInterval( function () {
    let element = document.getElementById('txtInput');
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let fontSize = parseInt(style);
    element.style.fontSize = (fontSize + 2) + 'px';
    }, 500);
  }
  document.getElementById("btnStop").onclick = function () {
    clearInterval(bigeer);
  }
}

function changeTextStyle()
{
  let chk = document.getElementById("chkBling");
  let txt =  document.getElementById("txtInput");

  if(chk.checked)
  {
    txt.className = "styleText";
    window.document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    // txt.style.fontWeight = "bold";
    // txt.style.color = "green";
    // txt.style.textDecoration = "underline";
  }
  else
  {
    txt.className = "notStyleText";
    window.document.body.style.backgroundImage = "none";
    // txt.style.fontWeight = "normal";
    // txt.style.color = "black";
    // txt.style.textDecoration = "unset";
  }
}




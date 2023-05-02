let mybutton = document.getElementById("to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.bottom = "15px";
        mybutton.style.zIndex = "1";
    } else {
        mybutton.style.bottom = "-52px";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
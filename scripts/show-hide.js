document.getElementById("python-item-1").style.maxHeight = "500px";
document.getElementById("webdev-item-1").style.maxHeight = "500px";
document.getElementById("webdev-item-2").style.maxHeight = "500px";
document.getElementById("webdev-item-3").style.maxHeight = "500px";
document.getElementById("webdev-item-4").style.maxHeight = "500px";

function pythonList() {
    var pythonItem1 = document.getElementById("python-item-1");
    var dropdownIcon = document.getElementById("python-plus-ico");

    if (pythonItem1.style.maxHeight === "0px") {
        console.log(pythonItem1.style.maxHeight);
        pythonItem1.style.maxHeight = "500px";
        dropdownIcon.src = "thumbs/minus.png";
    }
    else if (pythonItem1.style.maxHeight === "500px"){
        console.log(pythonItem1.style.maxHeight);
        pythonItem1.style.maxHeight = "0px";
        dropdownIcon.src = "thumbs/plus.png";

    }
  }

function webdevelopmentList() {
    var dropdownIcon = document.getElementById("webdev-plus-ico");
    var webdevItem1 = document.getElementById("webdev-item-1");
    var webdevItem2 = document.getElementById("webdev-item-2");
    var webdevItem3 = document.getElementById("webdev-item-3");
    var webdevItem4 = document.getElementById("webdev-item-4");

    if (webdevItem1.style.maxHeight === "0px") {
        webdevItem1.style.maxHeight = "500px";
        dropdownIcon.src = "thumbs/minus.png";

    }
    else if (webdevItem1.style.maxHeight === "500px"){
        webdevItem1.style.maxHeight = "0px";
        dropdownIcon.src = "thumbs/plus.png";
    }
    if (webdevItem2.style.maxHeight === "0px") {
        webdevItem2.style.maxHeight = "500px";
    }
    else if (webdevItem2.style.maxHeight === "500px"){
        webdevItem2.style.maxHeight = "0px";
    }
    if (webdevItem3.style.maxHeight === "0px") {
        webdevItem3.style.maxHeight = "500px";
    }
    else if (webdevItem3.style.maxHeight === "500px"){
        webdevItem3.style.maxHeight = "0px";
    }
    if (webdevItem4.style.maxHeight === "0px") {
        webdevItem4.style.maxHeight = "500px";
    }
    else if (webdevItem4.style.maxHeight === "500px"){
        webdevItem4.style.maxHeight = "0px";
    }
  }
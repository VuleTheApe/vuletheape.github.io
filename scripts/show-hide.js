function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function pythonList() {
    var pythonItem1 = document.getElementById("python-item-1");
    var dropdownIcon = document.getElementById("python-plus-ico");

    if (pythonItem1.style.display === "none") {
        pythonItem1.style.display = "flex";
        dropdownIcon.src = "thumbs/minus.png";
    }
    else if (pythonItem1.style.display === "flex"){
        pythonItem1.style.display = "none"
        dropdownIcon.src = "thumbs/plus.png";
    }
  }

function webdevelopmentList() {
    var dropdownIcon = document.getElementById("webdev-plus-ico");
    var webdevItem1 = document.getElementById("webdev-item-1");
    var webdevItem2 = document.getElementById("webdev-item-2");
    var webdevItem3 = document.getElementById("webdev-item-3");
    var webdevItem4 = document.getElementById("webdev-item-4");

    if (webdevItem1.style.display === "none") {
        webdevItem1.style.display = "flex";
        dropdownIcon.src = "thumbs/minus.png";

    }
    else if (webdevItem1.style.display === "flex"){
        webdevItem1.style.display = "none";
        dropdownIcon.src = "thumbs/plus.png";
    }
    if (webdevItem2.style.display === "none") {
        webdevItem2.style.display = "flex";
    }
    else if (webdevItem2.style.display === "flex"){
        webdevItem2.style.display = "none";
    }
    if (webdevItem3.style.display === "none") {
        webdevItem3.style.display = "flex";
    }
    else if (webdevItem3.style.display === "flex"){
        webdevItem3.style.display = "none";
    }
    if (webdevItem4.style.display === "none") {
        webdevItem4.style.display = "flex";
    }
    else if (webdevItem4.style.display === "flex"){
        webdevItem4.style.display = "none";
    }
  }
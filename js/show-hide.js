function pythonDropdown() {
    var item = document.getElementById("python-item");
    var dropdownIcon = document.getElementById("python-plus-icon");
    if (item.style.maxHeight === "0px") {

        item.style.maxHeight = "500px";

        dropdownIcon.src = "images/icons/minus-icon.png";
    }
    else if (item.style.maxHeight === "500px"){

        item.style.maxHeight = "0px";
        dropdownIcon.src = "images/icons/plus-icon.png";
    }
  }

  function webdevDropdown() {
    var item1 = document.getElementById("webdev-item-1");
    var item2 = document.getElementById("webdev-item-2");
    var item3 = document.getElementById("webdev-item-3");
    var item4 = document.getElementById("webdev-item-4");
    var dropdownIcon = document.getElementById("webdev-plus-icon");
    if (item1.style.maxHeight === "0px") {

        item1.style.maxHeight = "500px";
        item2.style.maxHeight = "500px";
        item3.style.maxHeight = "500px";
        item4.style.maxHeight = "500px";

        dropdownIcon.src = "images/icons/minus-icon.png";
    }
    else if (item1.style.maxHeight === "500px"){

        item1.style.maxHeight = "0px";
        item2.style.maxHeight = "0px";
        item3.style.maxHeight = "0px";
        item4.style.maxHeight = "0px";
        dropdownIcon.src = "images/icons/plus-icon.png";
    }
  }
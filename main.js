function responsiv(x) {
    x.classList.toggle("transform");

    var menuID = document.getElementById("menubar");
    if (menuID.className === "menybar") {
        menuID.className += " responsiv";
    } else {
        menuID.className = "menybar";
    }
}
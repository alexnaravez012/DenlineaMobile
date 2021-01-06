function openMenu(type) {
    if (type == 'user') {
        document.getElementById("menu-users").classList.toggle("show");
        document.getElementById("menu-options").classList.remove("show");
    }
    if (type == 'options') {
        document.getElementById("menu-users").classList.remove("show");
        document.getElementById("menu-options").classList.toggle("show");
    }
}
const menu = document.getElementById("hamburger");
const dropDownMenu = document.getElementById("dropDown");

menu.onclick = () => {
    dropDownMenu.classList.toggle("hidden");
};

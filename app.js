const menu = document.getElementById("hamburger");
const dropDownMenu = document.getElementById("dropDown");

menu.onclick = () => {
    document.getElementById("dropDown").classList.toggle("hidden");
};

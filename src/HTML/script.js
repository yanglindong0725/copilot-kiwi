/* 菜单按钮交互 */

const menuButton = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

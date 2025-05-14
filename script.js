// script.js

document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdown.addEventListener('click', function (e) {
    e.preventDefault();
    dropdownMenu.classList.toggle('show');
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      dropdownMenu.classList.remove('show');
    }
  });
});

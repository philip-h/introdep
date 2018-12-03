function toggleOverlay() {
  const overlay = document.getElementsByClassName("nav--mobile")[0];
  const fab = document.getElementsByClassName("fab")[0];
  
  if (overlay.style.display === "none" || overlay.style.display === "") {
    overlay.style.display = 'block';
    fab.innerHTML = '<i class="material-icons">close</i>';
  } else {
    overlay.style.display = "none";
    fab.innerHTML = '<i class="material-icons">menu</i>';
  }
}
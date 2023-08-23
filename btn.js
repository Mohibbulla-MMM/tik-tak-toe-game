let comgratulationsMessage = document.getElementById("mm-modal");
document.getElementById("no-btn").addEventListener("click", function () {
  comgratulationsMessage.style.display = "none";
  location.href = "index.html";
});
document.getElementById("ok-btn").addEventListener("click", function () {
  comgratulationsMessage.style.display = "none";
});
document.getElementById("btn-restart").addEventListener("click", function () {
  location.href = "index.html";
});

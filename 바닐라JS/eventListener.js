const h1 = document.querySelector("div.hello h1");

function handleH1Click() {
  h1.style.color = "blue";
}
function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOD");
}

h1.addEventListener("click", handleH1Click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// 화면 크기가 변할 때
window.addEventListener("resize", handleWindowResize);
// user가 copy할 때
window.addEventListener("copy", handleWindowCopy);
// wifi 연결
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

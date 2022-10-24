const h1 = document.querySelector("div.hello h1");

function handleH1Click() {
  //   // string을 변수에 저장하는 것은 아주 유용한 방법
  //   const clickedClass = "active";
  //   // getter 이자 setter
  //   if (h1.classList.contains(clickedClass)) {
  //     h1.classList.remove(clickedClass);
  //   } else {
  //     h1.classList.add(clickedClass);
  //   }

  // toggle 하나로 위에서 한 작업과 같은 일을 할 수 있다
  h1.classList.toggle("active");
}

h1.addEventListener("click", handleH1Click);

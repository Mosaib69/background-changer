const btn1 = document.querySelector("#btn1");

const btn2 = document.querySelector("#btn2");

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = () => {
  intervalId = setInterval(changeBgColor, 1000);

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = () => {
  clearInterval(intervalId);
};

btn1.addEventListener("click", startChangingColor);

btn2.addEventListener("click", stopChangingColor);

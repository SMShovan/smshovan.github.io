//Movement Animation to happen
const card = document.querySelector(".card");

//Items


//Moving Animation Event
card.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 400;
  let yAxis = (window.innerHeight / 4 - e.pageY) / 500;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
card.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
card.style.transition = "all 2s ease";
  //Popout
});
//Animate Out
card.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 2s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
});

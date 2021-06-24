//Movement Animation to happen
const card = document.querySelector("");


//Moving Animation Event
card.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 550;
  let yAxis = (window.innerHeight / 2 - 4*e.pageY) / 2050;
  card.style.transform = `rotateY(${xAxis}deg) `;
});
//Animate In
card.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
//Popout
}); 
//Animate Out
card.addEventListener("mouseleave", (e) => {
  card.style.transition = "all .5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //Popback
});

//console log welcome information
const wave = String.fromCodePoint(0x1F44B);
console.log("Hey " + wave);

//dark mode
function dark() {
  const element = document.querySelector('.home');
  element.classList.toggle("darkMode");

  svgToggle();
}


function svgToggle(){
  const icon = document.getElementById('moon');
  const icon2 = document.getElementById('sun');

  icon.classList.toggle('invisible');
  icon2.classList.toggle('invisible');
}






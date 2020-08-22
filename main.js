const wave = String.fromCodePoint(0x1F44B);
console.log("Hey " + wave);

//dark
function dark() {
  var element = document.querySelector('.home');
  element.classList.toggle("darkMode");

  svgToggle();
}


function svgToggle(){
  var icon = document.getElementById('moon');
  var icon2 = document.getElementById('sun');

  icon.classList.toggle('invisible');
  icon2.classList.toggle('invisible');

}

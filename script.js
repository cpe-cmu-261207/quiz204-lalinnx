const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

let x ="A"
const search = document.querySelector("#search")
// define more constants and variables here

btn_toggle.onclick = () => {
  if(x=="A"){
    calculation.innerHTML = 630610758-length.value
    author.innerHTML = " "
    btn_toggle.innerHTML = "Display Author"
    x = "B"
  }
  else {
    author.innerHTML = "630610758 LALINTHORN PHOLNARUK"
    btn_toggle.innerHTML = "Display Calculation"
    calculation.innerHTML = " "
  x = "A"
  }
}

// more codes for Search and Reset buttons here

search.onclick = () => {

}


function accordian(id) {
    var x = document.getElementById(id);
    if (x.classList.contains("w3-hide")) {
      x.classList.remove('w3-hide')
    } else { 
      x.classList.add('w3-hide')
    }
    console.log(x.classList.contains("w3-hide"))
}
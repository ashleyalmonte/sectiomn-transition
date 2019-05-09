get section = document.getElementsByTagName('section')

let divs = document.getElementsByTagName('div')

window.addEventListner('scroll', function(event) {
  console.log(window.scrollY)
  if(window.scrollY > 500) {

    for (div of divs) {
      div.classList.remove('hidden')
      div.classList.add('show')
    }
  }
})

console.log(section)

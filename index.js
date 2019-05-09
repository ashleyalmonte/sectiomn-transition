   let div1 = document.getElementById("div1")
   window.addEventListner("scroll", funcition() {
   console.log(window.scrollY)
   if(window.scrollY > 0) {
   div1.classList.remove("hidden")
   div1.classList.add("show")
 }
  })

  let div2 = document.getElementById("div2")
  window.addEventListner("scroll", function(){
    console.log(window.scrollY);
    if(window.scrollY)
    if(window.scrollY > 800) {
      div2.classList.remove("hidden")
      div2.classList.add("show")
    }
  })

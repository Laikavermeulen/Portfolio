//click op navigatie
let mijnKnoppen = document.querySelectorAll(".scroll");
let i = 0;
let scrollAantal = 0;
while (i < mijnKnoppen.length) {
  mijnKnoppen[i].addEventListener("click", function(event) {
    window.scroll({
      top: (window.innerHeight*this.getAttribute("data-factor")),
      left: 0,
      behavior: 'smooth'

    });
    console.log("klik werkt")
    event.preventDefault();
  }, false);
  i++;
}

//header menu blijft in beeld
window.addEventListener("scroll", function() {
      let scrollPositiePx = window.pageYOffset;
      console.log(scrollPositiePx);
      if (scrollPositiePx > 0) {
            document.querySelector("header").classList.add("fixed");
      } else {
            document.querySelector("header").classList.remove("fixed");
      };
})

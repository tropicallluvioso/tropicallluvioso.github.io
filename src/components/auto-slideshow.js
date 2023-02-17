
const imgs = document.querySelectorAll(".container .slide");
 console.log(imgs)

let currentIndex = 0;
let time = 3000; // default time for auto slideshow

const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";

  }
  imgs[index].style.display = "block";

};

defClass(1, 0);

/*leftArrow.addEventListener("click", function(){
  currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
  defClass(0, currentIndex);
});

rightArrow.addEventListener("click", function(){
  currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
  defClass(0, currentIndex);
});*/

const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex+1;
    defClass(0, currentIndex);
    
  }, time);
 
};

startAutoSlide();

// Start the slideshow
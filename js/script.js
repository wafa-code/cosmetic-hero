
function Video_Fun(x) {
  x.classList.toggle("fa-play");
}

function Category_Fun1(x) {
  document.getElementById('category_img').src="img/cream1.png";
  document.getElementById("w--current1").className = "main-wrapper category-block w--current";
  document.getElementById("w--current2").className = "main-wrapper category-block";
  document.getElementById("w--current3").className = "main-wrapper category-block";
  }

  function Category_Fun2(x) {
    document.getElementById('category_img').src="img/cream2.png";
    document.getElementById("w--current1").className = "main-wrapper category-block";
    document.getElementById("w--current2").className = "main-wrapper category-block w--current";
    document.getElementById("w--current3").className = "main-wrapper category-block";
    }   

  function Category_Fun3(x) {
    document.getElementById('category_img').src="img/cream3.png";
    document.getElementById("w--current1").className = "main-wrapper category-block";
    document.getElementById("w--current2").className = "main-wrapper category-block";
    document.getElementById("w--current3").className = "main-wrapper category-block w--current";
    } 

  

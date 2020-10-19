/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");



$(document).ready(function() {
        $(".btn btn-5").prop("disabled", true);
        setTimeout(function(){$(".btn btn-5").prop("disabled", false)}, 30000);
      });


$(img).onclick

var img = document.getElementsByTagName('img')

document.addEventListener("click", function clicked(e) {
	for (var i = img.length - 1; i >= 0; i--) {
		console.log("ça marche bien")
		img[i].classList.add("clicked");
	}
})


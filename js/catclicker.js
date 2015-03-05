
// console.log( "this is cat clicker!!!" );

var clickCount = 0;

var catPic = document.getElementById( "cat-pic" );
var clickText = document.getElementById( "num-clicks" );

catPic.addEventListener( "click", function()
	{
		clickText.innerHTML = ++clickCount;
	},
	false
);
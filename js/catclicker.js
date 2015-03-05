
// counters for each cat
var cat1ClickCount = 0,
	cat2ClickCount = 0,
	cat3ClickCount = 0,
	cat4ClickCount = 0,
	cat5ClickCount = 0;

// names for each cat
var catNames =
[
	"Garfield",
	"Heathcliff",
	"Lorraine",
	"Tigger",
	"Hobbes"
];

// get the image associated with each cat
var cat1Pic = document.getElementById( "cat-1-pic" );
var cat2Pic = document.getElementById( "cat-2-pic" );
var cat3Pic = document.getElementById( "cat-3-pic" );
var cat4Pic = document.getElementById( "cat-4-pic" );
var cat5Pic = document.getElementById( "cat-5-pic" );
var catDisplayPic = document.getElementById( "cat-display-pic" );

// get the spans where each cat's name appears
var catNameHeaders = document.getElementsByClassName( "cat-name-header" );
var catNameMains = document.getElementsByClassName( "cat-name-main" );

// assign all instances of each cat's name
for( var i = 0; i < catNames.length; i++ )
{
	catNameHeaders[ i ].innerHTML = catNames[ i ];
	catNameMains[ i ].innerHTML = catNames[ i ];
}

// get the span where the number of clicks is updated
var clickText1 = document.getElementById( "cat-1-clicks" );
var clickText2 = document.getElementById( "cat-2-clicks" );
var clickText3 = document.getElementById( "cat-3-clicks" );
var clickText4 = document.getElementById( "cat-4-clicks" );
var clickText5 = document.getElementById( "cat-5-clicks" );

// assign event listeners to each image
// when the thumbnail is clicked, the counter increases,
// and the main display will show a big pic of the cliced cat
cat1Pic.addEventListener( "click", function()
	{
		catDisplayPic.src = cat1Pic.src;
		clickText1.innerHTML = ++cat1ClickCount;
	},
	false
);

cat2Pic.addEventListener( "click", function()
	{
		catDisplayPic.src = cat2Pic.src;
		clickText2.innerHTML = ++cat2ClickCount;
	},
	false
);

cat3Pic.addEventListener( "click", function()
	{
		catDisplayPic.src = cat3Pic.src;
		clickText3.innerHTML = ++cat3ClickCount;
	},
	false
);

cat4Pic.addEventListener( "click", function()
	{
		catDisplayPic.src = cat4Pic.src;
		clickText4.innerHTML = ++cat4ClickCount;
	},
	false
);

cat5Pic.addEventListener( "click", function()
	{
		catDisplayPic.src = cat5Pic.src;
		clickText5.innerHTML = ++cat5ClickCount;
	},
	false
);

// counters for each cat
var cat1ClickCount = 0, cat2ClickCount = 0;

// names for each cat
var cat1Name = "Garfield", cat2Name = "Heathcliff";

// get the image associated with each cat
var cat1Pic = document.getElementById( "cat-pic-1" );
var cat2Pic = document.getElementById( "cat-pic-2" );

// get the spans where each cat's name appears
var cat1NameSpans = document.getElementsByClassName( "cat-1-name" );
var cat2NameSpans = document.getElementsByClassName( "cat-2-name" );

// assign all instances of each cat's name
for( var i = 0; i < cat1NameSpans.length; i++ )
{
	cat1NameSpans[ i ].innerHTML = cat1Name;
}

for( var j = 0; j < cat2NameSpans.length; j++ )
{
	cat2NameSpans[ j ].innerHTML = cat2Name;
}

// get the span where the number of clicks is updated
var clickText1 = document.getElementById( "cat-1-clicks" );
var clickText2 = document.getElementById( "cat-2-clicks" );

// assign event listeners to each image
cat1Pic.addEventListener( "click", function()
	{
		clickText1.innerHTML = ++cat1ClickCount;
	},
	false
);

cat2Pic.addEventListener( "click", function()
	{
		clickText2.innerHTML = ++cat2ClickCount;
	},
	false
);
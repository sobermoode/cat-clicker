
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
var cat1Pic = $( "#cat-1-pic" );
var cat2Pic = $( "#cat-2-pic" );
var cat3Pic = $( "#cat-3-pic" );
var cat4Pic = $( "#cat-4-pic" );
var cat5Pic = $( "#cat-5-pic" );
var catDisplayPic = $( "#cat-display-pic" );

// get the spans where each cat's name appears
var catNameHeaders = $( ".cat-name-header" );
var catNameMains = $( ".cat-name-main" );

// assign all instances of each cat's name
for( var i = 0; i < catNames.length; i++ )
{
	catNameHeaders[ i ].innerHTML = catNames[ i ];
	catNameMains[ i ].innerHTML = catNames[ i ];
}

// get the span where the number of clicks is updated
var clickText1 = $( "#cat-1-clicks" );
var clickText2 = $( "#cat-2-clicks" );
var clickText3 = $( "#cat-3-clicks" );
var clickText4 = $( "#cat-4-clicks" );
var clickText5 = $( "#cat-5-clicks" );

// assign event listeners to each image
// when the thumbnail is clicked, the counter increases,
// and the main display will show a big pic of the cliced cat
$( "#cat-1-pic" ).click( function( e )
	{
		catDisplayPic.attr( "src", cat1Pic.attr( "src" ) );
		clickText1.text( ++cat1ClickCount );
	}
);

$( "#cat-2-pic" ).click( function( e )
	{
		catDisplayPic.attr( "src", cat2Pic.attr( "src" ) );
		clickText2.text( ++cat2ClickCount );
	}
);

$( "#cat-3-pic" ).click( function( e )
	{
		catDisplayPic.attr( "src", cat3Pic.attr( "src" ) );
		clickText3.text( ++cat3ClickCount );
	}
);

$( "#cat-4-pic" ).click( function( e )
	{
		catDisplayPic.attr( "src", cat4Pic.attr( "src" ) );
		clickText4.text( ++cat4ClickCount );
	}
);

$( "#cat-5-pic" ).click( function( e )
	{
		catDisplayPic.attr( "src", cat5Pic.attr( "src" ) );
		clickText5.text( ++cat5ClickCount );
	}
);

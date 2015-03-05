
// counters for each cat
var cat1ClickCount = 0, cat2ClickCount = 0;

// names for each cat
var cat1Name = "Garfield", cat2Name = "Heathcliff";

// get the spans where each cat's name appears
var cat1NameSpans = $( ".cat-1-name" );
var cat2NameSpans = $( ".cat-2-name" );
console.log( cat1NameSpans );

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
var clickText1 = $( "#cat-1-clicks" );
var clickText2 = $( "#cat-2-clicks" );

// assign event listeners to each image
$( "#cat-pic-1" ).click( function( e )
	{
		clickText1.text( ++cat1ClickCount );
	}
);

$( "#cat-pic-2" ).click( function( e )
	{
		clickText2.text( ++cat2ClickCount );
	}
);

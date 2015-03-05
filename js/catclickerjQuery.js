
var clickCount = 0;

var clickText = $( "#num-clicks" );

$( "#cat-pic" ).click( function( e )
	{
		clickText.text( ++clickCount );
	}
);


var model =
{
	currentCat: 0,
	cats:
	[
		{
			name: "Garfield",
			imageSrc: "images/cat1.jpg",
			clickCount: 0
		},
		{
			name: "Heathcliff",
			imageSrc: "images/cat2.jpg",
			clickCount: 0
		},
		{
			name: "Lorraine",
			imageSrc: "images/cat3.jpg",
			clickCount: 0
		},
		{
			name: "Tigger",
			imageSrc: "images/cat4.jpg",
			clickCount: 0
		},
		{
			name: "Hobbes",
			imageSrc: "images/cat5.jpg",
			clickCount: 0
		}
	],
	setCurrentCat: function( cat )
	{
		this.currentCat = cat;
	},
	getCurrentCat: function()
	{
		return this.cats[ this.currentCat ];
	}
};

var octopus =
{
	init: function()
	{
		view.init();
	}
};

var view =
{
	catListElement: document.getElementById( "cat-list" ),
	catImageElement: document.getElementById( "cat-image" ),
	catClicksElement: document.getElementById( "cat-clicks" ),
	init: function()
	{
		for( var i = 0; i < model.cats.length; i++ )
		{
			var catNumber = "cat" + i;
			var catListItemContent = model.cats[ i ].name;
			var catListItem = document.createElement( "li" );
			catListItem.id = catNumber;
			catListItem.innerHTML = catListItemContent;
			this.catListElement.appendChild( catListItem );
			document.getElementById( catNumber ).addEventListener( "click", ( function( iCopy )
				{
					return function()
					{
						model.setCurrentCat( iCopy );
						console.log( model.cats[ model.currentCat ] );
						view.catImageElement.src = model.cats[ model.currentCat ].imageSrc;
						view.render();
					};
				})( i )
			);
		}

		this.catImageElement.src = ( model.getCurrentCat() ).imageSrc;
		this.catImageElement.addEventListener( "click", function()
		{
			model.cats[ model.currentCat ].clickCount++;
			view.render();
		});

		document.getElementById( "admin-controls" ).style.visibility = "hidden";

		view.render();
	},
	render: function()
	{
		this.catClicksElement.innerHTML = ( model.getCurrentCat() ).clickCount;	
	}
};

octopus.init();
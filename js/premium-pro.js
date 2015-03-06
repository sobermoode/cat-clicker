
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
	adminControlsAreHidden: true,
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
	},
	updateCat: function( newName, newURL, newClicks )
	{
		model.cats[ model.currentCat ].name = ( newName !== "" ) ? newName : model.cats[ model.currentCat ].name;
		model.cats[ model.currentCat ].imageSrc = ( newURL !== "" ) ? newURL : model.cats[ model.currentCat ].imageSrc;
		model.cats[ model.currentCat ].clickCount = ( newClicks !== "" ) ? newClicks : model.cats[ model.currentCat ].clickCount;
	},
	getCat: function( catNumber )
	{
		return model.cats[ catNumber ];
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
			}
		);

		document.getElementById( "admin-button" ).addEventListener( "click", function()
			{
				model.adminControlsAreHidden = false;
				view.render();
			}
		);

		document.getElementById( "admin-cancel-button" ).addEventListener( "click", function()
			{
				model.adminControlsAreHidden = true;
				view.render();
			}
		);

		document.getElementById( "admin-save-button" ).addEventListener( "click", function()
			{
				octopus.updateCat( document.getElementById( "admin-name-box" ).value, document.getElementById( "admin-imageURL-box" ).value, document.getElementById( "admin-clicks-box" ).value );
				model.adminControlsAreHidden = true;
				view.render();
			}
		);

		document.getElementById( "admin-controls" ).style.visibility = "hidden";

		view.render();
	},
	render: function()
	{
		for( var i = 0; i < this.catListElement.children.length; i++ )
		{
			this.catListElement.children[ i ].innerHTML = octopus.getCat( i ).name;
		}
		this.catImageElement.src = ( model.getCurrentCat() ).imageSrc;
		this.catClicksElement.innerHTML = ( model.getCurrentCat() ).clickCount;
		if( !model.adminControlsAreHidden )
		{
			document.getElementById( "admin-controls" ).style.visibility = "";
			model.adminControlsAreHidden = false;
		}
		else
		{
			document.getElementById( "admin-controls" ).style.visibility = "hidden";
			model.adminControlsAreHidden = true;
		}
	}
};

octopus.init();
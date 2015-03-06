
$( function()
	{
		var model =
		{
			cats: [],
			init: function()
			{
				this.cats.push(
					{
						name: "Garfield",
						imageSrc: "images/cat1.jpg",
						imageElement: document.getElementById( "cat-0-pic" ),
						nameHeaderElement: document.getElementById( "cat-0-name-header" ),
						nameMainElement: document.getElementById( "cat-0-name-main" ),
						clickCountElement: document.getElementById( "cat-0-clicks" ),
						clickCount: 0
					}
				);
				this.cats.push(
					{
						name: "Heathcliff",
						imageSrc: "images/cat2.jpg",
						imageElement: document.getElementById( "cat-1-pic" ),
						nameHeaderElement: document.getElementById( "cat-1-name-header" ),
						nameMainElement: document.getElementById( "cat-1-name-main" ),
						clickCountElement: document.getElementById( "cat-1-clicks" ),
						clickCount: 0
					}
				);
				this.cats.push(
					{
						name: "Lorraine",
						imageSrc: "images/cat3.jpg",
						imageElement: document.getElementById( "cat-2-pic" ),
						nameHeaderElement: document.getElementById( "cat-2-name-header" ),
						nameMainElement: document.getElementById( "cat-2-name-main" ),
						clickCountElement: document.getElementById( "cat-2-clicks" ),
						clickCount: 0
					}
				);
				this.cats.push(
					{
						name: "Tigger",
						imageSrc: "images/cat4.jpg",
						imageElement: document.getElementById( "cat-3-pic" ),
						nameHeaderElement: document.getElementById( "cat-3-name-header" ),
						nameMainElement: document.getElementById( "cat-3-name-main" ),
						clickCountElement: document.getElementById( "cat-3-clicks" ),
						clickCount: 0
					}
				);
				this.cats.push(
					{
						name: "Hobbes",
						imageSrc: "images/cat5.jpg",
						imageElement: document.getElementById( "cat-4-pic" ),
						nameHeaderElement: document.getElementById( "cat-4-name-header" ),
						nameMainElement: document.getElementById( "cat-4-name-main" ),
						clickCountElement: document.getElementById( "cat-4-clicks" ),
						clickCount: 0
					}
				);
			}
		};

		var octopus =
		{
			init: function()
			{
				model.init();
				view.init();
			}
		};

		var view =
		{
			init: function()
			{
				for( var i = 0; i < model.cats.length; i++ )
				{
					document.getElementById( "cat-" + i + "-pic" ).src = model.cats[ i ].imageSrc;
					document.getElementById( "cat-" + i + "-pic" ).addEventListener( "click", ( function( catIDCopy )
						{
							return function()
							{
								++model.cats[ catIDCopy ].clickCount;
								view.render( catIDCopy );
							};
						}
						)( i )
					);
					document.getElementById( "cat-" + i + "-clicks" ).innerHTML = model.cats[ i ].clickCount;
				}
			},

			render: function( catIDCopy )
			{
				document.getElementById( "cat-" + catIDCopy + "-clicks" ).innerHTML = model.cats[ catIDCopy ].clickCount;
				document.getElementById( "cat-display-pic" ).src = model.cats[ catIDCopy ].imageSrc;
			}
		};

		octopus.init();
	}
);

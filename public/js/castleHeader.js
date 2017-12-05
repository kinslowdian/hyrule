// DEBUG
var trace = function(msg){ console.log(msg); };

var displayInfo;
var stars;

function castleHeader_init()
{
	trace("castleHeader_init();");

	displayInfo = {};

	displayInfo.w = screen.width;
	displayInfo.h = screen.height;

	castleHeader_starsInit();
}

function castleHeader_starsInit()
{
	stars = {};

	stars.maxW 		= displayInfo.w;
	stars.maxH 		= 440;
	stars.totalFill = 180;

	stars.html0 = '<div class="castleHeader-star0"><div></div></div>';
	stars.html1 = '<div class="castleHeader-star1"><div></div></div>';

	stars.layer0 = document.querySelector(".castleHeader-wrapper .castleHeader-stars0"); // TINY STARS
	stars.layer1 = document.querySelector(".castleHeader-wrapper .castleHeader-stars1"); // NORMAL STARS

	stars.props0 = new Array();

	castleHeader_starsBuild();
}

function castleHeader_starsBuild()
{
	var htmlPopulate0 = "";
	var htmlPopulate1 = "";
	
	// TINY STARS

	for(var i = 0; i < stars.totalFill; i++)
	{
		var s0 = {};
		
		s0.n = i;
		s0.x = Math.round(Math.random() * ((stars.maxW - 10) - 10) + 10);
		s0.y = Math.round(Math.random() * (stars.maxH - 10) + 10);
		s0.c = 'star0_' + s0.n;
		s0.h = '<div class="castleHeader-star0 ' + s0.c + '" style="transform: translate(' + s0.x + 'px, ' + s0.y + 'px);"><div></div></div>';

		htmlPopulate0 += s0.h;
	}

	stars.layer0.innerHTML = htmlPopulate0;

	// LARGE STARS
}








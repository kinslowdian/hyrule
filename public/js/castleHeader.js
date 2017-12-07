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
	// stars.totalFill = 60;
	stars.totalFill = Math.ceil(stars.maxW * 0.03);

	stars.html0 = '<div class="castleHeader-star0"><div></div></div>';
	stars.html1 = '<div class="castleHeader-star1"><div></div></div>';

	stars.layer0 = document.querySelector(".castleHeader-wrapper .castleHeader-stars0"); // TINY STARS
	stars.layer1 = document.querySelector(".castleHeader-wrapper .castleHeader-stars1"); // NORMAL STARS

	stars.list0 = new Array();
	stars.list1 = new Array();

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
		s0.d = Math.round(Math.random() * (5000 - 2500) + 2500);
		s0.c = 'star0_' + s0.n;
		s0.h = '<div class="castleHeader-star0 starTwinkle ' + s0.c + '" style="transform: translate(' + s0.x + 'px, ' + s0.y + 'px); animation-duration: ' + s0.d + 'ms;"><div class="tween"></div></div>';

		htmlPopulate0 += s0.h;

		stars.list0.push(s0.c);
	}

	stars.layer0.innerHTML = htmlPopulate0;

	// LARGE STARS

	for(var j = 0; j < stars.totalFill; j++)
	{
		var s1 = {};
		
		s1.n = j;
		s1.x = Math.round(Math.random() * ((stars.maxW - 10) - 10) + 10);
		s1.y = Math.round(Math.random() * (stars.maxH - 10) + 10);
		s1.d = Math.round(Math.random() * (4000 - 1000) + 1000);
		s1.c = 'star1_' + s1.n;
		s1.h = '<div class="castleHeader-star1 starTwinkle ' + s1.c + ' gfx-star" style="transform: translate(' + s1.x + 'px, ' + s1.y + 'px); animation-duration: ' + s1.d + 'ms;"><div class="tween"></div></div>';

		htmlPopulate1 += s1.h;

		stars.list0.push(s1.c);
	}

	stars.layer1.innerHTML = htmlPopulate1;
}








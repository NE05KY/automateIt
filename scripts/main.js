var iconsAction;

function checkSlide() {
	var curr = shower.getCurrentSlideNumber();

		// Icons page animation
		if (curr === 17 && !iconsAction) {
			iconsAction = setInterval( changeRandomIcon, 300 );
		}
		if (curr !== 17 && iconsAction) {
			window.clearInterval( iconsAction );
			iconsAction = undefined;
		}
}

setInterval( checkSlide, 300 );

window.onload = function() { 
	crocodile();
	finalize();
}
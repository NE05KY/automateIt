var iconsAction;

function checkSlide() {
    var curr = shower.getCurrentSlideNumber();

    // Icons page animation
    if ( curr === 16 && !iconsAction ) {
        iconsAction = setInterval( changeRandomIcon, 300 );
    }
    if ( curr !== 16 && iconsAction ) {
        window.clearInterval( iconsAction );
        iconsAction = undefined;
    }
}

window.onload = function() {
    crocodile();
    finalize();
    setInterval( checkSlide, 300 );
};
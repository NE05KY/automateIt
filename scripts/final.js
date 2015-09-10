function finalize() {
    var moto = document.getElementById( 'final-moto' ),
        svg = document.getElementById( 'final-svg' );

    var motoText = moto.innerHTML;
    var motoArr = motoText.split( '' );
    moto.innerHTML = '';

    var span;
    var letter;

    for ( var i = 0; i < motoArr.length; i++ ) {
        span = document.createElement( "span" );
        span.className = span.className + " moto-span-anim";
        letter = document.createTextNode( motoArr[ i ] );
        if ( motoArr[ i ] === ' ' ) {
            moto.appendChild( letter );
        } else {
            span.appendChild( letter );
            moto.appendChild( span );
        }
    }

    svg.className = svg.className + " svg-anim";
    moto.className = moto.className + " moto-anim";
}

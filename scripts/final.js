var moto = document.getElementById( 'moto' );     // Find the H2
var motoText = moto.innerHTML;                                      // Get the content of the H2
var motoArr = motoText.split( '' );                                   // Split content into array
moto.innerHTML = '';                                                      // Empty current content

var span;                   // Create variables to create elements
var letter;

for ( var i = 0; i < motoArr.length; i++ ) {                                    // Loop for every letter
    span = document.createElement( "span" );                    // Create a <span> element
    letter = document.createTextNode( motoArr[ i ] );   // Create the letter
    if ( motoArr[ i ] === ' ' ) {                                             // If the letter is a space...
        moto.appendChild( letter );                 // ...Add the space without a span
    } else {
        span.appendChild( letter );                       // Add the letter to the span
        moto.appendChild( span );                   // Add the span to the h2
    }
}
'use strict';

var regex = require( './../lib' );

console.log( regex( '/beep/' ) );
// returns /beep/

console.log( regex( '/[A-Z]*/' ) );
// returns /[A-Z]*/

console.log( regex( '/\\\\\\\//ig' ) );
// returns /\\\//ig

console.log( regex( '/[A-Z]{0,}/' ) );
// returns /[A-Z]{0,}/

console.log( regex( '/^boop$/' ) );
// returns /^boop$/

console.log( regex( '/(?:.*)/' ) );
// returns /(?:.*)/

console.log( regex( '/(?:beep|boop)/' ) );
// returns /(?:beep|boop)/

console.log( regex( '/\\w+/' ) );
// returns /\w+/


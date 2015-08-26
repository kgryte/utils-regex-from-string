/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	regex = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'utils-regex-from-string', function tests() {

	it( 'should export a function', function test() {
		expect( regex ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a primitive string', function test() {
		var values = [
			5,
			NaN,
			null,
			true,
			undefined,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				regex( value );
			};
		}
	});

	it( 'should return a regular expression', function test() {
		var expected,
			actual,
			values;

		values = [
			'/beep/',
			'/[A-Z]*/',
			'/\\\\\\\//ig',
			'/[A-Z]{0,}/',
			'/^boop$/',
			'/(?:.*)/',
			'/(?:beep|boop)/',
			'/\\w+/'
		];

		expected = [
			/beep/,
			/[A-Z]*/,
			/\\\//ig,
			/[A-Z]{0,}/,
			/^boop$/,
			/(?:.*)/,
			/(?:beep|boop)/,
			/\w+/
		];

		for ( var i = 0; i < values.length; i++ ) {
			actual = regex( values[ i ] );
			assert.strictEqual( actual.toString(), expected[ i ].toString(), values[ i ] );
		}
	});

	it( 'should return null if unable to parse an input string as a regular expression', function test() {
		var values = [
			'beep',
			'/boop',
			'/dir//',
			'/dir/goo',
			'\/\/\/\/'
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isNull( regex( values[i] ), values[ i ] );
		}
	});

});

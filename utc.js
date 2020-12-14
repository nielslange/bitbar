#!/usr/local/bin/node
// <bitbar.title>UTC</bitbar.title>
// <bitbar.version>1.0</bitbar.version>
// <bitbar.author>Niels Lange</bitbar.author>
// <bitbar.author.github>nielslange</bitbar.author.github>
// <bitbar.desc>Show time in UTC</bitbar.desc>
// <bitbar.dependencies>node</bitbar.dependencies>

const date = new Date();
const hh = date.getUTCHours().toString().padStart( 2, '0' );
const mm = date.getUTCMinutes().toString().padStart( 2, '0' );
const output = `UTC ${hh}:${mm}`;

console.log(output);
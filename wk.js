#!/usr/local/bin/node
// <bitbar.title>Week number</bitbar.title>
// <bitbar.version>1.0</bitbar.version>
// <bitbar.author>Niels Lange</bitbar.author>
// <bitbar.author.github>nielslange</bitbar.author.github>
// <bitbar.desc>Week number with start end end day</bitbar.desc>
// <bitbar.dependencies>node</bitbar.dependencies>

function formatDate(data) {
  let date  = new Date(data);
  let day   = date.getDate();
  let month = date.getMonth() + 1 ;

  day = day.toString().padStart( 2, '0' );
	month = month.toString().padStart( 2, '0' );

  return day + '.' + month + '.';
}

function getWeekNumber(){
  const date    = new Date();
  const day     = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - day);
  const year    = new Date(Date.UTC(date.getUTCFullYear(),0,1));

  return Math.ceil((((date - year) / 86400000) + 1)/7);
}

function getFirstWeekday(){
  const date        = new Date();
  const weekstart   = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
  const monday      = new Date(date.setDate(weekstart));

  return formatDate(monday);
}

function getLastWeekday(){
  const date        = new Date();
  const weekstart   = date.getDate() - date.getDay() +  (date.getDay() === 0 ? -6 : 1);
  const weekend     = weekstart + 6;
  const sunday      = new Date(date.setDate(weekend));

  return formatDate(sunday);
}

const weekNumber = getWeekNumber();
const firstDay = getFirstWeekday();
const lastDay = getLastWeekday();
const output = `WK ${weekNumber} (${firstDay} - ${lastDay})`;

console.log(output);

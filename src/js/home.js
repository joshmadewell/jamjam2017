var wedding = new Date('2017-03-18').getTime();
var today = new Date().getTime();
var daysleft = Math.ceil((wedding - today) / (1000 * 60 * 60 * 24));

console.log(daysleft);
$('#days-left').text(daysleft);

git remote add origin https://github.com/TEAM-Axel/Control-Center.git
  git branch -M main
  git push -u origin main
// Control Center 

    // clock var code
{
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // declares months var 0-11 as text
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // declares days var 0-6 as text 
var d = new Date(); // var that relates all other parts of the date " --> 'd'.getMinutes();"
var day = days[d.getDay()]; // declares day according to the "days" var
var hr = d.getHours(); // declares hour
var min = d.getMinutes(); // declares minutes
if (min < 10) {
    min = "0" + min; 
}

    // am/pm function
{
var ampm = "am"; 
if( hr > 12 ) {
    hr -= 12;
    ampm = "pm";
}
{
    // dd/mm/yyyy declaration function

var date = d.getDate(); // declares date as dd
var month = months[d.getMonth()]; // declares month according to the "months" var
var year = d.getFullYear(); // finds and declares year var as yyyy
var x = document.getElementById("time"); // declares time as a displayable text document for HTML
x.innerHTML = day + " " + hr + ":" + min + ampm + " " + date + " " + month + " " + year; // defines previous "x" var in full format
}
// USE <span id="time"></span> in HTML to diplay full date

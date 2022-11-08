

//Todays Time
function displayDate(){
    var today = moment().format('dddd, MMMM Do');
    $('#currentDay').text(today);
}
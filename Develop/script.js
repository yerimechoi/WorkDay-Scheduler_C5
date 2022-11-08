

//Todays Time
function displayTime(){
    var today = moment().format('dddd, MMMM Do');
    $('#currentDay').text(today);
}
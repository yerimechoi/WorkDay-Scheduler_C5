$(document).ready(function(){

  $(".time-block").each(function(){
    var currentTime = dayjs().format("H");
    var idHour = $(this).attr("id");

    if(currentTime > idHour.split(" ")[1]){
      $(this).addClass("past");
    }else if(currentTime == idHour.split(" ")[1]){
      $(this).addClass("present");
    }else if(currentTime < idHour.split(" ")[1]){
      $(this).addClass("future");
    }
  });

  $(".saveBtn").click(function(){
    var time = $(this).parents(".row").attr("id").split(" ")[1];
    var userInput = $(this).siblings(".description").val();

    localStorage.setItem(time, userInput);
  });

  // for(var i=9; i<18; i++){
  //     $(`#${i} .description`).val(localStorage.getItem(i));
  // }

  $("#hour-9 .description").val("working");

  $("#hour-10 .description").val(localStorage.getItem(10));

  $("#hour-11 .description").val(localStorage.getItem(11));

  $("#hour-12 .description").val(localStorage.getItem(12));

  $("#hour-13 .description").val(localStorage.getItem(13));

  $("#hour-14 .description").val(localStorage.getItem(14));

  $("#hour-15 .description").val(localStorage.getItem(15));

  $("#hour-16 .description").val(localStorage.getItem(16));

  $("#hour-17 .description").val(localStorage.getItem(17));

  console.log(localStorage.getItem(9));

  var currentDate = dayjs().format("dddd, MMMM DD h:m A")
  $("#currentDay").html(currentDate);

});

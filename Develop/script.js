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

  for(let i = 9; i < 18; i++){
    $("#i").val(localStorage.getItem(i));
  };

  var currentDate = dayjs().format("dddd, MMMM DD h:m A")
  $("#currentDay").html(currentDate);

});

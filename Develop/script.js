$(document).ready(function(){

  $("#currentDay").text(dayjs().format("dddd, MMMM DD"));

  $(".time-block").each(function(){
    var currentTime = dayjs().format("H");
    var idHour = $(this).attr("id");

    if(currentTime > idHour){
      $(this).addClass("past");
    }else if(currentTime == idHour){
      $(this).addClass("present");
    }else if(currentTime < idHour){
      $(this).addClass("future");
    }
  });

  $(".saveBtn").click(function(){
    var time = $(this).parents(".row").attr("id");
    var userInput = $(this).siblings(".description").val();

    save_localStorage(time, userInput);
  });

  function save_localStorage(time, userInput){
    localStorage.setItem(time, userInput);

    $(".time-block").children('textarea').attr("id");
  };

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  var currentDate = dayjs().format("dddd, MMMM DD h:m A")
  $("#currentDay").html(currentDate);

});

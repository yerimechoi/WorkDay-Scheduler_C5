$(document).ready(function(){

  $("#currentDay").text(dayjs().format("dddd, MMMM DD"));

  $(".time-block").each(function(i){
    var currentTime = dayjs().format("H");
    var idHour = $(this).attr("id");

    if(currentTime > idHour){
      $(this).addClass("past");
    }else if(currentTime == idHour){
      $(this).addClass("present");
    }else if(currentTime < idHour){
      $(this).addClass("future");
    }
    i++
  });

  $(".saveBtn").click(function(){
    var userInput = $(this).sibling(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, userInput);
  });
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  var currentDate = dayjs().format("dddd, MMMM DD")
  $("#currentDay").html(currentDate);
});

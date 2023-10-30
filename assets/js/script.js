var timeBlockEl = $("#time-box");
var hourEl = $(".row time-block");
var pastTime = $(".past");
var presentTime = $(".present");
var futureTime = $(".future");
var tasks = $("<textarea>");

var workingDayTimes  = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];


//function to display and format current date in existing HTML header id currentDay
function currentTime(){
  var today = dayjs();
  $("#currentDay").text(today.format('[Today is] dddd D MMMM YYYY'));
  return;
}
currentTime();

//function to create a box for each time in the array of hours in a working day
function generateTimes(){

  timeBlockEl.empty();

  for(i = 0; i < workingDayTimes.length; i++){
    var time = workingDayTimes[i];

    var hourEl = $(`<div id="hour-${time}" class="row time-block">`);

    var timeBoxEl = $(`<div class="col-2 col-md-1 hour text-center py-3">${time}</div>`);
    var textAreaEl = $(`<textarea class="col-8 col-md-10 description" rows="3"> </textarea>`);
    var saveButtonEl = $(`<button class="btn saveBtn col-2 col-md-1" aria-label="save">`);
    var saveStyle = $(`<i class="fas fa-save" aria-hidden="true">`);

    saveButtonEl.append(saveStyle);

    // var hourWindow = Number(time.replace(/\D/g, ""));
    // console.log(hourWindow);
    // var currentHour = dayjs().format('H:mm');
    // console.log(currentHour);
    
    // function checkTime(){
    //   if (hourWindow < currentHour){
    //     hourEl.addClass(pastTime);
    //     console.log('past');
    //    } else if (hourWindow > currentHour){
    //      hourEl.addClass(futureTime);
    //      console.log('future');
    //    } else {
    //      hourEl.addClass(presentTime);
    //      console.log('present');
    //    }
    // }

    hourEl.append(timeBoxEl, textAreaEl, saveButtonEl);

    timeBlockEl.append(hourEl);

  }
  
  return;
}

generateTimes();

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  });
  
// $(".btn saveBtn col-2 col-md-1").click(){
//   console.log("CLICK");

//   }
// )
// function saveTaskToStorage(tasks){
//   tasks = hourEl($(this).attr());
//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   return;
// }

// function getTaskFromStorage(){
//   var tasks = localStorage.getItem("tasks")
//   if(tasks){
//     tasks = JSON.parse(tasks)
//   } else {
//     tasks = [];
//   }
//   return tasks;
// }
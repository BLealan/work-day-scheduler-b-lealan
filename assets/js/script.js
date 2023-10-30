// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var timeBlockEl = $("#time-box");
var pastTime = $(".past");
var presentTime = $(".present");
var futureTime = $(".future");

//function to display and format current date in existing HTML header id currentDay
function currentTime(){
  var today = dayjs();
  $("#currentDay").text(today.format('[Today is] dddd D MMMM YYYY'));
  return;
}
currentTime();


function generateTimes(){

  timeBlockEl.empty();
  var workingDayTimes  = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

  for(i = 0; i < workingDayTimes.length; i++){
    var time = workingDayTimes[i];

    var hourEl = $(`<div id="hour-${time}" class="row time-block">`);

    var timeBoxEl = $(`<div class="col-2 col-md-1 hour text-center py-3">${time}</div>`);
    var textAreaEl = $(`<textarea class="col-8 col-md-10 description" rows="3"> </textarea>`);
    var saveButtonEl = $(`<button class="btn saveBtn col-2 col-md-1" aria-label="save">`);
    var saveStyle = $(`<i class="fas fa-save" aria-hidden="true">`);

    saveButtonEl.append(saveStyle);

    var hourWindow = time.replace(/\D/g, "");
    // console.log(hourWindow);
    var currentHour = dayjs().format('hA');
    // console.log(currentHour);

    if (dayjs().isBefore(dayjs(`${time}`))){
     hourEl.addClass(pastTime);
     console.log('past');
    } else if (dayjs().isAfter(dayjs(`${time}`))){
      hourEl.addClass(futureTime);
      console.log('future');
    } else {
      hourEl.addClass(presentTime);
      console.log('present');
    }

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
  
// function checkTime(){
//   time = dayjs();



function clickToSave(){}

function saveTask(){}

function getTask(){}


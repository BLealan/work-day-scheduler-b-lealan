var timeBlockEl = $("#time-box");
var workingDayTimes  = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//function to display and format current date in existing HTML header id currentDay
function currentTime(){
  var today = dayjs();
  $("#currentDay").text(today.format('[Today is] dddd D MMMM YYYY'));
  return;
}
currentTime();

//function to create a box for each time in the array of hours in a working day
function generateTimes(){

  for(i = 0; i < workingDayTimes.length; i++){
    var time = workingDayTimes[i];

    var hourEl = $(`<div id="hour-${time}" class="row time-block">`);

    //retrieves value (i.e. task string) of current local storage key (i.e. the time hour - if
    //none string is empty)
    var savedTask = localStorage.getItem(`hour-${time}`);
    console.log(savedTask);
    if (savedTask === null){
      savedTask = "";
    }

    var timeBoxEl = $(`<div class="col-2 col-md-1 hour text-center py-3">${time}:00</div>`);
    var textAreaEl = $(`<textarea class="col-8 col-md-10 description" rows="3">${savedTask}</textarea>`);
    var saveButtonEl = $(`<button class="btn saveBtn col-2 col-md-1" aria-label="save">`);
    var saveStyle = $(`<i class="fas fa-save" aria-hidden="true">`);
    
    saveButtonEl.append(saveStyle);

    //checks current dayjs time against time of the current index of array, adds corresponding class to effect styling
    var currentHour = dayjs().format('H');
    
      if (time < currentHour){
        hourEl.addClass('past');
       } else if (time > currentHour){
         hourEl.addClass('future');
       } else {
         hourEl.addClass('present');
       }
    
    hourEl.append(timeBoxEl, textAreaEl, saveButtonEl);

    timeBlockEl.append(hourEl);

  }

//when save button is clicked, task is saved to local storage, with key corresponding to id of it's 
// parent attribute, value is content of sibling element. An alert notifies the user their entry is saved

  $(".saveBtn").on("click", function(){
    alert("Task saved");
    var $thisButton = $(this);
    var textAreaValue = $thisButton.siblings(".description").val();
    var hourId = $thisButton.parent(".time-block").attr("id");

    saveTaskToStorage(textAreaValue, hourId)
  });
  
}

generateTimes();
  
function saveTaskToStorage(task, id){
  localStorage.setItem(id, task);
}
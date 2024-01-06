//  Display the current day at the top of the calender when a user opens the planner.

var currentDay = $('#currentDay');
currentDay.text(dayjs().format('dddd D[th] MMMM YYYY'))

//  Present time blocks for standard business hours when the user scrolls down.
// This has been hardcoded in the HTML

//  Color-code each time block based on past, present, and future when the time block is viewed.

var currentTime = dayjs().format('H');

var timeBlockInput = $('.time-block textarea');

$.each(timeBlockInput, function (i, value) {

  var dataTime = (parseInt(value.dataset.time));
  var dataInputs = timeBlockInput[i];
  
  if (dataTime > currentTime) {
    dataInputs.classList.add('future')
  } else if (dataTime == currentTime) {
    dataInputs.classList.add('present')
  } else if (dataTime < currentTime) {
    dataInputs.classList.add('past')
  }
  
})


// Variable that is either assigned the value of an empty array or the local storage values from the save button function below
var existingTimeBlock = JSON.parse(localStorage.getItem('TimeAndAppointment')) || [];

//  Allow a user to enter an event when they click a time block
// Save the event in local storage when the save button is clicked in that time block.

var saveButtons = $('.saveBtn');

$.each(saveButtons, function (i, button) {
  $(button).on('click', function (e) {
    e.preventDefault();
    var inputTime = $(button).prev().children().eq(0).attr('data-time');
    var inputAppointment = $(button).prev().children().eq(0).val();
    
    var timeAndAppointment = {
      time: inputTime,
      appointment: inputAppointment
    }
    
    existingTimeBlock.push(timeAndAppointment);
    localStorage.setItem("TimeAndAppointment", JSON.stringify(existingTimeBlock));
    
  })
  
})

//  Persist events between refreshes of a page

if (existingTimeBlock.length !== 0) {

  $.each(timeBlockInput, function (i, dataTimeInt) {

    dataTimeInt = $(this).attr('data-time');
    
    for (var j = 0; j < existingTimeBlock.length; j++) {
      var existingTimeInt = existingTimeBlock[j].time
      
      if (dataTimeInt === existingTimeInt) {
        this.value = existingTimeBlock[j].appointment
      }
    }
  })

}
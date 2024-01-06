//  Display the current day at the top of the calender when a user opens the planner.

var currentDay = $('#currentDay');
currentDay.text(dayjs().format('dddd MMMM YYYY'))

//  Present time blocks for standard business hours when the user scrolls down.
// This has been hardcoded in the HTML

//  Color-code each time block based on past, present, and future when the time block is viewed.

var currentTime = dayjs().format('H');
console.log(currentTime + 'PM');

var timeArray = $('.time-block');
var timeBlockInput = $('.time-block input');

$.each(timeArray, function (i, value) {

  var dataTime = (parseInt(value.dataset.time));
  var dataInputs = timeBlockInput[i];
  console.log(`The current time is ${currentTime}`)
  
  if (dataTime > currentTime) {
    dataInputs.classList.add('future')
  } else if (dataTime == currentTime) {
    dataInputs.classList.add('present')
  } else if (dataTime < currentTime) {
    dataInputs.classList.add('past')
  }

  
})

$(timeBlockInput).each(function (i) {
  var timeBlockValue = timeBlockInput.value;
  timeBlockValue = "Test";
  console.log(timeBlockValue)
  
  var timeAndValue = {
    time: timeBlockInput[i].name,
    value: timeBlockValue,
  }

  localStorage.setItem("Time and Value", JSON.stringify(timeAndValue));
})
  

// TODO: Allow a user to enter an event when they click a time block

// TODO: Save the event in local storage when the save button is clicked in that time block.


// TODO: Persist events between refreshes of a page
//  Display the current day at the top of the calender when a user opens the planner.

var currentDay = $('#currentDay');
currentDay.text(dayjs().format('dddd MMMM YYYY'))

//  Present time blocks for standard business hours when the user scrolls down.
// This has been hardcoded in the HTML

//  Color-code each time block based on past, present, and future when the time block is viewed.

var currentTime = dayjs().format('H');
console.log(currentTime + 'PM');

var timeArray = $('.time-block');
var timeBlockInput = $('.time-block textarea');

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

var existingTimeBlock = JSON.parse(localStorage.getItem('TimeAndValue')) || [];

// for (var j = 0; j < timeBlockInput.length; j ++) {

//   timeBlockInput[j].value = "Test-" + [j];
//   var timeBlockValue = timeBlockInput[j].value
//   console.log(timeBlockValue);

  
//   var timeAndValue = {
//     time: timeBlockInput[j].name,
//     value: timeBlockValue,
//   }
  
//   existingTimeBlock.push(timeAndValue)
//   localStorage.setItem("TimeAndValue", JSON.stringify(existingTimeBlock));
  
// }
  
var button = document.querySelector("#nineAM > button")

button.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);
  console.log(button.previousElementSibling.children[0].value);


  var timeAndValue = {
    time: timeBlockInput[0].name,
    value: timeBlockInput[0].value
  }

  existingTimeBlock.push(timeAndValue)
  localStorage.setItem("TimeAndValue", JSON.stringify(existingTimeBlock));

})

if (existingTimeBlock) {

  timeBlockInput[0].value = existingTimeBlock[0].value

}


// TODO: Allow a user to enter an event when they click a time block

// TODO: Save the event in local storage when the save button is clicked in that time block.


// TODO: Persist events between refreshes of a page
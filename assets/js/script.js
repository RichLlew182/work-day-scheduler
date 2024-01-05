//  Display the current day at the top of the calender when a user opens the planner.

var currentDay = $('#currentDay');
currentDay.text(dayjs().format('dddd MMMM YYYY'))

// TODO: Present time blocks for standard business hours when the user scrolls down.

// TODO: Color-code each time block based on past, present, and future when the time block is viewed.

var currentTime = dayjs().format('H');
console.log(currentTime + 'PM');

var timeArray = $('.time-block');

for (let i = 0; i < timeArray.length; i++) {
  dataTime = timeArray[i].dataset.time;
  console.log(dataTime);
}


// TODO: Allow a user to enter an event when they click a time block

// TODO: Save the event in local storage when the save button is clicked in that time block.

// TODO: Persist events between refreshes of a page
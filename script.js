// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//import dayjs from 'dayjs' // ES 2015'

dayjs("2018-08-08"); // parse
dayjs().format("{YYYY} MM-DDTHH:mm:ss SSS [Z] A"); // display
dayjs().set("month", 3).month(); // get & set
dayjs().add(1, "year"); // manipulate
dayjs().isBefore(dayjs()); // query
//import dayjs from 'dayjs' // ES 2015
dayjs().format();

var dateAndTime = document.getElementById("currentDay");
var userInput1 = document.getElementById("text");
var userInput2 = document.getElementById("text2");
var userInput3 = document.getElementById("text3");
var userInput4 = document.getElementById("text4");
var userInput5 = document.getElementById("text5");
var userInput6 = document.getElementById("text6");
var userInput7 = document.getElementById("text7");
var userInput8 = document.getElementById("text8");
var userInput9 = document.getElementById("text9");

function timeTracker() {
  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id"));
    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

timeTracker();

dateAndTime.innerHTML = dayjs().$d;

function clickSave() {
  localStorage.setItem("New Event", userInput1.value);
}

$("#save1").on("click", function () {
  localStorage.setItem("9am", userInput1.value);
});

$("#save2").on("click", function () {
  localStorage.setItem("10am", userInput2.value);
});

$("#save3").on("click", function () {
  localStorage.setItem("11am", userInput3.value);
});

$("#save4").on("click", function () {
  localStorage.setItem("12PM", userInput4.value);
});

$("#save5").on("click", function () {
  localStorage.setItem("1PM", userInput5.value);
});

$("#save6").on("click", function () {
  localStorage.setItem("2PM", userInput6.value);
});

$("#save7").on("click", function () {
  localStorage.setItem("3PM", userInput7.value);
});

$("#save8").on("click", function () {
  localStorage.setItem("4PM", userInput8.value);
});

$("#save9").on("click", function () {
  localStorage.setItem("5PM", userInput9.value);
});

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
  // TODO: Add code to display the current date in the header of the page.
});

document.getElementById("current_year").innerHTML = new Date().getFullYear();

const config = {
  shortMonths: false,
  moodColors: [
    '#2d6b5f',
    '#72e3a6',
    '#dff4c7',
    '#edbf98',
    '#ea3d36'
  ],
  resetColor: '#fff',
};

function buildCalendar() {
  let monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let months = config.shortMonths ? monthsShort : monthsLong;

  var counter = 1;
  for (let month in months) {
    document.getElementById("calendar").innerHTML += `<div class="months" id="${months[month]}"><h3>${months[month]}</h3></div>`;
    document.getElementById(`${months[month]}`).innerHTML += `<div class="days_container"></div>`;
    let currentDate = new Date();
    let daysInMonth = new Date(currentDate.getFullYear(), counter, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      document.getElementById(`${months[month]}`).getElementsByClassName("days_container")[0].innerHTML += `<div class="days"><div class="circle">${i}</div></div>`;
    }
    counter++;
  }

  let existingCalendarInfo = JSON.parse(localStorage.getItem("calendar_info"));
  if (existingCalendarInfo === null) {
    existingCalendarInfo = [];
  }

  existingCalendarInfo.forEach(function (dayofMonth) {
    let mon = dayofMonth.month;
    let day = dayofMonth.day;
    let mood = dayofMonth.mood;
    let monthIndex = months.indexOf(mon);
    let dayIndex = document.getElementById(`${months[monthIndex]}`).getElementsByClassName("days")[day - 1].getElementsByClassName("circle")[0];

    dayIndex.style.backgroundColor = mood;
  });
}

var moods = document.querySelectorAll('.moods_container');
moods.forEach((mood) => {
  mood.addEventListener('click', (e) => {
    let mood = e.target.parentElement.id;
    var currentButton = e.target.parentElement;
    let buttons = e.target.parentElement.parentElement.getElementsByTagName('button');

    Array.from(buttons).forEach((button) => {
      if (button.id !== currentButton.id) {
        button.style.backgroundColor = config.resetColor;
        let moodNumber = button.id.replace('mood_', '');
        if (button.getElementsByClassName('far')[0]) {
          button.getElementsByClassName('far')[0].style.color = config.moodColors[moodNumber - 1];
        }
      }
    });

    if (currentButton.style.backgroundColor === '') {
      let moodNumber = mood.replace('mood_', '');
      document.getElementById(e.target.parentElement.id).style.backgroundColor = config.moodColors[moodNumber - 1];
      e.target.style.color = 'white';
    } else {

      let moodNumber = mood.replace('mood_', '');
      document.getElementById(e.target.parentElement.id).style.removeProperty('background-color');
      e.target.style.color = config.moodColors[moodNumber - 1];
    }
  });
});

document.getElementById("calendar").addEventListener('click', (e) => {

  if (e.target.className === 'circle') {
    let moods = document.querySelectorAll('.moods_container button');

    var currentMood;
    moods.forEach((mood) => {
      let moodNumber = mood.id.replace('mood_', '');
      if (mood.style.backgroundColor !== 'rgb(255, 255, 255)') {
        currentMoodColor = mood.style.backgroundColor;
      }
    });

    e.target.style.backgroundColor = currentMoodColor;

    let calendarInfo = {
      day: e.target.innerHTML,
      month: e.target.parentElement.parentElement.parentElement.id,
      mood: e.target.style.backgroundColor,
    }

    let existingCalendarInfo = JSON.parse(localStorage.getItem("calendar_info"));
    if (existingCalendarInfo === null) {
      existingCalendarInfo = [];
    }

    existingCalendarInfo.push(calendarInfo);

    localStorage.setItem("calendar_info", JSON.stringify(existingCalendarInfo));

  }
});

buildCalendar();

document.getElementById("current_year").innerHTML = new Date().getFullYear();

const config = { shortMonths: true };

buildCalendar();

function buildCalendar() {
  let monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  let months = config.shortMonths ? monthsShort : monthsLong;
  var counter = 1;
  for (let month in months) {
    document.getElementById("calendar").innerHTML += `<div class="months" id="${months[month]}">${months[month]}</div>`;
    document.getElementById(`${months[month]}`).innerHTML += `<div class="days_container"></div>`;
    let currentDate = new Date();
    let daysInMonth = new Date(currentDate.getFullYear(), counter, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      document.getElementById(`${months[month]}`).getElementsByClassName("days_container")[0].innerHTML += `<div class="days"><div class="circle">${i}</div></div>`;
    }

    counter++;
  }
}

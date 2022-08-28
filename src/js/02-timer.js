import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    inputDatetimePicker: document.querySelector('#datetime-picker'),
  startTimerBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[ data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
}
const DELAY = 1000;
let intervalID = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date().getTime()) {
      refs.startTimerBtn.disabled = true
    return  Notify.failure('Please choose a date in the future');
    }
    refs.startTimerBtn.disabled = false
   
     intervalID = setInterval(() => {
        const timeStart = new Date()
        let difference = selectedDates[0] - timeStart
      const { days, hours, minutes, seconds } = convertMs(difference);
      refs.days.textContent = timeFormat(days);
      refs.hours.textContent = timeFormat(hours);
      refs.minutes.textContent = timeFormat(minutes);
       refs.seconds.textContent = timeFormat(seconds);
       refs.inputDatetimePicker.disabled = true
       if (difference < 1000) {
         clearTimeout(intervalID)
         
       }
     },DELAY)
    
    
    refs.startTimerBtn.addEventListener('click', timer)
  },
};
flatpickr("#datetime-picker", options);


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const timeFormat = value => String(value).padStart(2, 0);






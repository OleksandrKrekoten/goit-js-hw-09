import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    inputDatetimePicker: document.querySelector('#datetime-picker'),
    startTimerBtn: document.querySelector('[data-start]'),
}

const options = {
  enableTime: true,
  time_24hr: false,
  defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates) {
      Notify.failure('Please choose a date in the future');
    console.log(selectedDates[0]);
  },
};
flatpickr("#datetime-picker", options, {});

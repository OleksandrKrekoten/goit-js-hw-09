import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import swal from 'sweetalert';

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
      swal( "","Please choose a date in the future", "warning");
    console.log(selectedDates[0]);
  },
};
flatpickr("#datetime-picker", options, {});

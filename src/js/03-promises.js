import { Notify } from 'notiflix/build/notiflix-notify-aio'
const formRef = document.querySelector('.form')
formRef.addEventListener('submit', onSubmitForm)
////////////////////////////////////////////////////create promise
function createPromise(position, delay)  {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       if (Math.random() > 0.3) {
        resolve({ position, delay })
      } 
        reject({ position, delay })
      
    },delay)
  })
} 
////////////////////////////////////////submit callback
function onSubmitForm(event) {
  event.preventDefault();
  const formValue = new FormData(formRef);
  const resultObj = {};
  for (const [key, value] of formValue.entries()) {
    resultObj[key] = Number(value);
    
  }
   for (let position = 1; position <= resultObj.amount; position += 1){
     createPromise(position, resultObj.delay)
       .then(({ position, delay })=>{Notify.success(`Fulfilled promise ${position} in ${delay}ms`);})
       .catch(({ position, delay })=>{Notify.failure(`Rejected promise ${position} in ${delay}ms`);})
    resultObj.delay = resultObj.delay + resultObj.step;
   }
  formRef.reset()
  
}




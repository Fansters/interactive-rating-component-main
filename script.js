'use strict'

const formRatingNumber = [...document.querySelectorAll('.form__rating_number')];
const submitBtn = document.querySelector('.form__button');
const formRating = document.querySelector('.form__container');
const formThanks = document.querySelector('.form__container_thanks');
const ratingSelected = document.querySelector('.form__selected');
const numberSelected = document.querySelector('.number');

let number = 0;

formRatingNumber.forEach((num) => {
   num.onclick = () => {
      number = num.textContent;
      numberSelected.textContent = num.textContent;
      formRatingNumber.forEach((item) => {
         item.classList.remove('active');
      });
      num.classList.add('active');
   };
});
submitBtn.onclick = () => {
   if (number != 0) {
      formRating.classList.toggle('hidden');
      formThanks.classList.toggle('hidden');
   } else alert('Choose rating!')
};

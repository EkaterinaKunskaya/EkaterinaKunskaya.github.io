const sliderList = document.getElementsByClassName('slider-list')[0];

const sliderCircle1 = document.getElementsByClassName('slider-circle')[0];
const sliderCircle2 = document.getElementsByClassName('slider-circle')[1];
const sliderCircle3 = document.getElementsByClassName('slider-circle')[2];

const sliderImg1 = document.getElementsByClassName('slider-img')[0];
const sliderImg2 = document.getElementsByClassName('slider-img')[1];
const sliderImg3 = document.getElementsByClassName('slider-img')[2];

let start = 0;

const scrollImg1 = () => {
        start = 800;
        sliderList.style.marginLeft = start + 'px';
        sliderCircle1.classList.add('circle-active');
        sliderCircle2.classList.remove('circle-active');
        sliderCircle3.classList.remove('circle-active');

};

const scrollImg2 = () => {
        start = 0;
        sliderList.style.marginLeft = start + 'px';
        sliderCircle2.classList.add('circle-active');
        sliderCircle1.classList.remove('circle-active');
        sliderCircle3.classList.remove('circle-active');
};

const scrollImg3 = () => {
        start = -800;
        sliderList.style.marginLeft = start + 'px';
        sliderCircle3.classList.add('circle-active');
        sliderCircle2.classList.remove('circle-active');
        sliderCircle1.classList.remove('circle-active');
};

sliderCircle1.addEventListener('click', scrollImg1);
sliderCircle2.addEventListener('click', scrollImg2);
sliderCircle3.addEventListener('click', scrollImg3);

sliderImg1.addEventListener('click', scrollImg1);
sliderImg2.addEventListener('click', scrollImg2);
sliderImg3.addEventListener('click', scrollImg3);

////////////////////////////////////////////////////

// Получить модальный
const modal = document.getElementsByClassName('modal-login-pop-up')[0];

// Получить кнопку, которая открывает модальный
const btn = document.getElementsByClassName("header-btn-login")[0];

// Получить элемент <span>, который закрывает модальный
const span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
  modal.style.display = "block";
}



// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
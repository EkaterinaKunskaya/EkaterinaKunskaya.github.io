console.log(`Доброго времени суток)

Ваша оценка - 102.5 баллов.

Отзыв по пунктам ТЗ:
Частично выполненные пункты:
1) Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, 
который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте 
картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять 
  кнопку если слайдер достиг края).
Отзыв: Не реализован в мобильной версии.

2) логин попап соответствует верстке его закрытие происходит при клике вне попапа.
Отзыв: Кнопка Account в мобильной версии не работает.

Выполненные пункты:
1) На десктоп варианте при клике на урезанную картинку слева или справа изображение меняется 
по принципу карусели(например если нажать правую картинку та что была в центре на уезжает налево, 
  а та что была видна наполовину оказывается справа).
2) Анимации плавного перемещения для слайдера.
3) Логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный 
алерт с введенными данными (для реализации можно использовать тег).
4) Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно 
макету (То есть нажатие не закрывает модал а просто меняет его наполнение).
`);

/*BURGER MENU*/
const burgerMenuBtn = document.getElementsByClassName('burger-menu')[0];
const modalHeaderNav = document.getElementsByClassName('modal-header-nav-pop-up')[0];
const headerNavBurger = document.getElementsByClassName('header-nav-burger')[0];
const burgerClose = document.getElementsByClassName('burger-cross-close')[0];
const navListBurger = document.getElementsByClassName('nav-list-burger')[0];

const openBurger = () => {
  headerNavBurger.classList.add('burger-active');
  modalHeaderNav.style.display = "block";
}

const closeBurger = (event) => {
  if (event.target == modalHeaderNav || event.target == burgerClose || event.target.tagName === 'A') {
    modalHeaderNav.style.display = "none";
    headerNavBurger.classList.remove('burger-active');
  }
}

burgerMenuBtn.addEventListener('click', openBurger);
window.addEventListener('click', closeBurger);
burgerClose.addEventListener('click', closeBurger);
navListBurger.addEventListener('click', closeBurger);


/*SLIDER*/
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


/*MODAL*/
const modal = document.getElementsByClassName('modal-login-pop-up')[0];
const btnLogin = document.getElementsByClassName("header-btn-login")[0];
const span = document.getElementsByClassName('close')[0];
const btnSignIn = document.getElementsByClassName('btn-modal-sign-in')[0];
const emailInput = document.getElementsByClassName('e-mail')[0];
const passwordInput = document.getElementsByClassName('password')[0];
const modalContent = document.getElementsByClassName('modal-login-pop-up-content')[0];
const btnRegister = document.getElementsByClassName('register')[0];


// Когда пользователь нажимает на кнопку, откройте модальный
btnLogin.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const closeModal = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    location.reload();
  }
}

const sendInf = () => {
  let email = emailInput.value;
  let password = passwordInput.value;
  alert(`email: ${email}, password: ${password}`);
  modal.style.display = "none";
  emailInput.value = '';
  passwordInput.value = '';
}

const register = () => {
  modalContent.innerHTML = '';
  modalContent.classList.add('sign-up');
  modalContent.insertAdjacentHTML('afterbegin' , `
      <span class="modal-title-sign-up">Create account</span>
      <div class="modal-login-sign-up-email">
          <span>E-mail</span><br>
          <input type="text" class="e-mail-sign-up">
      </div>
      <div class="modal-login-sign-up-password">
          <span>Password</span><br>
          <input type="text" class="password-sign-up">
      </div>
      <button class="modal-btn-common btn-modal-sign-up">Sign Up</button>         
      <div class="line"></div>
      <span class="modal-register-link-sign-up">Already have an account? <a class="log-in">Log in</a></span>
  `);
}

btnSignIn.addEventListener('click', sendInf);
btnRegister.addEventListener('click', register);
window.addEventListener('click', closeModal);
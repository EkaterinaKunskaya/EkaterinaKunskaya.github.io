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
}

const register = () => {
  
  modalContent.innerHTML = '';
  modalContent.classList.add('sign-up');
  modalContent.insertAdjacentHTML('afterbegin' , `
      <span class="modal-title">Create account</span>
      <div class="modal-login-pop-up-email">
          <span>E-mail</span><br>
          <input type="text" class="e-mail">
      </div>
      <div class="modal-login-pop-up-password">
          <span>Password</span><br>
          <input type="text" class="password">
      </div>
      <button class="modal-btn-common btn-modal-sign-in">Sign Up</button>         
      <div class="line"></div>
      <span class="modal-register-link">Already have an account? <a class="register">Log in</a></span>
  `);
  
  console.log(html);
}

btnSignIn.addEventListener('click', sendInf);
btnRegister.addEventListener('click', register);
window.addEventListener('click', closeModal);
const $modeSwitcher = document.querySelector('.mode-switcher');
const $switchButton = document.querySelector('.switcher');
const $mode = document.querySelector('.mode');
const $modeIcon = document.querySelector('.mode-icon');


const $headerLinks = [...document.querySelectorAll('.link')];
const $header = document.querySelector('.header');
const options = [$mode, $modeIcon];
const bodyElements = [document.querySelector('h1'), document.querySelector('h3')];

document.body.classList.add("control");

function switchMode(mode) {
  if (mode === 'light') {
    $headerLinks.forEach((element) => {
      element.style.color = 'rgb(206, 83, 110)';
    });

    $header.style.backgroundColor = 'rgb(255, 255, 255)';
    document.body.style.backgroundColor = 'rgb(255, 255, 255)';

    options.forEach((el) => {
      el.style.color = 'rgb(0, 0, 0)';
    });
    
    bodyElements.forEach((el) => {
      el.style.color = 'rgb(72, 72, 72)';
    });
  } 
  
  else {
    $headerLinks.forEach((element) => {
      element.style.color = 'rgb(255, 255, 255)';
    });

    $header.style.backgroundColor = 'rgb(9, 9, 9)';
    document.body.style.backgroundColor = 'rgb(17, 17, 17)';

    options.forEach((el) => {
      el.style.color = 'rgb(255, 255, 255)';
    });

    bodyElements.forEach((el) => {
      el.style.color = 'rgb(255, 255, 255)';
    });
  }
}


$switchButton.addEventListener('click', () => {
  if ($switchButton.classList.contains('switch-animation_front-of')) {
    $switchButton.classList.remove('switch-animation_front-of');
    $switchButton.classList.add('switch-animation_back');
    $mode.textContent = 'Light Mode';
    $modeIcon.textContent = 'light_mode';
    $modeSwitcher.style.backgroundColor = 'rgb(215, 216, 216)';
    
    switchMode('light');
  }

  else {
    $switchButton.classList.remove('switch-animation_back');
    $switchButton.classList.add('switch-animation_front-of');
    $modeIcon.textContent = 'dark_mode';
    $mode.textContent = 'Dark Mode';
    $modeSwitcher.style.backgroundColor = 'rgb(150, 64, 251)';
    
    switchMode('dark');
  }
});
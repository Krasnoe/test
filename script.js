'use strict';

const activeBorder = () => {
  const variant = document.querySelectorAll('.variant'),
          button = document.querySelector('.main-button');

  button.disabled = true;
  for(let item of variant) {
    item.addEventListener('click', function() {
      if(this.classList.contains('active-border')){
        this.classList.remove('active-border');
        button.disabled = true;
      } else {
        for(let elem of variant){
          elem.classList.remove('active-border');
          button.disabled = true;
        }
        this.classList.add('active-border');
        button.disabled = false;
      }
    });
  }
}
activeBorder();


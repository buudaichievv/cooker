// Увеличение и уменьшение грамма при заказе
const counter = function () {
    const btns = document.querySelectorAll('.count_btn');
  
  
    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.count_value');
        const currentValue = +inp.value;
        let newValue;
  
        if (direction === 'plus') {
          newValue = currentValue + 50 ;
          
        } else {
          newValue = currentValue - 50 > 0 ? currentValue - 50 : 0;
        }
  
        inp.value = newValue;
      })
    
    })
  
  }
  
  counter();
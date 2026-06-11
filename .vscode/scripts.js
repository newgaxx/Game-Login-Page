const prevbutton = document.getElementById('volta');
const nextbutton = document.getElementById('Proximo');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.ponto');
const number = document.querySelector('.numeros');
const list = document.querySelector('.list');




let active = 0;
const totalItems = items.length;
let timer;









function update(direction) {
    document.querySelector('.item.ativo').classList.remove('ativo');
    document.querySelector('.ponto.ativo').classList.remove('ativo');
    /* muda de item ao aperta na seta */ 
    if (direction > 0) {
        active = active + 1
        if (active === totalItems) {
            active = 0
        }
    } else if (direction < 0) {
        active = active - 1;
        if (active < 0) {
            active = totalItems - 1;
        }
    }

    items[active].classList.add('ativo');
    dots[active].classList.add('ativo');

        /*  if (direction > 0) {
              active = (active + 1) % totalItems;
          } else {
              active = (active - 1 + totalItems) % totalItems;
          }
      
          items[active].classList.add('ativo');
          dots[active].classList.add('ativo');*/
    }
    number.textContent = String(active + 1).padStart(2, '0');

 

clearInterval(timer);
timer = setInterval(() => {
    update(1);
}, 5000);





    prevbutton.addEventListener('click', () => {
        update(-1);
    })

    nextbutton.addEventListener('click', () => {
        update(1);
    })

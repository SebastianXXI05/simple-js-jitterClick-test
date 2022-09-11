const btnEmpezar = document.querySelector('#btn');
const tiempo = document.querySelector('#tiempo');
const areaClick = document.querySelector('.area-click');

let number = 1;

function contador() {
  const numeroClick = document.querySelector('.numero-click');
  number++;
  numeroClick.textContent = number;
}

function cronometro(fn) {
  let contador = 10;
  const contar = () => {
    contador--;
    tiempo.textContent = contador;
    if(contador <= 0) {
      clearInterval(cont);
      tiempo.style.display = 'none';
      btnEmpezar.style.display = 'block';
      number = 0;
      fn();
    }
  }

  const cont = setInterval(contar, 1000);
}

function empezar() {
  btnEmpezar.style.display = 'none';
  areaClick.addEventListener('click', contador);
  
  cronometro(() => areaClick.removeEventListener('click', contador));
  tiempo.style.display = 'block';
}


btnEmpezar.addEventListener('click', empezar);
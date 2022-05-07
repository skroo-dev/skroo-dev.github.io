setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none'
}, 2650);

const btnLeft = document.getElementById('prevBtn');
const btnRight = document.getElementById('nextBtn')
btnLeft.addEventListener('click', function handleClick() {
  btnLeft.classList.add('hidden');
  btnRight.classList.remove('hidden');
});
btnRight.addEventListener('click', function handleClick() {
  btnRight.classList.add('hidden');
  btnLeft.classList.remove('hidden');
});
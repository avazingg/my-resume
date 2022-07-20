
import './js/console';
import './js/other'


window.onload = function () {
  console.log('Hello woreld!')
  addTagsClickHandler();
}

const addTagsClickHandler = () => {
  document.querySelector('.carousel__container').addEventListener('click', (e) => {
    console.log(e);
    console.log('dude')
  })
}
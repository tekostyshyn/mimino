var openBtn = document.getElementsByClassName('open');
var closeBtn = document.getElementsByClassName('close');
Array.from(closeBtn, closeButton => {
  closeButton.addEventListener('click', el => {
    let btnId = el.target.getAttribute('data-id');
    document.getElementById(btnId).classList.add('is-hidden');
    document.body.classList.remove('modal-open');
  });
});
Array.from(openBtn, openButton => {
  openButton.addEventListener('click', e => {
    let modalId = e.target.getAttribute('data-id');
    document.getElementById(modalId).classList.remove('is-hidden');
    document.body.classList.add('modal-open');
  });
});

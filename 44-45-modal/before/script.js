const modal       = document.querySelector('#modal');
const openButton  = document.querySelector('#open-modal-btn');
const closeButton = document.querySelector('#close-modal-btn');
const overlay     = document.querySelector('#overlay');

openButton.addEventListener('click', e => {
  modal.classList.add('open');
  overlay.classList.add('open');
});

closeButton.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.remove('open');
  overlay.classList.remove('open');
}
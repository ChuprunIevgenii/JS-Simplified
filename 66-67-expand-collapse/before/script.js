const cards = Array.from(document.querySelectorAll('.card'));
let cardId = 0;

cards.forEach(card => {
    card.dataset.cardId = cardId++;
    const expandButton = card.querySelector('.expand-button');
    const cardBody     = card.querySelector('.card-body');
    const defaultStatus = JSON.parse(localStorage.getItem(card.dataset.cardId)) || {};

    if(defaultStatus.isOpened) {
        cardBody.classList.add('show');
    }
    
    expandButton.addEventListener('click', () => {
        if(cardBody.classList.contains('show')) {
            cardBody.classList.remove('show');
            expandButton.innerText = 'Expand';
            localStorage.removeItem(card.dataset.cardId)
        } else {
            cardBody.classList.add('show');
            expandButton.innerText = 'Collapse';
            localStorage.setItem(card.dataset.cardId, JSON.stringify({
                id: card.dataset.cardId,
                isOpened: true
            }))
        }
    });
});

// document.addEventListener('click', e => {
//     if(!e.target.matches('.expand-button')) return;
//     const expandButton = e.target;
//     const card = expandButton.closest('.card');
//     const cardBody = card.querySelector('.card-body');
//     cardBody.classList.toggle('show');
//     expandButton.innerText = expandButton.innerText === 'Collapsed' ? 'Expand' : 'Collapsed';
// });





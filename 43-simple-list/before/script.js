const button = document.querySelector('button[type="submit"]');
const list = document.querySelector('#list');
const inputElement = document.querySelector('#item-input');

button.addEventListener('click', e => {
    e.preventDefault();
    
    const item = document.createElement('div');
    
    item.className = 'list-item';
    item.innerText = inputElement.value;
    
    sinputElement.value = '';
    
    list.appendChild(item);

    item.addEventListener('click', () => {
        item.remove();
    })
});
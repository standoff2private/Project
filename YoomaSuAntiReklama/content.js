// Функция для удаления всех элементов с указанным классом
function removeElementByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].remove();
    }
}

// Скрываем элементы с указанными классами с помощью CSS
const style = document.createElement('style');
style.textContent = `
    .sc-dmyCSP.iZiqOx {
        display: none !important; /* Скрываем элемент */
    }

    .container.svelte-1qe9gqs {
        display: none !important; /* Скрываем элемент */
    }
`;
document.head.appendChild(style);

// Удаляем элементы по классам из DOM
removeElementByClass('sc-dmyCSP');
removeElementByClass('iZiqOx');
removeElementByClass('container');
removeElementByClass('svelte-1qe9gqs');
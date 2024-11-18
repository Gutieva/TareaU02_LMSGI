const imagen = document.querySelector('.thumbnail');
const modal = document.createElement('div');
const modalContenido = document.createElement('img');

modal.classList.add('modal');
modalContenido.classList.add('modal-contenido');
modalContenido.src = imagen.src;

modal.appendChild(modalContenido);
document.body.appendChild(modal);

imagen.addEventListener('click', () => {
    modal.style.display = 'block';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


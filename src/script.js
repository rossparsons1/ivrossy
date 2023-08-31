const certificates = document.querySelectorAll('.certificates_pic');
const popup = document.querySelector('.popup_elems');
const pic = popup.querySelector('.popup_elem');
const close_button = popup.querySelector('.close_button');

for (let i = 0; i < certificates.length; i++) {
    certificates[i].addEventListener('click', show_certificates)
}

close_button.addEventListener('click', close_popup);

function show_certificates(){
    if (!popup.classList.contains('active')){
        popup.classList.add('active');
        pic.style.backgroundImage = `url(${this.src})`;
    }
}

function close_popup(){
    popup.classList.remove('active');
}

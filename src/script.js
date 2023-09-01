const html = document.querySelector('html')
const certificates = document.querySelectorAll('.certificates_pic');
const cer_popup = document.querySelector('.cer');
const pic = cer_popup.querySelector('.popup_elem');
const cer_close = cer_popup.querySelector('.cer_close');

const price_button = document.querySelector('.price_list');
const price_popup = document.querySelector('.text_popup');
const text_close = price_popup.querySelector('.text_close');

price_button.addEventListener('click', open_popup)
text_close.addEventListener('click', close_popup);
cer_close.addEventListener('click', close_popup);

for (let i = 0; i < certificates.length; i++) {
    certificates[i].addEventListener('click', show_certificates);
}

function open_popup(){
    this.parentNode.parentNode.lastElementChild.classList.add('active_popup');
    html.style.overflowY = 'hidden';
}

function close_popup(){
    this.parentNode.parentNode.lastElementChild.classList.remove('active_popup');
    html.style.overflowY = 'scroll';
}

function show_certificates(){
    if (!cer_popup.classList.contains('active_popup')){
        pic.style.backgroundImage = `url(${this.src})`;
        this.parentNode.parentNode.lastElementChild.classList.add('active_popup');
    }
}

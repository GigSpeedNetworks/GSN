// modals
var modal = document.getElementById('modal');
var modalTwo = document.getElementById('modalTwo');
var quotesBtn = document.getElementById('quotesModalbtn');
var careerBtn = document.getElementById('careerModalBtn');
var closeBtn = document.getElementById('closebtn');
var closeBtnTwo = document.getElementById('closebtnTwo');
var requestForm = document.getElementById('modalQuotes');
var careerForm = document.getElementById('careerModalContent');

function openModal(evt){   
    if(evt.target == quotesBtn){
        modal.style.display = 'block';
    }
    else if(evt.target == careerBtn){
        modalTwo.style.display = 'block';
    }    
}
function closeModal(){
   if(modal.style.display == 'block'){
    modal.style.display = 'none';
   }
   else if(modalTwo.style.display == 'block'){
    modalTwo.style.display = 'none';
   }
}
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
    else if(e.target == modalTwo){
        modalTwo.style.display = 'none';}
}
quotesBtn.addEventListener('click', openModal);
careerBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
closeBtnTwo.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
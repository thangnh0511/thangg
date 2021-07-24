const profileBtn = document.querySelector('.js-profile-btn')
const modalNotify = document.querySelector('.js-modalNotify')
const agreeBtn = document.querySelector('.js-agree');
const closeBtn = document.querySelector('.js-close');


// Hiển thị thông báo (modal-notify)
function showProfileNotify () {
    modalNotify.classList.remove('notify-hidden');
}

//Close notification and get out
function hideProfileNotify () {
    modalNotify.classList.add('notify-hidden');
}


profileBtn.addEventListener('click', showProfileNotify);
closeBtn.addEventListener('click', hideProfileNotify);



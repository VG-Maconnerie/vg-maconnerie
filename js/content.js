const videos = document.querySelectorAll('.video-card video');

const modal = document.getElementById('videoModal');

const modalVideo = document.getElementById('modalVideo');

const closeBtn = document.querySelector('.close-video');

/* OUVERTURE VIDEO */

videos.forEach(video => {

    video.addEventListener('click', () => {

        modal.classList.add('active');

        modalVideo.src = video.src;

        modalVideo.play();

    });

});

/* FERMETURE CROIX */

closeBtn.addEventListener('click', () => {

    modal.classList.remove('active');

    modalVideo.pause();

    modalVideo.src = "";

});

/* FERMETURE FOND */

modal.addEventListener('click', (e) => {

    if(e.target === modal){

        modal.classList.remove('active');

        modalVideo.pause();

        modalVideo.src = "";

    }

});
document.addEventListener('DOMContentLoaded', function () {
    const btnForgive = document.getElementById('btnForgive');
    const responseDiv = document.getElementById('response');
    document.getElementById("playMusicBtn").addEventListener("click", function () {
     const music = document.getElementById("loveMusic");
    if (music.paused) {
        music.play();
        this.textContent = "⏸️ Pause Musik";
    }  else {
        music.pause();
        this.textContent = "🎵 Putar Musik Cinta";
     }
    });


    // Tombol minta maaf
    btnForgive.addEventListener('click', function () {
        for (let i = 0; i < 20; i++) {
            createHeart();
        }

        responseDiv.innerHTML = `
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Terima kasih sayang!</h4>
                <p>Aku berjanji akan menjadi lebih baik untukmu. Aku sayang kamu lebih dari apapun!</p>
            </div>
        `;

        btnForgive.textContent = 'Kamu yang terbaik!';
        btnForgive.style.backgroundColor = '#28a745';
    });

    // Fungsi membuat hati jatuh
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.color = `hsl(${Math.random() * 60 + 320}, 100%, 70%)`;
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-50px';
        heart.style.opacity = '0.8';
        heart.style.zIndex = '1000';
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

        document.body.appendChild(heart);

        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fall {
                to {
                    transform: translateY(${window.innerHeight + 50}px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            heart.remove();
            style.remove();
        }, 5000);
    }

    // Balon cinta naik
    function createBalloon() {
        const container = document.getElementById('balloonContainer');
        const balloon = document.createElement('div');
        balloon.className = 'balloon heart-glow';
        balloon.style.left = Math.random() * (window.innerWidth - 100) + 'px';
        balloon.innerHTML = '🎈';

        container.appendChild(balloon);

        setTimeout(() => balloon.remove(), 6000);
    }

    setInterval(createBalloon, 800);

    // Efek mengetik kalimat romantis
    const romanticLines = [
        "Aku tahu aku salah...",
        "Tapi satu hal yang pasti...",
        "Hatiku tetap memilihmu, selalu.",
        "Maafkan aku, ya sayang? ❤"
    ];

    let messageIndex = 0;
    const msgElement = document.getElementById('romanticMessage');

    function showNextLine() {
        msgElement.textContent = '';
        msgElement.classList.remove('typing-romance');
        void msgElement.offsetWidth; // trigger ulang animation
        msgElement.textContent = romanticLines[messageIndex];
        msgElement.classList.add('typing-romance');

        messageIndex++;
        if (messageIndex < romanticLines.length) {
            setTimeout(showNextLine, 4000);
        }
    }

    setTimeout(showNextLine, 1000);
    document.querySelector('.floating').addEventListener('click', function () {
    document.getElementById('lovePopup').classList.remove('d-none');
});

// Tombol tutup: sembunyikan popup
function closePopup() {
    document.getElementById('lovePopup').classList.add('d-none');
}

});

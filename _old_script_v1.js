// Pangkalan data mesej custom yang anda berikan tadi
const messagesData = {
    sad: {
        title: "Open When You're Sad",
        text: "Sayangku, janganlah sedih. Saya tak nak awak sedih-sedih, saya tak nak awak nangis muka monyok ni. Jangan risau saya kan ada, saya kan selalu ada dengan awak. Walaupun saya jauh, tapi saya dekat dengan hati awak."
    },
    miss: {
        title: "Open When You Miss Me",
        text: "Rindu saya ke tu? Heheh saya pun sama, saya sentiasa merindukan awak. Kalau rindu sangat tengoklah gambar kita. I mean bukan gambar yang latest-latest kita, tapi gambar first kita ambil dekat mall Kuantan tu. Nanti kita sama-sama free kita luang waktu bersama-sama yee. Love you sayang."
    }
    // Anda boleh tambah kategori lain di sini menggunakan format yang sama!
};

function openEnvelope(id) {
    const data = messagesData[id];
    if (!data) return;

    // Paparkan data ke dalam modal
    document.getElementById('modalCategoryTitle').innerText = data.title;
    document.getElementById('modalText').innerText = data.text;
    
    // Tunjukkan kotak mesej
    document.getElementById('messageModal').style.display = 'flex';

    // Tukar status sampul jadi 'Sudah Dibuka' dan simpan dalam ingatan pelayar (localStorage)
    const envelopeElement = document.querySelector(`[data-id="${id}"]`);
    envelopeElement.classList.add('opened');
    document.getElementById(`badge-${id}`).innerText = 'Sudah Dibuka';
    
    localStorage.setItem(`envelope_${id}`, 'opened');
}

function closeModal() {
    document.getElementById('messageModal').style.display = 'none';
}

// Semak status sampul yang dah dibuka sebelumnya bila app dimuat semula
window.onload = function() {
    for (let id in messagesData) {
        if (localStorage.getItem(`envelope_${id}`) === 'opened') {
            const envelopeElement = document.querySelector(`[data-id="${id}"]`);
            if (envelopeElement) {
                envelopeElement.classList.add('opened');
                document.getElementById(`badge-${id}`).innerText = 'Sudah Dibuka';
            }
        }
    }
};
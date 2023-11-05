// Mengecek apakah ada komentar yang disimpan di localStorage
let allComments = localStorage.getItem('comments') ? localStorage.getItem('comments') : '';
let btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.addEventListener("click", function(event) {
        event.preventDefault(); 
    });
});
document.getElementById('comment').innerHTML = allComments;

document.getElementById('kirim').addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah perilaku default dari elemen yang mengakibatkan refresh halaman.
    const nama = document.getElementById('nama').value;
    const pesan = document.getElementById('pesan').value;
    const kehadiran = document.getElementById('kehadiran');
    const selectedOption = kehadiran.options[kehadiran.selectedIndex].text;

    const today = new Date();
    const date = today.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const time = today.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit'
    });
    const dateTime = `${date} at ${time}`;

    // Membuat komentar baru
    let newComment = `
        <div class="mb-3">
            <div class="d-flex"><img
                    src="https://ui-avatars.com/api/?background=random&amp;color=random&amp;name=${nama}"
                    alt="${nama}" class="avatar rounded-circle" style="height: 30px; width: 30px;">
                <div class="ml-2 text-left">
                    <p class="mb-0"><b>${nama}</b><span class="badge ml-1 badge-success">${selectedOption}</span></p>
                    <p class="mb-0">${pesan}</p> <small>${dateTime}</small>
                </div>
            </div>
        </div>
    `;

    allComments = newComment + allComments; // Menambahkan komentar baru di bagian atas
    document.getElementById('comment').innerHTML = allComments; // Menampilkan semua komentar

    // Menyimpan komentar ke localStorage
    localStorage.setItem('comments', allComments);
});


function salinTeks1() {
    var teks = document.getElementById("norek-salin1").innerText;
    navigator.clipboard.writeText(teks);
    alert("Teks telah disalin: " + teks);
}
function salinTeks2() {
    var teks = document.getElementById("norek-salin2").innerText;
    navigator.clipboard.writeText(teks);
    alert("Teks telah disalin: " + teks);
}
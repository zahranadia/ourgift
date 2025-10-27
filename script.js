// Ambil elemen-elemen dari DOM
let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

// Fungsi untuk membuka/menutup Navbar
menuBtn.onclick = () => {
    // Menambahkan atau menghapus class 'active' pada navbar
    // Class 'active' ini yang diatur di CSS untuk menampilkan menu
    navbar.classList.toggle('active');
}

// Fungsi untuk menutup Navbar saat scroll
// Ini memastikan menu tertutup jika pengguna sudah menggulir halaman
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Catatan Tambahan (Opsional):
// Jika Anda memiliki tombol keranjang atau tombol pencarian di header:
// let cartBtn = document.querySelector('#cart-btn');
// cartBtn.onclick = () => {
//    // Logika untuk menampilkan keranjang belanja di sini
// }

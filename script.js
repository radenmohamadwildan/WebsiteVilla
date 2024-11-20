// Daftar gambar untuk slide
const images = document.querySelectorAll('.explore-hero-item img');

// Indeks gambar yang saat ini ditampilkan
let currentImageIndex = 0;

// Interval untuk slideshow otomatis
let autoSlideInterval;

// Menampilkan gambar pertama saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
  showImage(currentImageIndex);
  
  // Mulai slideshow otomatis setelah 3 detik
  startAutoSlide();
});

// Fungsi untuk menampilkan gambar berdasarkan indeks
function showImage(index) {
  // Menyembunyikan semua gambar
  images.forEach((img) => {
    img.classList.remove('active');
  });

  // Menampilkan gambar yang sesuai dengan indeks
  if (images[index]) {
    images[index].classList.add('active');
  }
}

// Fungsi untuk mengubah gambar berdasarkan arah (left atau right)
function changeImage(direction) {
  // Hentikan slideshow otomatis saat tombol panah diklik
  clearInterval(autoSlideInterval);

  // Perbarui indeks gambar berdasarkan tombol panah
  if (direction === 'left') {
    // Jika berada di gambar pertama, kembali ke gambar terakhir
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
  } else if (direction === 'right') {
    // Jika berada di gambar terakhir, kembali ke gambar pertama
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
  }

  // Ganti gambar utama
  showImage(currentImageIndex);

  // Mulai slideshow otomatis lagi setelah 3 detik
  startAutoSlide();
}

// Fungsi untuk memulai slideshow otomatis
function startAutoSlide() {
  // Set interval untuk mengganti gambar setiap 3 detik
  autoSlideInterval = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }, 3000); // 3000ms = 3 detik
}

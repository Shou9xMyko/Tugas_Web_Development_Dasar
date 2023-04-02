for (;;) { ... } : for loop tanpa kondisi penghenti, sehingga akan terus berjalan tanpa henti sampai ada pernyataan break yang dieksekusi.

let inputUser = prompt("Sebutkan kepanjangan dari nama IB ?"); : Menggunakan prompt() untuk meminta input dari user dalam bentuk string dan menyimpannya ke dalam variabel inputUser.

if (inputUser == "Impact Byte" || inputUser == "impact byte") { ... } : Mengecek apakah nilai yang dimasukkan oleh user ke dalam variabel inputUser sama dengan string "Impact Byte" atau "impact byte" menggunakan operator pembanding ==. Jika benar, maka blok kode di dalam if statement akan dieksekusi.

alert("Selamat jawaban kamu benar"); : Menampilkan pesan pada browser menggunakan alert() yang menyatakan bahwa jawaban user benar.

break; : Menghentikan for loop sehingga program akan keluar dari perulangan.

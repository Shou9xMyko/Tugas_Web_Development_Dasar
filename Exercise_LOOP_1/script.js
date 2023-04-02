// EXERCISE LOOP 1

// ambil elemen p sebagai target untuk menambahkan daftar user
var userList = document.getElementById("user-list");

// buat variabel untuk menampung daftar user
var userText = "";

// lakukan for loop untuk menambahkan setiap user ke dalam daftar
for (var i = 1; i <= 100; i++) {
  // tambahkan teks 'User ke - i' pada variabel userText
  userText += "User ke - " + i + "<br>";
}

// tambahkan variabel userText ke dalam elemen p
userList.innerHTML = userText;

let jumlahKlik = 0;

for (;;) {
  let konfirmasi = confirm("Apakah anda mau mengulang?");

  if (konfirmasi) {
    jumlahKlik++;
  } else {
    alert(`Perulangan sudah dilakukan sebanyak ${jumlahKlik} kali`);
    break;
  }
}

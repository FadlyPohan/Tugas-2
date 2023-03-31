// 1. Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100. Lakukan For Loop Pada JavaScript
// for (let i = 1; i <= 100; i++) {
//   console.log('User ke - ' + i + '<br>');
// }

// 2. Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali
//   let nilai = 0;

//   for (let i = 1; i <= 10; i++) {
//     nilai += 2;
//     console.log('Nilai pada pengulangan ke-' + i + ' = ' + nilai + '<br>');
//   }

// 3.  Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.

//   for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//       consol.log(i + ' adalah bilangan genap' + '<br>');
//     } else {
//      consol.log(i + ' adalah bilangan ganjil' + '<br>');
//     }
//   }

// 4. Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();

// let lawan = 0;
// let ulang = true;

// while (ulang) {
//   let confirmBox = confirm('Apakah anda mau mengulang?');
//   if (confirmBox == true) {
//     lawan++;
//   } else {
//     ulang = false;
//     alert('Perulangan sudah dilakukan sebanyak ' + lawan + ' kali');
//   }
// }

//5. Buat sebuah program kuis.

let correctAnswer = 'Impact Byte';
let userAnswer = '';

while (userAnswer !== correctAnswer) {
  userAnswer = prompt('Sebutkan kepanjangan dari nama IB (Impact Byte)?');
  if (userAnswer === correctAnswer) {
    alert('Selamat jawaban kamu benar!');
  } else {
    alert('Maaf, jawaban kamu salah. Silakan coba lagi.');
  }
}

# Tugas 2

pada tugas ini kami mengerjakan perulangan atau looping.

## Question

1. Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
   Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
   Lakukan FOR LOOP pada Javascript.

## Answer

    for (let i = 1; i <= 100; i++) {
    document.write('User ke - ' + i + '<br>');
    }

penjelasan :
pada codingan diatas menggunakan FOR LOOP yang menampilkan teks "User ke 1..ke user -100" i merupakan iterasi.
jadi, disini saya deklarasikan terlebih dahulu variable i = 1; i lebih kecil samadengan 100; dan menambahkan nilai variable i sebanyak 100 kali

sedangkan fungsi dari <br> ialah membuat untuk paragraph atau baris baru

kenapa saya menggunakan manupulasi DOM document.write untuk mempermudah eksekusi pada file Javascript didalam HTML, karena waktu saya menggunakan console.log tidak bisa dieksekusi karena saya belum tahu bagaimana caranya.
manipulasi DOM saya tahu dari materi yang ada di skilvul

## Screenshots no. 1

![App Screenshot](<./img/Screenshot%20(91).png>)

## Question

2. Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali

## Answer

let nilai = 0;
for (let i = 1; i <= 10; i++) {
nilai += 2;
document.write('Nilai pada pengulangan ke-' + i + ' = ' + nilai + '<br>');
}

penjelasan:
pada codingan diatas akan menampilkan Nilai pada pengulngan nilai variable yang telah ditentukan dan penambahan nilai sebanyak 10 kali

## Screenshots no. 2

![App Screenshot](<./img/Screenshot%20(93).png>)

## Question

3.  Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.

## Answer

for (let i = 0; i <= 20; i++) {
if (i % 2 == 0) {
document.write(i + ' adalah bilangan genap' + '<br>');
} else {
document.write(i + ' adalah bilangan ganjil' + '<br>');
}
}

penjelasan:
pada codingan diatas akan menampilkan Nilai, jika kita melakukan perulangan sebanyak 20 kali dan menentukan nilai ganjil dan genap

## Screenshots no. 3

![App Screenshot](<./img/Screenshot%20(94).png>)

## Question

4. Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();

## Answer

let lawan = 0;
let ulang = true;

while (ulang) {
let confirmBox = confirm('Apakah anda mau mengulang?');
if (confirmBox == true) {
lawan++;
} else {
ulang = false;
alert('Perulangan sudah dilakukan sebanyak ' + lawan + ' kali');
}
}

penjelasan:
pada codingan diatas akan menampilkan pop up, saya menggunakan variable lawan dan ulang jika user akan mengklik OK maka program akan menampilkan pop up yang sama dan jika user mengklik cancel maka pop up akan berhenti dan menampilkan yang sudah dilakukan berapa kali di pop up.

## Screenshots no. 4

![App Screenshot](<./img/Screenshot%20(95).png>)

## Screenshots no. 4 setelah di cancel

![App Screenshot](<./img/Screenshot%20(96).png>)

5. Buat sebuah program kuis.

## Answer

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
penjelasan:
pada codingan diatas akan menampilkan sebuah game kuis seperti pop up

# Screenshots no. 5

![App Screenshot](<./img/Screenshot%20(97).png>)

## Screenshots no. 4 ketika memasukan jawaban benar

![App Screenshot](<./img/Screenshot%20(99).png>)

![App Screenshot](<./img/Screenshot%20(98).png>)

## Screenshots no. 4 ketika memasukan jawaban salah

![App Screenshot](<./img/Screenshot%20(100).png>)

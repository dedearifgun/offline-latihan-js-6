// import library prompt-sync
const prompt = require("prompt-sync")({sigint: true});

// Arrow function untuk operasi
const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali   = (a, b) => a * b;
const bagi   = (a, b) => (b === 0 ? "Error: tidak bisa dibagi 0" : a / b);

// Input angka dan operator
let angka1 = parseFloat(prompt("Masukkan angka pertama: "));
let angka2 = parseFloat(prompt("Masukkan angka kedua: "));
let operator = prompt("Pilih operator (+, -, *, /): ");

// Hitung hasil
let hasil;
switch (operator) {
  case "+": hasil = tambah(angka1, angka2); break;
  case "-": hasil = kurang(angka1, angka2); break;
  case "*": hasil = kali(angka1, angka2); break;
  case "/": hasil = bagi(angka1, angka2); break;
  default : hasil = "Operator tidak dikenali!";
}

// Tampilkan hasil di terminal
console.log(`Hasil dari ${angka1} ${operator} ${angka2} = ${hasil}`);

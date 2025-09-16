// import prompt-sync
const prompt = require("prompt-sync")();

// Arrow function untuk menghitung luas lingkaran
const luasLingkaran = (r) => Math.PI * r * r;

// Input jari-jari dari user
let jari = prompt("Masukkan jari-jari lingkaran: ");
jari = Number(jari); // ubah string jadi angka

// Hitung luas
let luas = luasLingkaran(jari);

// Tampilkan hasil
console.log(`Luas lingkaran dengan jari-jari ${jari} adalah ${luas}`);

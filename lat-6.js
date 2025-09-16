
// Arrow functions operasi
const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali   = (a, b) => a * b;
const bagi   = (a, b) => b !== 0 ? a / b : "Tidak bisa dibagi 0";

function hitung() {
  const a = parseFloat(document.getElementById("angka1").value);
  const b = parseFloat(document.getElementById("angka2").value);
  const op = document.getElementById("operator").value;

  let hasil;
  switch (op) {
    case "+": hasil = tambah(a, b); break;
    case "-": hasil = kurang(a, b); break;
    case "*": hasil = kali(a, b); break;
    case "/": hasil = bagi(a, b); break;
    default: hasil = "Operator tidak valid";
  }

  document.getElementById("hasil").textContent = `Hasil: ${hasil}`;
}

// pastikan tombol terhubung
document.getElementById("btnHitung").addEventListener("click", hitung);

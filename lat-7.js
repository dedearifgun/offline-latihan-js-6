document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnKonversi");
  const hasilDiv = document.getElementById("hasil");

  btn.addEventListener("click", () => {
    const c = parseFloat(document.getElementById("inputC").value);
    const tujuan = document.getElementById("konversiKe").value;

    if (isNaN(c)) {
      hasilDiv.textContent = "⚠️ Masukkan angka Celsius yang valid!";
      return;
    }

    let hasil = "";

    switch (tujuan) {
      case "f":
        hasil = `${c} °C = ${(c * 9/5 + 32).toFixed(2)} °F`;
        break;
      case "k":
        hasil = `${c} °C = ${(c + 273.15).toFixed(2)} K`;
        break;
      case "r":
        hasil = `${c} °C = ${(c * 4/5).toFixed(2)} °R`;
        break;
      default:
        hasil = "Pilih konversi yang benar!";
    }

    hasilDiv.textContent = hasil;
  });
});

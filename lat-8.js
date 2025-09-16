document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnBMI");
  const hasilDiv = document.getElementById("hasil");

  btn.addEventListener("click", () => {
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggiCm = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(berat) || isNaN(tinggiCm) || berat <= 0 || tinggiCm <= 0) {
      hasilDiv.textContent = "⚠️ Masukkan angka yang valid!";
      return;
    }

    const tinggiM = tinggiCm / 100; // konversi cm ke meter
    const bmi = berat / (tinggiM * tinggiM);

    let kategori = "";
    if (bmi < 18.5) {
      kategori = "Kurus";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      kategori = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      kategori = "Overweight";
    } else {
      kategori = "Obesitas";
    }

    hasilDiv.innerHTML = `
      <p>BMI Anda: <b>${bmi.toFixed(2)}</b></p>
      <p>Kategori: <b>${kategori}</b></p>
    `;
  });
});

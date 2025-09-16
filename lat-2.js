const user = {
  name: 'Budi',
  sayHi: function() {
    console.log(`Halo, nama saya ${this.name}`); // 'this' merujuk ke 'user'

    // Fungsi anonim ini memiliki 'this' sendiri
    setTimeout(function() {
      // Di sini, 'this' tidak lagi merujuk ke 'user'.
      // Di browser, 'this' akan merujuk ke window.
      console.log(`Setelah 1 detik, nama saya ${this.name}`);
    }, 1000);
  }
};

user.sayHi();

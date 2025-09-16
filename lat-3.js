const user = {
  name: 'Budi',
  sayHi: function() {
    console.log(`Halo, nama saya ${this.name}`);

    // Arrow function ini mewarisi 'this' dari sayHi
    setTimeout(() => {
      // Di sini, 'this' tetap merujuk ke objek 'user'
      console.log(`Setelah 1 detik, nama saya ${this.name}`);
    }, 1000);
  }
};

user.sayHi();

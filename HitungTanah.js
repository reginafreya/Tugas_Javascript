let panjang = 20.5;
let lebar = 30;
let hargaPerMeter = 1500000;
let ppn = 0.15; 

// Mengitung luas tanah
let luasTanah = panjang * lebar;

// Menghitung harga tanah sebelum PPN
let hargaTanah = luasTanah * hargaPerMeter;

// Menghitung total PPN
let totalPPN = hargaTanah * ppn;

// Menghitung total biaya yang harus dibayarkan
let totalBiaya = hargaTanah + totalPPN;

// hasil
console.log("Luas Tanah: " + luasTanah + " meter persegi");
console.log("Harga Tanah: Rp " + hargaTanah);
console.log("Total PPN: Rp " + totalPPN);
console.log("Total Biaya yang Harus Dibayarkan: Rp " + totalBiaya);

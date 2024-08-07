let barang = [
    {nama: "Beras", harga: 10000, jumlah: 5},
    {nama: "Gula", harga: 14000, jumlah: 5},
    {nama: "Telur", harga: 20000, jumlah: 2},
    {nama: "Minyak Goreng", harga: 9000, jumlah: 10}
]
 
let totalBelanja = 0;
for (let i = 0; i < barang.length; i++) {
    totalBelanja += barang[i].harga * barang[i].jumlah;
} 

console.log("Total Belanja Bu Astuti: Rp " + totalBelanja);

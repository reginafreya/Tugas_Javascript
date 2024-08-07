// Lingkaran
class Lingkaran {
    constructor(jari_jari) {
        this.jari_jari = jari_jari;
    }

    luas() {
        return Math.PI * this.jari_jari ** 2;
    }

    keliling() {
        return 2 * Math.PI * this.jari_jari;
    }
}

// Tabung
class Tabung extends Lingkaran {
    constructor(jari_jari, tinggi) {
        super(jari_jari);
        this.tinggi = tinggi;
    }

    volume() {
        return this.luas() * this.tinggi;
    }

    luasPermukaan() {
        return 2 * this.luas() + this.keliling() * this.tinggi;
    }

    luasSelimut() {
        return this.keliling() * this.tinggi;
    }
}

// Kerucut
class Kerucut extends Lingkaran {
    constructor(jari_jari, tinggi) {
        super(jari_jari);
        this.tinggi = tinggi;
    }

    volume() {
        return (1/3) * this.luas() * this.tinggi;
    }

    luasPermukaan() {
        let s = Math.sqrt(this.jari_jari ** 2 + this.tinggi ** 2);
        return this.luas() + Math.PI * this.jari_jari * s;
    }

    luasSelimut() {
        let s = Math.sqrt(this.jari_jari ** 2 + this.tinggi ** 2);
        return Math.PI * this.jari_jari * s;
    }
}

// Bola
class Bola extends Lingkaran {
    constructor(jari_jari) {
        super(jari_jari);
    }

    volume() {
        return (4/3) * Math.PI * this.jari_jari ** 3;
    }

    luasPermukaan() {
        return 4 * this.luas();
    }
}

let bola = new Bola(15);
let kerucut = new Kerucut(10, 40);
let tabung = new Tabung(7.5, 50);

// Hasil perhitungan
console.log("Bola:");
console.log("Volume: " + bola.volume().toFixed(2) + " cm³");
console.log("Luas Permukaan: " + bola.luasPermukaan().toFixed(2) + " cm²");

console.log("\nKerucut:");
console.log("Volume: " + kerucut.volume().toFixed(2) + " cm³");
console.log("Luas Permukaan: " + kerucut.luasPermukaan().toFixed(2) + " cm²");
console.log("Luas Selimut: " + kerucut.luasSelimut().toFixed(2) + " cm²");

console.log("\nTabung:");
console.log("Volume: " + tabung.volume().toFixed(2) + " cm³");
console.log("Luas Permukaan: " + tabung.luasPermukaan().toFixed(2) + " cm²");
console.log("Luas Selimut: " + tabung.luasSelimut().toFixed(2) + " cm²");
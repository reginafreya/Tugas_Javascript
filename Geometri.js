const a = 4;
const r = 3;
const n = 10;

let Geometri = 0;

for (let i = 0; i < n; i++) {
    Geometri += a * Math.pow(r, i);
}

console.log("Jumlah 10 suku pertama dari deret geometri adalah:", Geometri);
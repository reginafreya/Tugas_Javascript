let tinggi = 170;
let beratBadan = 90;

let bmi = beratBadan / ((tinggi/100)**2);

let status;
if (bmi <18.5) {
    s = "Kekurangan berat badan";
} else if (bmi <24.9) {
    s = "Normal (ideal)";
} else if (bmi <29.9) {
    s = "Kelebihan berat badan";
} else {
    s = "Kegemukan (Obesitas)";
}

console.log("BMI Rhodey: " + bmi);
console.log("Status kondisi tubuh: " + s);
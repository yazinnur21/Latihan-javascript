// =============================
// let age = window.prompt("Seberapa tua kamu! ");
// age = Number(age)
// age +=1;
// console.log(age, typeof age);

// let x = "Telur";
// let y = "Telur";
// let z = "Telur";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log (x, typeof x);
// console.log (y, typeof y);
// console.log (z, typeof z);




// implementasi

// =============================

// let harga1 = window.prompt("Masukkan harga baranga pertama:");
// let harga2 = window.prompt("Masukkan harga baranga Kedua:");

// harga1 = Number(harga1);
// harga2 = Number(harga2);

// let total = harga1 + harga2;
// console.log("Total belanja anda adalah : Rp " + total);




// =============================

// let nilai = window.prompt("Masukkan nilai ujian");
// nilai = Number(nilai);

// let lulus = nilai >= 75;
// console.log("Anda dinyatakan sebagai 100" + lulus)




// =============================

// let userName = window.prompt("Masukkan username : ");
// let isFilled = Boolean(userName);

// if (isFilled) {
//     console.log("Halo, " + userName + "! Selamat datang. ");
// } else {

//     console.log("Username tidak ditemukan");
// }


let harga = window.prompt("Masukkan Harga Barang : ");
// harga = Number(harga);

let total = harga + (harga * 0.10);
console.log("Total yang harus dibayar: ", total , "Tipe data :", typeof total);
// console.log("Halo");

// ================================

// if(kondisi){
    
// }


// ================================
// let umur = 15;

// if (umur >= 13) {
//     console.log("Anda lulus");
// }


// ================================
// let umur = 11;

// if (umur >= 13) {
//     console.log("Anda lulus");
// } else {
//     console.log("Anda tidak lulus")
// }

// ================================

// let nilai = 95;

// if (nilai >= 90) {
//     console.log("Grade A");
// } else if(nilai >=75) {
//     console.log("Grade B");
// } else {
//     console.log("Grade C");
// }

// ================================

// const kendaraan = {
//     merek : "suzuki",
//     kecepatan : 0,
    
//     percepatan : function(nilai){
//         this.kecepatan += nilai ;
//         console.log(`Kecepatan sekarang : ${this.kecepatan}`)
//     },
//     rem : function(nilai){
//         this.kecepatan -= nilai;

//         if (this.kecepatan <0){
//             this.kecepatan = 0;
//         }
//         console.log(`Kecepatan sekarang : ${this.kecepatan}`)
//     }
// };

// kendaraan.percepatan(50);
// kendaraan.rem(20);

// ================================

// const kendaraan = {
//     merek : "suzuki",
//     kecepatan : 0,
//     bahanbakar : 3,

//     info : function(){
//         console.log(`Merek : ${this.merek} | kecepatan ${this.kecepatan}`)
//     },
    
//     percepatan : function(nilai){
//         if (this.bahanbakar > 0) {
//             this.kecepatan += nilai;
//             this.bahanbakar -= 1;
//             console.log(`Gass!! kecepatan ${this.kecepatan} | bahan bakar ${this.bahanbakar}`)
//         } else{
//             console.log("Bahan bakar sudah habis, tidak bisa dipercepat");
//         }
//     },
// };
// kendaraan.info();
// kendaraan.percepatan(30);
// kendaraan.percepatan(30);
// kendaraan.percepatan(30);
// kendaraan.percepatan(30);

// ================================

// let siswa = {
//     "nama" : "budi",
//     "umur" : 15,
//     "kelas" : "11 IPA",
//     "hobi" : ["Membaca", "berenang", "main game"]
// };

// console.log("Data Sekarang", siswa);
// console.log(siswa.nama);
// console.log(siswa.hobi);

// siswa.alamat = "Jl. Sudiang";
// console.log("Alamat siswa telah ditambahkan", siswa.alamat);

// siswa.umur = 19;
// console.log("Umur anda telah berubah : ", siswa.umur);

// delete siswa.kelas;
// console.log("Data setelah dihapus", siswa);

// let JsonString = JSON.stringify(siswa);
// console.log("Dalam bentuk string json : ", JsonString);

// let dataBaru = JSON.parse(JsonString);
// console.log("Kembali ke bentuk Object : ", dataBaru);


//================================

let buku = {
    Judul : "Belajar JSON",
    halaman : 120,
    tersedia : true,
    kategori : [pemrograman, dasar]
    penulis : {
        nama : "yazin",
    }
};

console.log(buku.judul)


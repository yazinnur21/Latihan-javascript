        // const product = {
        //     name : 'soya',
        //     price : 1200
        // };
        // console.log(product);
        // console.log(product.price); 
        // console.log(typeof product);
        
 // ========================================

        // const produk = {
        //     namaProduk : "Beras",
        //     Harga : 1500,
        //     Stok : 10
        // };
        // console.log("Nama produk : ", produk.namaProduk);

        // produk.namaProduk = "Beras terbaru";
        // console.log(produk);

        // produk.newProperty = true;
        // console.log(produk);
        
        // delete produk.newProperty;
        // console.log(produk);
        
 // ========================================
 
//  const user = {
//      username : "Yazin",
//      age : 13,
//             isMember : true
//         };
        
//         console.log("Object Awal");
//         console.log(user);
        
//         console.log("===========");
        
//         console.log("Username : ", user.username);
//         console.log("Umur : ", user.age);
//         console.log("Status member", user.isMember);
        
//         user.username = ("Pika");
//         user.age = 26;
//         user.isMember = false;
        
//         console.log("===========");
        
//         console.log("Setelah update");
//         console.log(user);
        
//         console.log("===========");
        
//         user.gmail = "Yasminnur21@gmail.com";
//         user.country = "Makassar";
//         console.log("Setelah menambahkan properti baru");
        
//         console.log(user);
//         console.log("===========");
        
//         delete user.age;
//         delete user.gmail; 
//         console.log("Setelah menambahkan properti baru");
//         console.log(user);
        
        
// ========================================

// Tugas

// const penjualan = {
//         nama : "laptop",
//         harga : 8500000,
//         stok : 5
//     }
//     console.log(penjualan)
    
//     penjualan.harga = 8000000
//     console.log("Harga Update : ")
//     console.log(penjualan);
    
//     penjualan.diskon = 10;
//     console.log(penjualan)
    
//     delete penjualan.stok
//     console.log(penjualan)
    
    
    // ========================================
    
    // function sapa(){
    //     console.log("Halo, ini adalah yazin");
    // };

    // sapa();

    
    // function sapaNama(nama){
    //     console.log(`Halo Selamat datang pemirsa, ${nama}`);
    // }
    

    // // ========================================
    // sapaNama("Yazin noura");
    
    // function tambah(a,b){
    //     return a * b ;
    // }
    
    // let hasil = tambah(22,223);
    // console.log(hasil);


    // // ========================================
    
    // function sapaOrang(nama = "Tamu") {
    //     console.log(`Hai, ${nama}`)
    // }
    
    // sapaOrang();
    // sapaOrang("Dewi");
    
    // // ========================================

    // // Fungsi Yang lebih Modern
    // const kali =(a , b) => a * b;
    // console.log(kali(12,13));

    // //=========================================

    // function cekGenap(angka){
    //     if(angka % 2 === 0){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // console.log(cekGenap(10));
    // console.log(cekGenap(7));


    // ======================================

    // const orang = {
    //     nama : "Yazin",
    //     umur : 34,

    //     sapa : function(){
    //         console.log("Halo, nama saya adalah " + this.nama);
    //     }
    // };

    // orang.sapa();

    // const ikan= {
    //     nama : "Hiu",
    //     grr : function(){
    //         console.log("Nama saya " + this.nama);
    //     }
    // };

    // ikan.grr();

    // const elektronik ={
    //     nama : "laptop",
    //     harga : 100000,
        
    //     fungsi : function(){
    //         console.log("Nama elekttronik : " + this.nama  +" | " + "Harga : " + this.harga  )
    //         console.log()
    //     }
    // }
    // elektronik.fungsi();

    // const elektronik ={
    //     nama : "laptop",
    //     harga : 100000,
        
    //     fungsi : function(){
    //         console.log("Nama elekttronik : " + this.nama  +" | " + "Harga : " + this.harga  )
    //     },

    //     updateHarga : function(newHarga){
    //         this.harga = newHarga;
    //         console.log("Harga berhasil di update menjadi " + this.harga)
    //     },

    //     tambahDiskon : function(persen){
    //         let hargaDiskon = this.harga - (this.harga * persen /100);
    //         console.log("Harga setelah diskon " + persen + "% adalah :" + hargaDiskon)
    //     }
    // }
    // elektronik.fungsi();
    // elektronik.updateHarga(20000);
    // elektronik.fungsi();
    // elektronik.tambahDiskon(23);


    // const Kendaraan = {
    //     merek : "honda",
    //     kecepatan : 0,

    //     info : function(){
    //         console.log("Merek : " this.merek + " | Kecepatan : " this.kecepatan);
    //     },
    //     percepat : function(nilai){
    //         this.kecepatan = 
    //     }
    // }

    // const Kendaraan = {
    //     merek : "honda",
    //     kecepatan : 0,

    //     info : function(){
    //         console.log(`Merek: ${this.merek} | Kecepatan: ${this.kecepatan}`);
    //     },
    //     percepat : function(nilai){
    //         this.kecepatan += nilai;
    //         console.log(`Kecepatan Bertambah, sekarang : ${this.kecepatan}`)
    //     },
    //     rem : function(nilai){
    //         this.kecepatan -= nilai;
    //         if(this.kecepatan < 0){
    //             this.kecepatan = 0;
    //         } 
    //         console.log(`kecepatan berkurang, sekarang : ${this.kecepatan}`)
    //     }
    // };
    // Kendaraan.info();
    // Kendaraan.percepat(50);
    // Kendaraan.percepat(30);
    // Kendaraan.rem(20);
    // Kendaraan.rem(10);


    



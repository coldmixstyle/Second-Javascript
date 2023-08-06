let ogrenciler = [
    "Canberk",         // 0 index
    "Ahmet",          // 1 index
    "Mehmet",        // 2 index
    "Veli",         // 3 index
    5 ,            // 4 index     (Array tipi değşkenlerde karışık veri tipleri tutulabilir)
    "Aysel",      // 5 index
    "Fatma",     // 6 index
    "Hasan",    // 7 index
] ; // array veri tipi 

/*
const ogrenci = "Canberk";
const ogrenci2 = "Ahmet";
const ogrenci3 = "Mehmet";
*/

const ilk_ogrenci = ogrenciler [0]
ogrenciler.push("Sevgi");
console.log("ogrenciciler Array i :", ogrenciler)
console.log("ilk ogrenci :", ilk_ogrenci)

const toplam_ogrenci_sayisi = ogrenciler.length;
console.log("toplam_ogrenci sayisi", toplam_ogrenci_sayisi);

const son_ogrenci = ogrenciler[toplam_ogrenci_sayisi -1];
console.log("son_ogrenci", son_ogrenci)

console.log("Array guncellendi:", ogrenciler)

/*
1.Meyvelerin yer aldı bir liste oluşturulacak.

2.Meyvelere yeni bir meyve push methodu ile eklenecek 

3.Meyveler arrayın ilk elemanı console ile yazdırılacak

4.Meyveler arrayın son elemanı console ile yazdırılacak

*/


let meyveler = [
    "Kavun",
    "Karpuz",
    "Kivi",
    "Muz",
    "Avocado",
    "Mango",
]
const ilk_meyve = meyveler [0];

const toplam_meyve_sayisi = meyveler.length

const son_meyve = meyveler[toplam_meyve_sayisi -1];

meyveler.push ("Mango")
console.log("Meyveler listesi:", meyveler)
console.log ("İlk meyve:",ilk_meyve)
console.log ("Son meyve:",son_meyve)



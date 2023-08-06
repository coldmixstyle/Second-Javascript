const ilk_degisken="Merhaba Dunya";
let ikinci_degisken="Hello world!";
let ucuncu_degisken="İstanbul";


//ilk_degisken ="Mecediyekoy" const ile oluşturulduğu için bunun değerini güncelleyemem.


console.log(ilk_degisken);
console.log("Burasi bir mesaj" , ikinci_degisken);   //metinsel ifade not olarak yazılabilir.
console.log(ucuncu_degisken);


/*
Birden fazla yorum satırı yazılabilir.

Tarayıcı bunu görmeyecektır.
*/

/// ########## DEĞİŞKEN TÜRLERİ ########

const dorduncu_degisken = "Selam merhaba 15! -....Nasilsin bro ?" ; // string veri tipi 
console.log(dorduncu_degisken);

const besinci_degisken = 50.5;   // number veri tipi 
const altinci_degisken = 10;
const yedinci_degisken ="28.58";
//const yedinci_degisken = altinci_degisken;   // bir degiskene başka bir degişkenin degeri verilebilir veya cagirabilir.

//console.log("Yedinci Degisken" , yedinci_degisken);
const carpin_islemi = besinci_degisken * altinci_degisken;
console.log("Çarpim sonucu:" , carpin_islemi)

let cikartma_islemi = besinci_degisken - altinci_degisken;
console.log ("Cikartma sonucu:" , cikartma_islemi);

let bolme_islemi = besinci_degisken / altinci_degisken;
console.log("Bolme sonucu" , bolme_islemi);

const toplama_islemi = besinci_degisken + altinci_degisken;
console.log ("Toplama sonucu:" , toplama_islemi);

const besinci_degisken_yeni = besinci_degisken.toFixed(2); // toFixed (2) methodu ile ondalikli sayiların virgülünden sonra kaç haneyı gösterecegini belirleyebiliriz.
console.log ("Yeni degisken" , besinci_degisken_yeni);

const string_number_cevirme = Number(yedinci_degisken);
const string_number_cevirme_fixed = string_number_cevirme.toFixed(1);
console.log("Deneme" , string_number_cevirme_fixed)

const veri_tipi_ogrenme_alti = typeof altinci_degisken;
console.log ("Altinci Degisenin Veri tipi" , veri_tipi_ogrenme_alti);

const veri_tipi_ogrenme_yedi = typeof yedinci_degisken;
console.log ("Yedinci Degisenin Veri tipi" , veri_tipi_ogrenme_yedi);






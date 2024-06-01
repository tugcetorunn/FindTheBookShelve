// * KİTAPLAR

let book1 = { name: "Şeker Portakalı", author: "Jose Mauro De Vasconcelos", price: 90, shelve: "1.5.RAF" };
let book2 = { name: "Hayvan Çiftliği", author: "George Orwell", price: 40, shelve: "2.4.RAF" };
let book3 = { name: "1984", author: "George Orwell", price: 54, shelve: "5.3.RAF" };
let book4 = { name: "Simyacı", author: "Paulo Coelho", price: 97, shelve: "3.3.RAF" };
let book5 = { name: "Otomatik Portakal", author: "Antony Burgess", price: 20, shelve: "1.4.RAF" };

let books = [book1, book2, book3, book4, book5];

// * RAFLAR

let shelve11 = { code: "1.1.RAF", show: false };
let shelve12 = { code: "1.2.RAF", show: false };
let shelve13 = { code: "1.3.RAF", show: false };
let shelve14 = { code: "1.4.RAF", show: false };
let shelve15 = { code: "1.5.RAF", show: false };

let shelve21 = { code: "2.1.RAF", show: false };
let shelve22 = { code: "2.2.RAF", show: false };
let shelve23 = { code: "2.3.RAF", show: false };
let shelve24 = { code: "2.4.RAF", show: false };
let shelve25 = { code: "2.5.RAF", show: false };

let shelve31 = { code: "3.1.RAF", show: false };
let shelve32 = { code: "3.2.RAF", show: false };
let shelve33 = { code: "3.3.RAF", show: false };
let shelve34 = { code: "3.4.RAF", show: false };
let shelve35 = { code: "3.5.RAF", show: false };

let shelve41 = { code: "4.1.RAF", show: false };
let shelve42 = { code: "4.1.RAF", show: false };
let shelve43 = { code: "4.1.RAF", show: false };
let shelve44 = { code: "4.1.RAF", show: false };
let shelve45 = { code: "4.1.RAF", show: false };

let shelve51 = { code: "5.1.RAF", show: false };
let shelve52 = { code: "5.2.RAF", show: false };
let shelve53 = { code: "5.3.RAF", show: false };
let shelve54 = { code: "5.4.RAF", show: false };
let shelve55 = { code: "5.5.RAF", show: false };

let shelves = [
    [shelve51, shelve52, shelve53, shelve54, shelve55],
    [shelve41, shelve42, shelve43, shelve44, shelve45],
    [shelve31, shelve32, shelve33, shelve34, shelve35],
    [shelve21, shelve22, shelve23, shelve24, shelve25],
    [shelve11, shelve12, shelve13, shelve14, shelve15]
]

/* function buildShelves() {
    console.clear();
    let satir = "";
    for (i = 0; i < shelves.length; i++) {
        for (j = 0; j < 5; j++) {
            satir += "| " + shelves[i][j].code + " |";

        }
        console.log(satir);
        satir = "";
    }
}   raf oluşturma fonksiyonu ilk hali, raf isimleri böyle gözükmeyecek. */

// * RAFLARIN CONSOLE DA GÖSTERİLMESİ

function buildShelves() {
    console.clear();
    let satir = "";
    for (i = 0; i < shelves.length; i++) {
        for (j = 0; j < 5; j++) {
            satir += " | " + (shelves[i][j].show ? shelves[i][j].code : "-----") + "";
        }
        console.log(satir);
        console.log("------------------------------------------")
        satir = "";
    }
}

buildShelves();

// * KULLANICIDAN ALINAN KİTAP İSMİNDEN KİTABI BULUP RAF KODUNU ÇEKME

function findTheShelve(bookName){
    // let bookShelve = null;
    let bigBookName = bookName.toUpperCase();
    for(i = 0; i<books.length; i++){
        if(books[i].name.toUpperCase().includes(bigBookName,0)){
            return books[i].shelve;
        }
        else{
            return "Aradığınız kitap bulunamadı."
        }
    }
}

let bookName = prompt("Lütfen aradığınız kitap ismini giriniz : ");

let bookShelve = findTheShelve(bookName);

// * KİTABIN RAF KODUNUN CONSOLE DA GÖSTERİLMESİ

function showTheShelve(){
    for(i = 0; i<shelves.length; i++){
        for(j = 0; j<5; j++){
            if(shelves[i][j].code == bookShelve){
                shelves[i][j].show = true;
                break;
            }
        }
    }
}

showTheShelve();
buildShelves(); // * en son rafları tekrar göstermesi gerek çünkü içindeki show ifadesi değişiyor.
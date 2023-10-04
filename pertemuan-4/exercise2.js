// Buatlah fungsi yang menerima 1 input angka
// dan mengembalikan string apakah angka yang dimasukan
// adalah bilangan ganjil atau genap
// menggunakan IIFE dan callback function

// IIFE
// (function (){
//     let ganjilgenap = 12;
//     let isEligible = ganjilgenap % 2 === 0 ? "genap" : "ganjil";
//     console.log(isEligible);
// })();

// Callback Function
function ganjilGenap(hasil, callback){
    const isEligible = hasil % 2 === 0 ? "genap" : "ganjil";
    console.log(isEligible);
}
ganjilGenap("11", function(isEligible){
    console.log(isEligible)
})
const nama = "moch kahfi";
let usia = 20;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (usia > 1 && usia < 5) {
        generasi = "anda masih balita";
    }
    else if (usia > 6 && usia < 10) {
        generasi = "generasi anak-anak";
    }
    else if (usia > 10 && usia < 19) {
        generasi = "generasi remaja";
    }
    else if (usia > 19 && usia < 44) {
        generasi = "generasi dewasa";
    }
    else if (usia > 44) {
        generasi = "generasi lansia";
    }
    else {
        console.log("anda masih bayi");
    }
    return biodata.innerHTML = generasi;
}

console.log(nama)
console.log(usia)

generateBiodata();
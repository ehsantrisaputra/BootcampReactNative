console.log('No. 1 ')

function teriak (){
    var x = "Hallo Sanbers !"
    return x
}

console.log(teriak())




console.log('\nNo. 2 ')

function kalikan(angka1, angka2){
    var x = angka1 * angka2
    return x
}

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali)




console.log('\nNo. 3 ')

function introduce (name, age, adress, hobby){
    var intro = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!."
    return intro
}

var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!" 

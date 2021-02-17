var nama = ""
var peran = "mage"


if (nama == ""){
    console.log('Nama harus diisi!')
} else if (nama == nama && peran == ""){
    console.log('Halo', nama,'Pilih Peranmu untuk memulai game')
} else if (peran != 'mage' && 'guard'&& 'werewolf'){
    console.log('Halo', nama,'Pilih Peran yang tersedia untuk memulai game')
} else if (nama == nama && peran == 'mage'){
    console.log('Selamat datang di Dunia Werewolf,', nama)
    console.log(nama, 'You are the magician, kamu dapat melihat siapa yang menjadi werewolf!')
} else if (nama == nama && peran == 'guard'){
    console.log('Selamat datang di Dunia Werewolf,', nama)
    console.log(nama, 'You are the guardian, kamu akan membantu melindungi temanmu dari serangan werewolf!')
} else if (nama == nama && peran == 'werewolf'){
    console.log('Selamat datang di Dunia Werewolf,', nama)
    console.log(nama, 'You are the wereWolf, Kamu akan memakan mangsa setiap malam!')
}
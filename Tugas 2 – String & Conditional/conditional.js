console.log('No.1')

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

console.log('\n')




console.log('No.2')


var tanggal = 17; 
var bulan = 8; 
var tahun = 1945;


switch (true) {
  case (tanggal < 1 || tanggal > 31): {
    console.log('Input tanggal salah')
    break;
  }
  case (tahun < 1900 || tahun > 2200): {
    console.log('Input Tahun Salah')
    break;
  }
  case (bulan > 12 || bulan < 1):
    console.log('Input Bulan Salah')
    break;
  default:
    {
      switch (true) {
        case bulan == 1:
          teksBulan = 'Januari';
          break;
        case bulan == 2:
          teksBulan = 'Februari';
          break;
        case bulan == 3:
          teksBulan = 'Maret';
          break;
        case bulan == 4:
          teksBulan = 'April';
          break;
        case bulan == 5:
          teksBulan = 'Mei';
          break;
        case bulan == 6:
          teksBulan = 'Juni';
          break;
        case bulan == 7:
          teksBulan = 'Juli';
          break;
        case bulan == 8:
          teksBulan = 'Agustus';
          break;
        case bulan == 9:
          teksBulan = 'September';
          break;
        case bulan == 10:
          teksBulan = 'Oktober';
          break;
        case bulan == 11:
          teksBulan = 'November';
          break;
        case bulan == 12:
          teksBulan = 'Desember';
          break;
        default:
          break;
      }
      console.log(tanggal,  teksBulan, tahun)
      break;
    }
}

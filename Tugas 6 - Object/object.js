console.log("Soal No. 1 (Array to Object)")


var now = new Date()
var thisYear = now.getFullYear() // 2020 (tahun sekarang)


function arrayToObject(arr) {
    if(arr.length <= 0){
        return console.log("")
    }
    for(var i = 0; i<arr.length; i++){
        var newObject = {}
        var birthYear = arr[i][3];
        var now = new Date().getFullYear()
        var newAge;
        if(birthYear && now -birthYear >0){
            newAge = now -birthYear
        }else {
            newAge = "invalid Birth Year"
        }

    newObject.firstName = arr[i][0]
    newObject.lastName = arr[i][1]
    newObject.gender = arr[i][2]
    newObject.age = newAge

    var consoleText = (i+1) + ". " + newObject.firstName + " " + newObject.lastName + " "

    console.log(consoleText)
    console.log(newObject)
    }
}

var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
var people3 = [ [] ]

arrayToObject(people) 
arrayToObject(people2)
arrayToObject(people3)






console.log("\n\nSoal No. 2 (Shopping Time)")


function shoppingTime(memberId, money) {
    if(!memberId){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if (money<50000){
        return "Mohon maaf, uang tidak cukup"
    } else {
        var newObject = {}
        var moneyChange = money;
        var purchaseList = [];
        var sepatuStacattu = "sepatu stacattu"
        var bajuZoro = "baju zoro";
        var bajuHn = "baju H&N"
        var sweaterUniklooh = "sweater uniklooh"
        var casingHandphone = "casing handphone";

        var check = 0;
        for (var i = 0; moneyChange >= 50000 && check ==0; i++){
            if (moneyChange >= 1500000){
                purchaseList.push(sepatuStacattu)
                moneyChange -= 1500000
            } else if (moneyChange >= 500000){
                purchaseList.push(bajuZoro)
                moneyChange -= 500000
            } else if (moneyChange >= 250000){
                purchaseList.push(bajuHn)
                moneyChange -= 250000
            } else if(moneyChange >= 175000){
                purchaseList.push(sweaterUniklooh)
                moneyChange -= 175000
            } else if (moneyChange >= 50000){
                for (var j=0; j<= purchaseList.length-1; j++){
                    if(purchaseList[j]== casingHandphone){
                        check +=1
                    }
                }if (check == 0){
                    purchaseList.push(casingHandphone)
                    moneyChange -= 50000
                }else {
                    purchaseList.push(casingHandphone)
                    moneyChange -=50000
                }
            }
        }
    }

    newObject.memberId = memberId
    newObject.money = money
    newObject.purchaseList = purchaseList
    newObject.changeMoney = moneyChange

    return newObject

    
  }
   
console.log("\nTest case 1")
console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }

console.log("\nTest case 2")
console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }

console.log("\nOther condition")
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja





console.log("\n\nSoal No. 3 (Naik Angkot)")


function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var arrOutput = []

    if (arrPenumpang.length <= 0){
        return []
    }

    for (var i = 0; i<arrPenumpang.length; i++){
        var objOutput = {}
        var asal = arrPenumpang [i][1]
        var tujuan = arrPenumpang [i][2]

        var indexAsal;
        var indexTujuan;

    for (var j = 0; j<rute.length; j++){
        if (rute[j] == asal){
            indexAsal = j
        } else if (rute[j] == tujuan){
            indexTujuan = j
        }
    }

    var bayar = (indexTujuan - indexAsal) * 2000

    objOutput.penumpang = arrPenumpang[i][0]
    objOutput.naikDari = asal
    objOutput.tujuan = tujuan
    objOutput.bayar = bayar

    arrOutput.push(objOutput)
    }
    
    return arrOutput

  }
   
  console.log("Task 1")
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
   
  console.log("Other condition")
  console.log(naikAngkot([])); //[]
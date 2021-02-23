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
    // you can only write your code here!
  }
   
  // TEST CASES
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
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja


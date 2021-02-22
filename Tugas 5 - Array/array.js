console.log("Soal No. 1 (Range) ")

function range (startNum, finishNum){
    var array = [];

    if (startNum > finishNum){
        var Num = startNum - finishNum + 1;
        for (var i = 0; i < Num; i++){
            array.push(startNum-i);
        }
    } else if (startNum < finishNum){
        var Num1 = finishNum - startNum + 1;
        for (var j = 0; j < Num1; j++){
            array.push(startNum+j);
        }
    } else if (!startNum || !finishNum){
        return -1;
    }
    return array;

}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 




console.log("\nSoal No. 2 (Range with Step)")

function rangeWithStep (startNum, finishNum, step){
    var array = [];

    if (startNum > finishNum){
        var Num = startNum;
        for (var i = 0; Num >= finishNum; i++){
            array.push(Num);
            Num -= step;
        }
    } else if (startNum < finishNum){
        var Num1 = startNum;
        for (var j = 0; Num1 <= finishNum; j++){
            array.push(Num1);
            Num1 += step;
        }
    } else if (!startNum || !finishNum || !step){
        return -1;
    }
    return array;

}


console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 




console.log("\nSoal No. 3 (Sum of Range)")
function sum (startNum, finishNum, step){
    var array = [];
    var distance;

    if(!step){
        distance=1
    } else {
        distance = step
    }

    if (startNum > finishNum){
        var currentNum = startNum;
        for (var i=0; currentNum >= finishNum; i++){
            array.push(currentNum)
            currentNum -= distance
        }
    } else if(startNum < finishNum){
        var currentNum = startNum;
        for (var i=0; currentNum <= finishNum; i++){
            array.push(currentNum)
            currentNum += distance
        }
    } else if (!startNum && !finishNum && !step){
        return 0

    } else if (startNum){
        return startNum
    }
    
    var total = 0;
    for (var i=0; i < array.length; i++){
        total = total + array[i]
    }
    return total

}


console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 




console.log("\nSoal No. 4 (Array Multidimensi)")


var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling (data){
    var dataLength = data.length
    for(var i = 0; i<dataLength; i++){
    var id = "Nomor Id :" + data[i][0]
    var nama = " Nama Lengkap :" + " " + data[i][1]
    var ttl = " TTL :" + data[i][2] + " " + data[i][3]
    var hobi = "Hobi :" + data[i][4]

    console.log(id)
    console.log(nama)
    console.log(ttl)
    console.log(hobi)
    }
}

dataHandling(input)




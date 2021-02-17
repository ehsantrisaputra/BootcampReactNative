console.log('\nNo. 1 Looping While')

console.log('Looping Pertama')
var i = 2

while (i <= 20){
    console.log(i, 'I love coding');
    i += 2;
}
    
console.log('Looping Kedua')
var i = 20
while (i >= 2){
    console.log(i, 'I will become a mobile developer');
    i -= 2;
}




console.log('\nNo. 2 Looping menggunakan for')

for (var i = 0; i<=20; i+=1)
    if (i % 2 == 0){
        console.log(i, '- Berkualitas')
    } else if (i % 3 == 0){
        console.log(i, '- I Love Coding')
    } else if (i % 2 != 0){
        console.log(i, '- Santai')
    } 



console.log('\nNo. 3 Membuat Persegi Panjang #')

for (var i = 0; i<=4; i+=1){
    console.log('########')
}



console.log('\nNo. 4 Membuat Tangga #')

for (var i=0; i<=7; i+=1){
    if (i == 1){
        console.log('#')
    }else if(i == 2){
        console.log('##')
    }else if(i == 3){
        console.log('###')
    }else if(i == 4){
        console.log('####')
    }else if(i == 5){
        console.log('#####')
    }else if(i == 6){
        console.log('######')
    }else if(i == 7){
        console.log('#######')
    }
}




console.log('\nNo. 5 Membuat Papan Catur')

for (i=0; i<=7; i+=1){
    if (i%2 != 0){
        console.log(" # # # #")
    } else if (i%2 == 0){
        console.log("# # # #")
    }
}


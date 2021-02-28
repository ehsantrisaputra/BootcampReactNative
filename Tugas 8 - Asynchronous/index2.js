var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

async function asyncCall(){
    let t = 10000
    for (let i = 0; i < books.length; i++){
        t = await readBooksPromise(t, books[i]).then(function(sisaWaktu){
            return sisaWaktu;
        })
        .catch(function(sisaWaktu){
            return sisaWaktu;
        })
    }
    console.log('selesai')
}

asyncCall();
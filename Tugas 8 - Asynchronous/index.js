let readBooks = require('./callback.js')

let books = [
    {name : 'LOTR', timeSpent : 3000},
    {name : 'Fidas', timeSpent : 2000},
    {name : 'Kalkulus', timeSpent : 4000},
]


let t = 10000
let i = 0

function panggil(){
    readBooks(t, books[i], function(sisaWaktu){
        t= sisaWaktu
        i++
        if (i < books.length)
        panggil()
    })
}

panggil()
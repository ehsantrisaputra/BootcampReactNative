function periksaDokter(nomerAntri, callback){
    if(nomerAntri > 50){
        callback(false)
    } else if(nomerAntri < 10){
        callback(true)
    }
}


// menjalankan callback

periksaDokter(7, function(check) {
    if(check){
        console.log(`sebentar lagi giliran saya`)
    } else (
        console.log(`waktu tunggu masih lama`)
    )
})



//PROMISE

var isMomHappy = false;

let willIGetNewPhone = new Promise(
    function(resolve, reject){
        if (isMomHappy) {
            let phone = {
                brand : 'Samsung',
                color : 'Black'
            };
            resolve(phone);
        } else {
            let reason = new Error('mom is not happy');
            reject(reason);
        }
    }
);


function askMom() {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
}
 
// Tanya Mom untuk menagih janji
askMom() 
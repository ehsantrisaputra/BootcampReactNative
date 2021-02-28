class Animal {
    constructor(name){
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;

    }
    get name (){
        return this._name
    }
    get legs(){
        return this._legs
    }
    set legs(amount){
        return this._legs = amount
    }
    get cold_blooded(){
        return this._cold_blooded
    }

}

var sheep = new Animal("shaun");

console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)


//Release

class Ape extends Animal{
    constructor(name, amount){
        super(name)
        this._legs = amount
    }
    yell(){
        console.log('Haha')
    }
}

class Frog extends Animal{
    constructor(name){
        super(name)
    }
    jump(){
        console.log('hop hop')
    }
}

var sungokong = new Ape ('kera sakti', 2);
sungokong.yell()
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)


var kodok = new Frog ('Bangkong')
kodok.jump()
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)




console.log("\n\nTugas no. 2")

class Clock {
    constructor({template}){
        this.template = template;
    }
    render(){
        var date = new Date();
        var hours = date.getHours();
        if (hours <10) hours = '0' + hours;

        var mins = date.getMinutes();
        if(mins < 10)mins = '0' + mins;

        var secs = date.getSeconds();
        if(secs < 10)secs = '0' + secs;

        var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs)

        console.log(output)
    }
    stop(){
        clearInterval(this.timer);
    }

    start(){
        this.render();
        this.timer = setInterval(()=>this.render(), 1000);
    }
}

var clock = new Clock({template: 'h : m : s'});
clock.start();

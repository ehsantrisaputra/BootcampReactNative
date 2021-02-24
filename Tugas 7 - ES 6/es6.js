console.log("1. Mengubah fungsi menjadi fungsi arrow")


const golden = () => {
    console.log("this is golden!!")
  }
   
  golden()



  
console.log("2. Sederhanakan menjadi Object literal di ES6")


const newFunction = (firstName, lastName) =>{
    return {
        firstName,lastName,
        fullName(){
            console.log(firstName + " " + lastName)
            return
        }
    }
}
newFunction('william', 'Imoh').fullName()



console.log("3. Destructuring")

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const {firstName, lastName, destination, occupation, spell} = newObject

console.log(firstName, lastName, destination, occupation, spell)




console.log("4. Array Spreading")

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

const combined = [...west, ...east]
console.log (combined)




console.log("5. Template Literals")

const planet = "earth"
const view = "glass"
var before = `Lorem ' ${view} dolor sit amet,  
    consectetur adipiscing elit, ${planet} do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim
     ad minim veniam`
 
// Driver Code
console.log(before) 
console.log(`Hello world`)
//key : value
let obj = {
    name: 'Trieu', 
    address:'HCM',
    email: ``,
    a: function(){
        console.log(`Hello function`)
        return ''
    }
};
 
let b = `name`
obj[b] = `Hary`
obj.b = `Hello` //add b vào obj

console.log(`Type of a: ${typeof obj}, type of b: ${typeof b}`)
console.log(obj.name, obj[`address`])
console.log(obj.a())
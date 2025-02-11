console.log(`Hello world`);

let obj = {
    name : `Arb`,
    address : `HCM`,
    getName : function(){
        return this.name; 
    },
    getNum : (a) => a+10
}
console.log(obj.getName());
console.log(obj.getNum(11));

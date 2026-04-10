
//Task1

//A
//C
//E
//B
//D
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
  console.log("D");
}, 100);

console.log("E");

// Second example
//Output: End,Last,Start
setTimeout(()=>{
    console.log("Start");},200);

    console.log("End");
    console.log("Last");

//Task 2

const account = {
  name: "Salesforce",
  type: "Technology",
  revenue: 500000
};

account.name="SDM";
account.type="ERP";
account.revenue=750000;
// const olduğu üçün reassign etmek mümkün deyil ancaq properties-ləri dəyişdirmək mümkündür.
account.region="EMEA"
console.log(account);


//Primitive variable-larda const olduğu zaman reassign etmek olmur.
const username="Gultakin";
// username="SDM";
// console.log(username)


//Task 3

console.log(9 * "3")//27
console.log(9 + "3")//93
console.log(false == "")//true
console.log(false == "0")//true
console.log("" == "0")//false
console.log([0] == 0)//true

console.log(9 * "3")//27
console.log(9 + "3")//93
console.log(false === "")//false
console.log(false === "0")//false
console.log("" === "0")//false
// console.log([0]=== 0)//false

function isEqual(a,b){
    if(a===b){
        return true;
    }
    else{
        return false;
    }
}
isEqual(false, "");
isEqual(false,"0");
isEqual("" ,"0");
isEqual([0], 0);

//Task 4

function checkValue(val){
    if(val){
        console.log(`Has value:${val}`);
    }
    else{
        console.log("No value")
    }
}

const testValues = [0, "hello", "", null, 42, undefined, "0", []];

for (let value of testValues) {
    checkValue(value);
}

function loadData(recordId){
    if(!recordId){
        console.log("No recordId provided");
        return;
    }
    else{
        console.log(`Loading data for:${recordId}`)
    }
}

//Task 5

function makeMultiplier(factor){
    return function(number){
        return number*factor;
    };
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));
console.log(triple(5));

function makeCounter(start){
    let count=start;
    return{
        increment (){
            count++
        },
        getCount (){
            return count;
        }
    };
}
const counter1=makeCounter(0);
const counter2=makeCounter(10);

counter1.increment();
counter1.increment();
console.log(counter1.getCount());

counter2.increment();
console.log(counter2.getCount());

//Task 6

const timer1={
    seconds:0,
    start(){
        setInterval(()=>{
            this.seconds++;
            console.log(this.seconds);
        },1000);
    }
};

timer1.start();// seconds normal artacaq cunku arrow functionda this timer1 temsil edir

const timer2={
    seconds:0,
    start(){
        setInterval(function(){
            this.seconds++;
            console.log(this.seconds);
        },1000);
    }
};
timer2.start();// seconds normal artmayacaq cunku normal functionda this globalı temsil edir secondsu görməyəcək.


class Component{
    name;
    constructor(name){
        this.name=name
    }
    delayedGreet(){
        setTimeout(()=>{
            console.log(`Hello from ${this.name}`)
        },500)
    }
}

//Task 7
function fetchRecord(id){
    return new Promise((resolve,reject)=>{
        if(!id){
            reject("Error: No ID provided");
        }
        else{
            setTimeout(()=>{
                resolve({id,name:"SDM"});
            },500);
        }
    });
}

fetchRecord("1000")
    .then(record=>console.log("Success",record))
    .catch(error=>console.log("Error:",error));
fetchRecord(null)
    .then(record=>console.log("Success:",record))
    .catch(error=>console.log("Error:",error));

async function runAsyncCalls(){
    try{
        const record1=await fetchRecord("1000");
        console.log("Success:",record1);
    }
    catch(error){
        console.log("Error:",error)
    }
    try{
        const record2=await fetchRecord(null);
        console.log("Success:",record2);
    }
    catch(error){
        console.log("Error:",error)
    }
}
runAsyncCalls();

//Task 8
function formatRecord(record){
   return `Account: ${record.name} | Industry: ${record.industry} | Revenune: ${record.revenue}`
}
const rec={name:"Salesforce",industry:"Technology",revenue:"$500,000"};
console.log(formatRecord(rec));

function greetUser(name = "Guest", role = "Viewer"){
    return `Welcome, ${name} ! Your role is: ${role}`
}
console.log(greetUser("Orkhan","Admin"))

class Vehicle{
    describe(){
        return "Vehicle moving";
    }
}

class Bike extends Vehicle {
    constructor(speed){
        super();
        this.speed=speed;
    }
    describe(){
        return `Bike is moving at ${speed} km/h `
    }

}

const myBike=new Bike(45);
console.log(myBike.describe());
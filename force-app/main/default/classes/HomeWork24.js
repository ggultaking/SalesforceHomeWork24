//Task 1
const companyName = "Socar Downstream";
let visitCounter = 1;
let isUserActive= true;
let userScore;

console.log("companyName:", companyName,"| type:", typeof companyName);
console.log("visitCounter:", visitCounter,"| type:",typeof visitCounter);
console.log

//Task 2

function getDealStatus(amount){
    if(amount<10000){
        return "Samll Deal";
    }
    else if (amount>=10000 && amount<=100000){
        return "Medium Deal";
    }
    else{ 
        return "Large Deal — Manager Approval Required";
    }
   
}

console.log(getDealStatus(500));
console.log(getDealStatus(15000));
console.log(getDealStatus(100350));

//Task 3

const accounts = [
    { Id: "001", Name: "Google", Industry: "Technology", Revenue: 500000 },
    { Id: "002", Name: "ABB", Industry: "Banking", Revenue: 80000 },
    { Id: "003", Name: "Amazon", Industry: "Technology", Revenue: 1200000 },
    { Id: "004", Name: "LocalShop", Industry: "Retail", Revenue: 9000 }
];

const byFilter=accounts.filter(account=>account.Industry="Technology");
const byMap=accounts.map(account=>({label: account.Name, value: account.Id}));
const byFind=accounts.find(account=>account.Name="ABB");
const byFilter2=accounts.filter(account=>account.Revenue>100000);

//Task 4
const contact = {
    firstName: "Ali",
    lastName: "Mammadov",
    email: "ali@example.com",
    phone: "0501234567"
};

const {firstName,email}=contact;
const updatedContact={...contact,phone:"0559999999"};

console.log(firstName);
console.log(email);
console.log(updatedContact);
console.log(contact);

//Task 5

class SalesComponent{
    componentName;
    isLoaded=false;
    records=[];
    constructor(companyName){
        this.componentName=companyName;
        
    }
    load=(data)=>{
        this.isLoaded=true;
        this.records=data;
    }
    getSummary=()=>{
        return `Component: ${this.componentName} | Loaded: ${this.isLoaded} | Records: ${this.records.length}`
    }
}

const myComponent=new SalesComponent("My Component");

myComponent.load([{id:1,name:"Record1"},{id:2,name:"Record2"},{id:3,name:"Record3"}]);

console.log(myComponent.getSummary());




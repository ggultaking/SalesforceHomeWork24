function fetchAccounts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const accounts=[{Id:"3000",Name:"Karbamid"},{Id:"1000",Name:"SDM"}];
            if(accounts.length>0){
                resolve(accounts);
            }
            else{
                reject("No accounts found");
            }
            
        },1000);
    });
}
fetchAccounts()
.then((result)=>{
    console.log("Accounts:",result);
})
.catch((error)=>{
    console.log("Error:",error);
});

//Bonus
async function getAccounts(){
    try{
        const result=await fetchAccounts();
        console.log("Accounts(async/await):",result);
    }
    catch(error){
        console.log("Error:",error);
    }
}
getAccounts();
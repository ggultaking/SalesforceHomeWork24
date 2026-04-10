class AccountManager {
    accounts=[];
    isLoading=false;
    error=null;
 loadAccounts(){
    this.isLoading=true;
    return new Promise((resolve)=>{
        setTimeout(()=>{
            this.accounts = [
                    { Id: "001", Name: "Salesforce", Industry: "Technology", Revenue: 500000 },
                    { Id: "002", Name: "Tesla", Industry: "Automotive", Revenue: 800000 },
                    { Id: "003", Name: "Google", Industry: "Technology", Revenue: 1200000 },
                    { Id: "004", Name: "Pfizer", Industry: "Healthcare", Revenue: 600000 }
                ];
                this.isLoading=false;
                resolve(this.accounts);
        },800);
    });
 }
 getByIndustry(industry){
    return this.accounts.filter(account=> account.Industry===industry);
 }
 formatForDropDown(){
    return this.accounts.map(account=>({
        label:account.Name,
        value:account.Id
    }));
 }
 addAccount(account){
    this.accounts=[...this.accounts,account];
 }
 getSummary(){
    return `Total accounts: ${this.accounts.length} | Loading: ${this.isLoading}`
 }
}

async function testAccountManager(){
    const manager=new AccountManager();
    await manager.loadAccounts();
    console.log(manager.accounts);
    console.log(manager.getByIndustry("Technology"));
    console.log(manager.formatForDropDown());
    manager.addAccount({
        Id:"008",
        Name:"SDM",
        Industry:'Technology',
        Revenue:89546
    });
    console.log(manager.accounts);
    console.log(manager.getSummary());
}

testAccountManager();
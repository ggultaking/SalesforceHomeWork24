class AccountManager{
    accounts=[];
    isLoading=false

    loadAccounts(data){
        this.isLoading=true;
        this.accounts=data;
        this.isLoading=false;
    }
    getByIndustry(industry){
        return this.accounts.filter(account=>account.Industry===industry);
    }
    formatForDropdown(){
        return this.accounts.map(account=>({
            label:account.Name,
            value:account.Id
        }));
    }
    addAccount(account){
        this.accounts=[...this.accounts,account];
    }
    getSummary(){
        return `Total Accounts: ${this.accounts.length}`;
    }
}
const data = [
  { Id: "001", Name: "Google", Industry: "Technology" },
  { Id: "002", Name: "ABB", Industry: "Banking" },
  { Id: "003", Name: "Amazon", Industry: "Technology" }
];
const manager=new AccountManager();
manager.loadAccounts(data);
console.log("Technology Accounts:", manager.getByIndustry("Technology"));
console.log("Dropdown:",manager.formatForDropdown());
manager.addAccount({Id:"004",Name:"LocalSho",Industry:"Retail"});
console.log("After Add:", manager.accounts);
console.log(manager.getSummary());
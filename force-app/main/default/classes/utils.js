function formatCurrency(amount){
    return`$ ${amount.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}`;
}
const DEFAULT_CURRENCY="USD";

export{formatCurrency,DEFAULT_CURRENCY}
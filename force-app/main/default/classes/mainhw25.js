import {formatForDropDown,filterByIndustry, MAX_RECORDS} from"./recordUtils.js"

const records=[
    { Id: "001", Name: "Salesforce", Industry: "Technology" },
    { Id: "002", Name: "Tesla", Industry: "Automotive" },
    { Id: "003", Name: "Google", Industry: "Technology" },
    { Id: "004", Name: "Pfizer", Industry: "Healthcare" }
];

const dropDownData=formatForDropDown(records);
console.log(dropDownData);

const techCompanies=filterByIndustry(records,"Technology");
console.log(techCompanies);

console.log(MAX_RECORDS);
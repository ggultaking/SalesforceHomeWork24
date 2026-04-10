function formatForDropDown(records){
    return records.map(record=>({
        label:record.Name,
        value:record.Id
    }));
}

function filterByIndustry(records,industry){
    return records.filter(record=>record.Industry===industry);
}

const MAX_RECORDS=200;

export{formatForDropDown,filterByIndustry,MAX_RECORDS};
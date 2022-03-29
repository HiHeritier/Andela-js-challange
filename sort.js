function customSort(sort){
    let finalSort = [];
    let values = Object.values(arguments);
    values.forEach(function(groupOfGroups) {
        for (let j = 0; j < groupOfGroups.length; j += 1) {
            let individualValues = groupOfGroups[j];
            if (finalSort.indexOf(individualValues) === -1) {
                finalSort.push(individualValues);
            }
        }
    })
    return finalSort;
}
let result = customSort([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);
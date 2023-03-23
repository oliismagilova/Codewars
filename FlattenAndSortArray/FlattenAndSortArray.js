function flattenAndSort(array) {
    return array.flat().sort((a,b)=> a-b);
}

module.exports = flattenAndSort;

//flat() The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//FE - const arr1 = [0, 1, 2, [3, 4]];
//console.log(arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

/*function flattenAndSort(array) {
 let res = [];
 
 for (let i=0; i<array.length; i++) {
     for (let j=0; j<array[i].length; j++) {
         res.push (array[i][j])
     }
 }
 for (let i=0; i<res.length; i++) {
     for (let j=i+1; j<res.length; j++) {
         if (res[i] > res[j]) {
             [res[i], res[j]] = [res[j], res[i]]
         }
     }
 }
 return res;
}*/

/*function flattenAndSort(array) {
 let res = [];
 
 for (let i=0; i<array.length; i++) {
     for (let j=0; j<array[i].length; j++) {
         res.push (array[i][j])
     }
 }
return res.sort((a,b) => a-b)
}*/

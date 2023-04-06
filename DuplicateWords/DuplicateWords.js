// function removeDuplicateWords (s) {
//     let splitted = s.split(' ');
//     let res = [];
//     for (let i=0; i<splitted.length; i++) {
//         if (!res.includes(splitted[i]) ) {
//             res.push(splitted[i])
//         }
//     }
//         return res.join(' ')
// }

function removeDuplicateWords (s) {
    let newArr = s.split(' ')
    return newArr.filter ((item, index) => newArr.indexOf(item) == index )
            .join(' ')
}

module.exports = removeDuplicateWords;
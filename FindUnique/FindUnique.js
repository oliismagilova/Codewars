function findUnique(arr) {
    let sortArr = arr.sort((a,b)=> a-b)
    return +sortArr.filter((item, i) => item !=sortArr[i+1] && item!=sortArr[i-1]  )
}

module.exports = findUnique;
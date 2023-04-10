function convertHashToArray(hash){
let res=[]
for (let key in hash) {
    res.push([`${key}`, hash[key]])
}
return res.sort()
}

module.exports = convertHashToArray;
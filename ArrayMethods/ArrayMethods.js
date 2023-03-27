Array.prototype.square = function square () {
    return this.map (el => Math.pow (el, 2))
}
Array.prototype.cube = function cube () {
    return this.map (el => el ** 3)
}
Array.prototype.sum = function sum () {
    return this.reduce ((x,y) => x+y, 0 )
}
Array.prototype.average = function average () {
    return this.sum()/this.length;
}
Array.prototype.even = function even () {
    return this.filter (function(el){
        if (el % 2 == 0) {
            return el
        }
    })}
Array.prototype.odd = function odd () {
    return this.filter (el => el % 2 !==0)
}

module.exports = Array.prototype.square;
module.exports = Array.prototype.cube;
module.exports = Array.prototype.sum;
module.exports = Array.prototype.average;
module.exports = Array.prototype.even;
module.exports = Array.prototype.odd;



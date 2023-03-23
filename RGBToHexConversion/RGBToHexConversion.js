function rgb(r, g, b){
    let value = convertToHex(r) +convertToHex(g)+ convertToHex(b);
    return value.toUpperCase();
  // complete this function  
}

function convertToHex(value) {
    if (value <=0) {
        return '00'
    } else if (value >=255) {
        return 'FF'
    } else {
        return value.toString(16).padStart(2, '0');
    }
}

module.exports = rgb;
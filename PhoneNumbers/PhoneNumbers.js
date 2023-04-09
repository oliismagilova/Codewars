function findDuplicatePhoneNumbers(phoneNumbers) {
    let arr = phoneNumbers;
    let res = [];
    let count = {};
    let final = []

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/-|\s/g, "")
        for (let j = 0; j < arr[i].length; j++) {
            res.push(convertLetters(arr[i][j]))
        }
    }
    let newString = res.join('');
    newString = newString.match(/.{7}/g).sort().map(item => item.substr(0, 3) + "-" + item.substr(3, 7))
    newString.forEach(function (element) {
        count[element] = (count[element] || 0) + 1;
    });

    for (let key in count) {
        if (count[key] > 1) {
            final.push(`${key}:${count[key]}`)
        }
    }
    return final
}

function convertLetters(value) {
    value = value.toUpperCase()
    if (value == 'A' || value == 'B' || value == 'C') {
        return '2'
    } else if (value == 'D' || value == 'E' || value == 'F') {
        return '3'
    } else if (value == 'G' || value == 'H' || value == 'I') {
        return '4'
    } else if (value == 'J' || value == 'K' || value == 'L') {
        return '5'
    } else if (value == 'M' || value == 'N' || value == 'O') {
        return '6'
    } else if (value == 'P' || value == 'R' || value == 'S') {
        return '7'
    } else if (value == 'T' || value == 'U' || value == 'V') {
        return '8'
    } else if (value == 'W' || value == 'X' || value == 'Y') {
        return '9'
    } else {
        return value
    }
}

module.exports = findDuplicatePhoneNumbers;
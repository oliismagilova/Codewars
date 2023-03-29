function scoreboard(string) {
    let score = {
        'nil': 0,
        'one': 1, 
        'two': 2, 
        'three': 3,
        'four': 4, 
        'five': 5, 
        'six': 6, 
        'seven': 7, 
        'eight': 8, 
        'nine': 9
    }
    
    let splitted = string.split(' '); 
    let res = [];
    for (let i=0; i < splitted.length; i++) {
       for (const property in score) {
        if (splitted[i] == property) {
            res.push(score[property])
        }
        }
    }
     return res;
}

module.exports = scoreboard;
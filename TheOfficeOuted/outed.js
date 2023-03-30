function outed(meet, boss){
    let sum = 0;
    let length = Object.keys(meet).length;
    let res=0;
  
    for (const value in meet) {
        if (meet.hasOwnProperty (value)) {
        if (value == boss)  {
            sum += meet[value]*2
        }  else {
             sum += meet[value];
        }
        }
    }
   res = sum / length;
    if (res <=5) {
        return 'Get Out Now!'
    } else {
        return 'Nice Work Champ!'
    }
}

module.exports = outed;

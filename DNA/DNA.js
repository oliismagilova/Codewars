function DNAStrand(dna){
    return dna.split('').map(function(item) {
        if (item == 'A') {
            return 'T'
        } else if (item == 'T') {
            return 'A'
        } else if (item == 'C') {
            return 'G'
        } else if (item == 'G') {
            return 'C'
        }
    }).join('')
}

module.exports = DNAStrand;

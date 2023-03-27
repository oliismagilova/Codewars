const DNAStrand= require('./DNA');

test('DNAStrand() should return the complimentary side of DNA', () => {
    expect(DNAStrand("AAAA")).toBe("TTTT")
    expect(DNAStrand('ATTGC')).toBe('TAACG')
    expect(DNAStrand('GTAT')).toBe('CATA')
}
)
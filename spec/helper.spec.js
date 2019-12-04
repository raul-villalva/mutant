var helper = require('../helper/helperDna');

describe("check mutant ", function() {
    var _numberA;
    var _numberB;

    it("should be true", function() {

        var dna = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
        var result = helper.isMutant(dna);

        expect(result).toEqual(true);
    });

    it("should return false", function() {

        var dna = ["ATGATG","CAGTGC","TTATGT","ASDAGG","CSDCTA","TCACTG"]
        var result = helper.isMutant(dna);

        expect(result).toEqual(false);
    });
});
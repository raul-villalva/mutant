var da = require('../helper/da.js');

describe("save data of results ", function() {
    var _numberA;
    var _numberB;

    it("should be true,", function () {

        var result = da.incType("mutant");

        expect(result).toEqual(true);
    });
    it("should be true,", function () {

        var result = da.incType("human");

        expect(result).toEqual(true);
    });

    it("should be true,", function () {

        var result = da.incType("human");

        expect(result).toEqual(true);
    });

    it("should be diferent to null,", function () {
        var result = da.getStats();

        expect(result).not.toEqual(null);

    });
});
let expect = require("chai").expect;
let beginner = require("../controllers/test");

describe('FUNCTIONS FORMAT FILE', () => {
    describe("Format CsvFiles Object", () => {
        it("It should  Format csv", () => {

            const input = [
                'test9.csv',
                'JnghOdZailrPUGeZlkDrIMC',
                '5499892856',
                '4549c189d3d48466b37248ce3ecf4f25'
            ];
            const expected = {
                text: 'JnghOdZailrPUGeZlkDrIMC',
                number: '5499892856',
                hex: '4549c189d3d48466b37248ce3ecf4f25'
            };

            const result = beginner.getObjectLine(input);

            expect(result).to.deep.equal(expected);


        });

    });
});
const { returnTwo, greeting, add, multiply, subtract, divide } = require("./functions")

    describe("Testing function", () => {
        test("Returns a number", () => {
            expect(returnTwo()).toEqual(2)
        })
        test("Greeting with name inputed", () => {
            expect(greeting("Draden")).toEqual("Hello, Draden")
        })
        test('Test the adds function', () => {
            expect(add(2,3)).toBe(5)
        })
    })

    describe('Math Functions', () => {
        test('checks the multiply function', () => {
            expect(multiply(5,5)).toBe(25)
            expect(multiply(3,3)).toBe(9)
        })
        test('checks the divide function', () => {
            expect(divide(10,2)).toBe(5)
            expect(divide(15,3)).toBe(5)
        })
        test('checks the subtract function', () => {
            expect(subtract(10,5)).toBe(5)
            expect(subtract(50,25)).toBe(25)
        })
    })
    
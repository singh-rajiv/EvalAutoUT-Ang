import * as exponential_strength_pipe from "./exponential-strength.pipe"
// @ponicode
describe("transform", () => {
    let inst: any

    beforeEach(() => {
        inst = new exponential_strength_pipe.ExponentialStrengthPipe()
    })

    test("0", () => {
        let result: any = inst.transform(1, 1)
        expect(result).toBe(1)
    })

    test("1", () => {
        let result: any = inst.transform(2, 1)
        expect(result).toBe(2)
    })

    test("2", () => {
        let result: any = inst.transform(2, 2)
        expect(result).toBe(4)
    })

    test("3", () => {
        let result: any = inst.transform(3, 3)
        expect(result).toBe(27)
    })
})

import * as message_service from "./message.service"
// @ponicode
describe("clear", () => {
    let inst: any

    beforeEach(() => {
        inst = new message_service.MessageService()
    })

    test("0", () => {
        let result: any = inst.clear()
        expect(result).toBe(undefined)
    })
})

// @ponicode
describe("add", () => {
    let inst: any

    beforeEach(() => {
        inst = new message_service.MessageService()
    })

    test("0", () => {
        let result: any = inst.add("function substr(start, length) {\n        return string_substr.call(\n            this,\n            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,\n            length\n        );\n    }")
        expect(result).toBe(undefined)
    })

    test("1", () => {
        let result: any = inst.add("function log(code) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        console.log(utils.tr.apply(null, arguments));\n    }\n")
        expect(result).toBe(undefined)
    })
})
